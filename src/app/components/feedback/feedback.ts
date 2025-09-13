import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.scss']
})
export class Feedback {
  feedbackForm: FormGroup;
  submitted = false;

  feedbacks = [
    { name: 'John Doe', message: 'Amazing event! Learned so much and had a great time. Highly recommend CampusConnect events!' },
    { name: 'Jane Smith', message: 'The workshops were engaging and interactive. Loved the team and the organization.' },
    { name: 'Ali Khan', message: 'Everything was well organized. The cultural fest was my favorite. Looking forward to more events!' }
  ];

  emojis: string[] = ['👍','❤️','🎉','😮','😃'];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      emoji: ['']
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.feedbackForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.feedbackForm.invalid) {
      return;
    }

    // Add feedback to list
    this.feedbacks.push({
      name: this.feedbackForm.value.name,
      message: this.feedbackForm.value.message
    });

    alert('Feedback submitted successfully!');
    this.feedbackForm.reset();
    this.submitted = false;
  }

  setEmoji(emoji: string): void {
    this.feedbackForm.patchValue({ emoji });
  }
}
