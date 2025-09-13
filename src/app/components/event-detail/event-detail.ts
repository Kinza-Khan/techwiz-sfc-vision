import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';

@Component({
  imports:[DatePipe,BreadcrumbComponent,NgFor, NgIf, SlicePipe,RouterLink],
  selector: 'app-event-detail',
  templateUrl: './event-detail.html',
  styleUrls: ['./event-detail.scss']
})
export class EventDetail implements OnInit {
  events: any[] = [];
  event: any;
  relatedEvents: any[] = [];
   breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Events', url: '/events' },
    { label: 'Event Detail', url: '' }
  ];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.http.get<any[]>('./data/events.json').subscribe(data => {
      this.events = data;

      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.event = this.events.find(e => e.id === id);

      // Related events = same category/tag (or random if no tags)
      if (this.event?.tags?.length) {
        this.relatedEvents = this.events
          .filter(e => e.id !== id && e.tags?.some((t: string) => this.event.tags.includes(t)))
          .slice(0, 3);
      } else {
        this.relatedEvents = this.events.filter(e => e.id !== id).slice(0, 3);
      }
    });
  }
}