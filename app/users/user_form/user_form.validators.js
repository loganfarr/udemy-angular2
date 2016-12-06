"use strict";
var NewUserValidators = (function () {
    function NewUserValidators() {
    }
    NewUserValidators.validEmail = function (control) {
        //Regex expression for validating the email
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(control.value))
            return { validEmail: true };
        return null;
    };
    return NewUserValidators;
}());
exports.NewUserValidators = NewUserValidators;
//# sourceMappingURL=user_form.validators.js.map