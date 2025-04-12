import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  @Input() student: { name: string; age: number } | undefined;

  students: { name: string; age: number }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && changes['student'].currentValue) {
      this.students.push(changes['student'].currentValue);
    }
  }
}
