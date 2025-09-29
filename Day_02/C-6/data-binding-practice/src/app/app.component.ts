import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatabindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-practice';
}
