import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({

  selector: 'app-inputs-name',

  imports: [FormsModule],

  templateUrl: './inputs-name.component.html',

  styleUrl: './inputs-name.component.css'

})

export class InputsNameComponent {
  name:string=""

  reset(){
    this.name=""
  }
}




