import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';
import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';

@Component({
  imports:[BreadcrumbComponent, NgFor],
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  team = [
    {
      name: 'Ali Raza',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Aleena Iqbal',
      role: 'Event Coordinator',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Zeeshan',
      role: 'Technical Lead',
      image: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
  ];
}
