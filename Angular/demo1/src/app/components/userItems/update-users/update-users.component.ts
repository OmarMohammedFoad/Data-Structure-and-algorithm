import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import Iuser from '../../../interface/userItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-users.component.html',
  styles: ``
})
export class UpdateUsersComponent {
  user: Iuser = {
    firstName: '',
    email: '',
    address: '',
    phone: '',
  };
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.userService.getUserById(this.id).subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Failed to fetch user:', err);
      }
    });
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: () => {
        alert('User updated successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Update error:', err);
      }
    });
  }
}
