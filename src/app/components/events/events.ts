import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';
import { EventsI } from '../../models/events-i.model';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, SlicePipe, RouterLink, BreadcrumbComponent, FormsModule],
  templateUrl: './events.html',
  styleUrls: ['./events.scss']
})
export class Events implements OnInit {
  allEvents: EventsI[] = [];
  filteredEvents: EventsI[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  sortOrder: string = 'asc';

  constructor(private ds: Data) {}

  ngOnInit(): void {
    this.ds.getEvents().subscribe((events: EventsI[]) => {
      this.allEvents = [...events].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      const cats = Array.from(new Set(events.map(e => e.category ?? 'Other')));
      this.categories = ['All', 'Academic', 'Cultural', 'Sports'];
      this.selectedCategory = this.categories[0] ?? 'All';

      this.filterEvents();
    });
  }

  filterEvents(): void {
    this.filteredEvents =
      this.selectedCategory === 'All'
        ? [...this.allEvents]
        : this.allEvents.filter(e => e.category === this.selectedCategory);

    this.filteredEvents.sort((a, b) =>
      this.sortOrder === 'asc'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
    this.filterEvents();
  }

  changeSort(order: string): void {
    this.sortOrder = order;
    this.filterEvents();
  }

  isUpcoming(event: EventsI): boolean {
    return new Date(event.date) >= new Date();
  }
}
