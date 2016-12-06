"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var user_form_validators_1 = require('./user_form.validators');
var users_service_1 = require('../users.service');
var user_1 = require('../user');
var UserFormComponent = (function () {
    function UserFormComponent(_fb, _service, _router, _ActivatedRoute) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._ActivatedRoute = _ActivatedRoute;
        this.pageTitle = "New User";
        this.user = new user_1.User();
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    user_form_validators_1.NewUserValidators.validEmail])],
            phone: [],
            address: this._fb.group({
                street: [],
                suite: [],
                city: [],
                zipCode: []
            })
        });
        this._ActivatedRoute.params.subscribe(function (params) { return _this.userId = params['id']; });
        if (this.userId != null) {
            this.pageTitle = 'Edit User';
            this._service.getUser(this.userId).subscribe(function (res) { return _this.user = res; }, function (response) {
                if (response.status == 404) {
                    _this._router.navigate(['notfound']);
                }
            });
        }
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var result;
        if (this.userId != null)
            result = this._service.updateUser(this.form.value, this.userId);
        else
            result = this._service.createUser(this.form.value);
        result.subscribe(function (res) {
            _this.form.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'new-user',
            templateUrl: 'app/users/user_form/user_form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.ActivatedRoute])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user_form.component.js.map