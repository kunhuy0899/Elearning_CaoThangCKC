"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var helper_1 = require("../../../common/helper");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        // Cờ đã đăng nhập
        this.isLogged = false;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-z][a-z0-9_\.]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')
            ]),
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(5)
            ]),
            // remember: new FormControl(false),
            loaiTaiKhoan: new forms_1.FormControl('3')
        });
    }
    Object.defineProperty(AppComponent.prototype, "email", {
        //Validator
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onLogout = function () {
        helper_1.setCookie('token', '', '0');
        helper_1.setCookie('email', '', '0');
        helper_1.setCookie('role', '', '0');
        helper_1.setCookie('name', '', '0');
        window.location.href = 'https://localhost:4200';
    };
    AppComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(function (response) {
                if (response.data != null && response.data.role == 'admin') {
                    helper_1.setCookie('token', response.data.token, '7');
                    helper_1.setCookie('role', response.data.role, '7');
                    helper_1.setCookie('name', response.data.name, '7');
                    helper_1.setCookie('email', response.data.email, '7');
                    _this.isLogged = true;
                }
                if (response.data != null && response.data.role != 'admin') {
                    var token = response.data.token;
                    var role = response.data.role;
                    var email = response.data.email;
                    var name = response.data.name;
                    window.location.href = "http://localhost:4400/login?token=" + token + "&role=" + role + "&email=" + email + "&name=" + name;
                }
                if (response.data == null) {
                    _this.toastr.error(response.msg, 'ERROR', { timeOut: 6000 });
                }
                if (response.data != null && response.data.role != 'admin') {
                    _this.toastr.error('Tài khoản này không có quyền truy cập vào trang admin', 'ERROR', { timeOut: 6000 });
                }
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
