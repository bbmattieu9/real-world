import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  vm$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log('[ __Form Value__]:', this.form.getRawValue());
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
  }
}
