import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registartion',
  imports: [FormsModule],
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css',
})
export class RegistartionComponent {
  name: string = '';
  age: number = 0;
  @Output() event = new EventEmitter<{ name: string; age: number }>();

  register() {
    if (this.age >= 15 || (this.age <= 30 && this.name.length >= 5)) {
      this.event.emit({ name: this.name, age: this.age });
    }

    // console.log(this.event);
  }
}
