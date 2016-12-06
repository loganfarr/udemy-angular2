import {Router, RouterModule} from '@angular/router';

import {HomeComponent}              from './home/home.component';
import {UserFormComponent}          from './users/user_form/user_form.component';
import {NotFoundComponent}          from './notfound/notfound.component';
import {PostsComponent}             from './posts/posts.component';
import {PreventUnsavedChangesGuard} from './prevent_unsaved_changes_guard/prevent-unsaved-changes-guard.service';
import {UsersComponent}             from './users/users.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent, canDeactivate: [ PreventUnsavedChangesGuard ] },
  { path: 'users/:id', component: UserFormComponent, canDeactivate: [ PreventUnsavedChangesGuard ] },
  { path: 'notfound', component: NotFoundComponent},
  { path: '**', component: NotFoundComponent }
  // { path: '**', redirectTo: '/'}
]);