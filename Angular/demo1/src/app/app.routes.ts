import { Routes } from '@angular/router';
import { UserItemsComponent } from './components/userItems/users/users.component';
import { UsersComponent } from './components/userItems/user-items/user-items.component';
import { AddUsersComponent } from './components/userItems/add-users/add-users.component';
import { UpdateUsersComponent } from './components/userItems/update-users/update-users.component';

export const routes: Routes = [
  { path: '', component: UserItemsComponent },
  { path: 'users', component: UserItemsComponent },
  { path: 'users/add', component: AddUsersComponent },
  { path: 'users/edit/:id', component: UpdateUsersComponent },
  { path: 'users/:id', component: UsersComponent },
  // {path:"**",component:}
];
