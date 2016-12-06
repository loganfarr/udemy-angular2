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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var navigation_component_1 = require('./navigation/navigation.component');
var user_form_component_1 = require('./users/user_form/user_form.component');
var notfound_component_1 = require('./notfound/notfound.component');
var pagination_component_1 = require('./pagination/pagination.component');
var posts_component_1 = require('./posts/posts.component');
var posts_service_1 = require('./posts/posts.service');
var prevent_unsaved_changes_guard_service_1 = require('./prevent_unsaved_changes_guard/prevent-unsaved-changes-guard.service');
var app_routing_1 = require('./app.routing');
var spinner_component_1 = require('./spinner/spinner.component');
var users_component_1 = require('./users/users.component');
var users_service_1 = require('./users/users.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navigation_component_1.NavigationComponent,
                user_form_component_1.UserFormComponent,
                notfound_component_1.NotFoundComponent,
                pagination_component_1.PaginationComponent,
                posts_component_1.PostsComponent,
                spinner_component_1.SpinnerComponent,
                users_component_1.UsersComponent
            ],
            providers: [
                posts_service_1.PostsService,
                prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard,
                users_service_1.UsersService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map