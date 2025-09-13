import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Events } from './components/events/events';
import { EventDetail } from './components/event-detail/event-detail';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Feedback } from './components/feedback/feedback';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { Cover } from './components/cover/cover';
import { Calender } from './components/calender/calender';
import { scheduleArray } from 'rxjs/internal/scheduled/scheduleArray';
import { Sechdule } from './components/sechdule/sechdule';

export const routes: Routes = [
  { path: '', component:Cover },
  { path: 'home', component: Home },
  { path: 'events', component: Events },
  { path: 'event/:id', component: EventDetail },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'header', component: Header },
  { path: 'footer', component: Footer },
  { path: 'feedback', component: Feedback },
  { path: 'about', component: About },
  {path:'calender',component:Calender},
    { path: '**', component: NotFound },
    {path:'sch' , component:Sechdule}
];
