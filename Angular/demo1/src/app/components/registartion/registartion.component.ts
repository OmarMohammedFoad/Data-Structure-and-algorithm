import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registartion',
  imports: [ ReactiveFormsModule],
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css',
})
export class RegistartionComponent {
  name: string = '';
  age: number = 0;
  @Output() event = new EventEmitter<{ name: string; age: number }>();

  // register() {
  //   if (this.age >= 15 || (this.age <= 30 && this.name.length >= 5)) {
  //     this.event.emit({ name: this.name, age: this.age });
  //   }

  // console.log(this.event);
  // }


  get NameValid(){
    return this.MyForm.controls.name.valid;
  }

  get AgeValid(){
    return this.MyForm.controls.age.valid;
  }

  MyForm = new FormGroup({
    name: new FormControl('null', [Validators.minLength(3),Validators.required]),
    age: new FormControl('', [Validators.min(3), Validators.max(30)]),
  });

  register() {
    // console.log(this.MyForm.value);
    // console.log({ name: this?.name, age: this?.age });
    
    if (this.MyForm.valid) {
      const formValues = {
        name: this.MyForm.value.name || '',
        age: Number(this.MyForm.value.age) || 0
      };
      this.event.emit(formValues);
    }
  }
}
