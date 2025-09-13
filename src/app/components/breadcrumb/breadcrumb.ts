import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <nav aria-label="breadcrumb" class="breadcrumb-wrap" *ngIf="crumbs?.length">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" *ngFor="let c of crumbs; let last = last">
          <ng-container *ngIf="!last; else lastCrumb">
            <a [routerLink]="c.url">{{ c.label }}</a>
          </ng-container>
          <ng-template #lastCrumb>
            <span class="active">{{ c.label }}</span>
          </ng-template>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumb-wrap { margin-bottom: 1rem; }
    .breadcrumb { background: transparent; padding: 0; margin: 0; }
    .breadcrumb a { color: #6c757d; text-decoration: none; }
    .breadcrumb .active { color: #212529; font-weight: 600; }
  `]
})
export class BreadcrumbComponent {
  @Input() crumbs: { label: string; url: string }[] = [];
}