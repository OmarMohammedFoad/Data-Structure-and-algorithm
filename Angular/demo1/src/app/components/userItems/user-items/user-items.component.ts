
import { Component } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import Iuser from '../../../interface/userItems';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  providers: [UsersService],
  templateUrl: './user-items.component.html',
})
export class UsersComponent {
  Id = 0;
  user: any = {
    address: '',
    email: '',
    name: '',
    phone: '',
  };
  constructor(myActivated:ActivatedRoute,private usersService: UsersService) {
    this.Id = myActivated.snapshot.params['id'];
  }
  ngOnInit() {
    this.usersService.getUserById(this.Id).subscribe({
      next: (data) => {
        this.user=data;
      }
      ,
      error: (err) => {
        console.log(err);
      },
    });
  }
}
