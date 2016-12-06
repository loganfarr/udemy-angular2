"use strict";
var PreventUnsavedChangesGuard = (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to leave the page?');
        return true;
    };
    return PreventUnsavedChangesGuard;
}());
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map