import { Component } from '@angular/core';
import Iuser from '../../../interface/userItems';
import { UsersService } from '../../../Services/users.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-items',
  imports: [RouterModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
})
export class UserItemsComponent {
  UserItem: any;

  constructor(public userService: UsersService, private router: Router) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        // console.log(data);
        this.UserItem = data;
      },
      error: (erro) => {
        console.log(erro, 'error');
      },
    });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (value) => {
        // alert('the user deleted succesfully');

        this.UserItem = this.UserItem.filter((user: any) => user.id !== id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // updateUser(id: number) {
  //   this.userService.updateUser(id, user).subscribe({
  //     next: (value) => {
  //       alert('the user updated succesfully');
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
}
