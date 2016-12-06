"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var user_form_component_1 = require('./users/user_form/user_form.component');
var notfound_component_1 = require('./notfound/notfound.component');
var posts_component_1 = require('./posts/posts.component');
var prevent_unsaved_changes_guard_service_1 = require('./prevent_unsaved_changes_guard/prevent-unsaved-changes-guard.service');
var users_component_1 = require('./users/users.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/new', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: 'users/:id', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: 'notfound', component: notfound_component_1.NotFoundComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map