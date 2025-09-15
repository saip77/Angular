import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name = 'Angular';
  disabled = true;
  passValue(event: any) {
    console.log(event.target.value);
  }
  nameDefault = 'React';
}
