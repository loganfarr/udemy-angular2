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
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (res) { return _this.users = res; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        console.log(user);
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            if (user != null && user != undefined) {
                this.users.splice(user.id - 1, 1);
                this._userService.deleteUser(user).subscribe(function (res) { return console.log(res); });
            }
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/users/users.component.html',
            styles: ["\n    .glyphicon-remove {\n      cursor: pointer;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map