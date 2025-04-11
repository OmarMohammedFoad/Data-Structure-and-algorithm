import { Component } from '@angular/core';
import { InputsNameComponent } from './components/inputs-name/inputs-name.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';

@Component({
  selector: 'app-root',
  imports: [InputsNameComponent,ViewImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo1';
}
