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
var helper_1 = require("../../../common/helper");
var AppComponent = /** @class */ (function () {
    function AppComponent(cookie, toastr) {
        this.cookie = cookie;
        this.toastr = toastr;
        this.title = 'elearning';
        this.email = '';
        this.quyenGV = "";
        this.quyenHS = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tenTaiKhoan = helper_1.getCookie('name');
        this.quyenXemDiem();
    };
    AppComponent.prototype.quyenXemDiem = function () {
        this.doiTuong = this.cookie.get("role");
        if (this.doiTuong == 'SV') {
            this.quyenGV = 'none';
            this.quyenHS = '';
        }
        else {
            this.quyenHS = 'none';
            this.quyenGV = '';
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
