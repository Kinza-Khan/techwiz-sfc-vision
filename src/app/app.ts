import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Calender } from './components/calender/calender';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('campusconnect');
}
