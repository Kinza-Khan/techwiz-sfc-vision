import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';

@Component({
  imports:[DatePipe,BreadcrumbComponent,NgFor, NgIf]
,  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class Gallery implements OnInit {
  gallery: any[] = [];
  filtered: any[] = [];
  activeTab: string = 'all';

  crumbs = [
    { label: 'Home', link: '/' },
    { label: 'Gallery', link: '/gallery' }
  ];

  ngOnInit(): void {
    fetch('./data/gallery.json')
      .then(res => res.json())
      .then(data => {
        this.gallery = data;
        this.setTab('all');   // 👈 yehi call karega
      })
      .catch(err => console.error('Error loading gallery.json:', err));
  }

  // 👇 is function ka hona lazmi hai
  setTab(tab: string): void {
    this.activeTab = tab;
    if (tab === 'all') {
      this.filtered = this.gallery;
    } else {
      this.filtered = this.gallery.filter(item => item.type === tab);
    }
  }
}
