import { Component } from '@angular/core';
import { InputsNameComponent } from './components/inputs-name/inputs-name.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';
import { RegistartionComponent } from './components/registartion/registartion.component';
import { StudentsComponent } from './components/students/students.component';
// import { , UsersComponent } from './components/userItems/user-items/user-items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
