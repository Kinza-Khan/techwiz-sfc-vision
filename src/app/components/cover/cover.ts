import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover.html',
  styleUrls: ['./cover.scss']
})
export class Cover {
  constructor(private router: Router) {}

  setRole(role: string) {
    localStorage.setItem('userRole', role);
    this.router.navigate(['/home']); // redirect to homepage
  }
}
