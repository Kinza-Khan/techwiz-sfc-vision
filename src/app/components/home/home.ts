import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { NgFor, NgIf, DatePipe, SlicePipe } from '@angular/common';
import { Data } from '../../services/data';
import { RouterLink } from '@angular/router';   
import { EventsI } from '../../models/events-i.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, SlicePipe ,RouterLink], 
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit, AfterViewInit {
  upcomingEvents: EventsI[] = [];
  pastEvents: EventsI[] = [];

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('list') list!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;
  @ViewChild('prevBtn') prevBtn!: ElementRef;
  @ViewChild('runningTime') runningTime!: ElementRef;

  timeRunning = 1000;
  timeAutoNext = 3000;

  private runTimeOut: any;
  private runNextAuto: any;

  constructor(private ds: Data, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.ds.getEvents().subscribe(events => {
      const today = new Date();

      this.upcomingEvents = events
        .filter(e => new Date(e.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);

      this.pastEvents = events
        .filter(e => new Date(e.date) < today)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
    });
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.nextBtn.nativeElement, 'click', () => this.showSlider('next'));
    this.renderer.listen(this.prevBtn.nativeElement, 'click', () => this.showSlider('prev'));

    this.runNextAuto = setTimeout(() => {
      this.nextBtn.nativeElement.click();
    }, this.timeAutoNext);

    this.resetTimeAnimation();
  }

  resetTimeAnimation() {
    const el = this.runningTime.nativeElement as HTMLElement;
    this.renderer.setStyle(el, 'animation', 'none');
    el.offsetHeight;
    this.renderer.removeStyle(el, 'animation');
    this.renderer.setStyle(el, 'animation', 'runningTime 3s linear 1 forwards');
  }

  showSlider(type: 'next' | 'prev') {
    const listEl = this.list.nativeElement as HTMLElement;
    const items = listEl.querySelectorAll('.item');

    if (items.length === 0) return;

    if (type === 'next') {
      this.renderer.appendChild(listEl, items[0]);
      this.renderer.addClass(this.carousel.nativeElement, 'next');
    } else {
      this.renderer.insertBefore(listEl, items[items.length - 1], items[0]);
      this.renderer.addClass(this.carousel.nativeElement, 'prev');
    }

    clearTimeout(this.runTimeOut);

    this.runTimeOut = setTimeout(() => {
      this.renderer.removeClass(this.carousel.nativeElement, 'next');
      this.renderer.removeClass(this.carousel.nativeElement, 'prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = setTimeout(() => {
      this.nextBtn.nativeElement.click();
    }, this.timeAutoNext);

    this.resetTimeAnimation();
  }
}
