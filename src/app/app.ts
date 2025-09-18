import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Router ,NavigationEnd  } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer ,NgIf], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    showLayout = true;
  protected readonly title = signal('campusconnect');
    constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide header/footer ONLY on cover page "/"
        this.showLayout = event.urlAfterRedirects !== '/';
      }
    });
  }
}
