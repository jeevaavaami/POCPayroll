import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html'
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, username } = this.signupForm.value;
      this.authService.signUp(email!, password!, username!).subscribe({
        next: () => alert('User registered successfully!'),
        error: (err:any) => alert('Error: ' + err.message)
      });
    }
  }
}