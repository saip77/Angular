import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databind',
  imports: [FormsModule],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {
  name = 'Angular';
  isdisabled: boolean = false;
  onToggle() {
    this.isdisabled = !this.isdisabled;
    alert('Event Binding');
  }

}
