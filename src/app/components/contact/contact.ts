import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ Standalone component
  imports: [
    CommonModule,
    ReactiveFormsModule, // ✅ Required for formGroup, formControlName
    BreadcrumbComponent
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter for easy access in template
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Form Data:', this.contactForm.value);
    alert('Your message has been sent successfully!');
    this.contactForm.reset();
    this.submitted = false;
  }
}
