import { Component } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import Iuser from '../../../interface/userItems';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  imports: [FormsModule],
  providers: [UsersService],
  templateUrl: './add-users.component.html',
  styles: ``,
})
export class AddUsersComponent {
  constructor(private userService: UsersService, private router: Router) {}
  user: Iuser = {
    firstName: '',
    email: '',
    address: '',
    phone: '',
  };
  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: () => {
        // console.log("asdsad");
        
        this.router.navigate(['/']);
      },
      error(err) {
          console.log(err);
          
      },
    });
  }
}
