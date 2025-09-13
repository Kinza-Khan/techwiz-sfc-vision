import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsI } from '../models/events-i.model';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private base = './data/';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventsI[]> {
    return this.http.get<EventsI[]>(this.base + 'events.json');
  }

  getBanners(): Observable<any[]> {
    return this.http.get<any[]>(this.base + 'banners.json');
  }
}
