import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  inputValue: string = '';

  onClick(e: any) {
    console.log(e.target.innerText);
  }
}
