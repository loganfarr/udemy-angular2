import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable }                         from 'rxjs/Observable';
import { Router, ActivatedRoute }             from '@angular/router';

import { FormComponent }      from '../../prevent_unsaved_changes_guard/prevent-unsaved-changes-guard.service';
import { NewUserValidators }  from './user_form.validators';
import { UsersService }       from '../users.service';
import { User }               from '../user';

@Component({
  selector: 'new-user',
  templateUrl: 'app/users/user_form/user_form.component.html'
})

export class UserFormComponent implements OnInit, FormComponent {
  form: FormGroup;

  pageTitle: string = "New User";

  userId: number;
  user = new User();
  constructor(
    private _fb: FormBuilder, 
    private _service: UsersService, 
    private _router: Router,
    private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        NewUserValidators.validEmail])],
      phone: [],
      address: this._fb.group({
        street: [],
        suite: [],
        city: [],
        zipCode: []
      })
    });

    this._ActivatedRoute.params.subscribe(params => this.userId = params['id']);

    if(this.userId != null) {
      this.pageTitle = 'Edit User';
      this._service.getUser(this.userId).subscribe(
        res => this.user = res,
        response => {
          if(response.status == 404) {
            this._router.navigate(['notfound']);
          }
        });
    }
  }  

  onSubmit() {
    var result;

    if(this.userId != null) 
      result = this._service.updateUser(this.form.value, this.userId);
    else 
      result = this._service.createUser(this.form.value);

    result.subscribe(res => {
      this.form.markAsPristine();
      this._router.navigate(['users']);
    });
  }
}