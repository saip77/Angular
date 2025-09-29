import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structural-practice';
}
