import { Component } from '@angular/core';
import { InputsNameComponent } from './components/inputs-name/inputs-name.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';
import { RegistartionComponent } from './components/registartion/registartion.component';
import { StudentsComponent } from './components/students/students.component';

@Component({
  selector: 'app-root',
  imports: [RegistartionComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  student: { name: string; age: number } | undefined;

  handleNewStudent(student: { name: string; age: number }) {
    this.student = { ...student }; 
  }
}
