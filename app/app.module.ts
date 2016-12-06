import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }          from '@angular/http';

import { AppComponent }               from './app.component';
import { HomeComponent }              from './home/home.component';
import { NavigationComponent }        from './navigation/navigation.component';
import { UserFormComponent }          from './users/user_form/user_form.component';
import { NotFoundComponent }          from './notfound/notfound.component';
import { PaginationComponent }        from './pagination/pagination.component';
import { PostsComponent }             from './posts/posts.component';
import { PostsService }               from './posts/posts.service';
import { PreventUnsavedChangesGuard } from './prevent_unsaved_changes_guard/prevent-unsaved-changes-guard.service';
import { routing }                    from './app.routing';
import { SpinnerComponent }           from './spinner/spinner.component';
import { UsersComponent }             from './users/users.component';
import { UsersService }               from './users/users.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    routing ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    NavigationComponent,
    UserFormComponent,
    NotFoundComponent,
    PaginationComponent,
    PostsComponent,
    SpinnerComponent,
    UsersComponent
  ],
  providers: [
    PostsService,
    PreventUnsavedChangesGuard,
    UsersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
