import { Component, signal } from '@angular/core'; 
import { SignupComponent } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [SignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Testapp');
}
