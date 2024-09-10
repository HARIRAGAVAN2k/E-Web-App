import { Component, inject, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],  // Ensure ReactiveFormsModule is properly imported
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss'],  // 'styleUrls' should be plural
})
export class CreateCourseFormComponent {
  courseForm!: FormGroup;
  fb = inject(FormBuilder);
  @Output() formSubmit = new EventEmitter<void>();

  constructor() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.formSubmit.emit();
    }
  }
}
