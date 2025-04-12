import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  @Input() students:{name:"",age:0}[]=[];


  
}
