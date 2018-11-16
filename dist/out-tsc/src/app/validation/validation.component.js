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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_barcode_scanner_1 = require("ngx-barcode-scanner");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var rxjs_1 = require("rxjs");
var ValidationComponent = /** @class */ (function () {
    function ValidationComponent(http) {
        var _this = this;
        this.http = http;
        this.audio = new Audio();
        this.payload = {};
        this.mySubject = new rxjs_1.Subject();
        this.mySubject
            .debounceTime(800)
            .subscribe(function (value) {
            _this.barcodeValue = value;
            var options = new http_1.RequestOptions();
            _this.setHeader(options);
            _this.payload['code'] = value;
            _this.http.post('http://101.50.2.59:3031/ticket-validate', _this.payload, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                return _this.playBeep().then(function () {
                    alert("Validasi berhasil!");
                });
            }, function (err) {
                return _this.playBuup().then(function () {
                    alert("Tiket tidak ditemukan!");
                });
            });
        });
    }
    ValidationComponent.prototype.ngOnInit = function () {
        this.playBeep();
    };
    ValidationComponent.prototype.ngAfterViewInit = function () {
        this.BarecodeScanner.start();
    };
    ValidationComponent.prototype.setHeader = function (options) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', "application/json; charset=utf-8");
        options.headers = headers;
    };
    ValidationComponent.prototype.playBeep = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.audio.src = "./assets/beep.mp3";
            _this.audio.load();
            _this.audio.play();
            resolve();
        });
    };
    ValidationComponent.prototype.playBuup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.audio.src = "./assets/buup.mp3";
            _this.audio.load();
            _this.audio.play();
            resolve();
        });
    };
    ValidationComponent.prototype.onValueChanges = function (value) {
        this.mySubject.next(value.code);
    };
    __decorate([
        core_1.ViewChild(ngx_barcode_scanner_1.BarecodeScannerLivestreamComponent),
        __metadata("design:type", ngx_barcode_scanner_1.BarecodeScannerLivestreamComponent)
    ], ValidationComponent.prototype, "BarecodeScanner", void 0);
    ValidationComponent = __decorate([
        core_1.Component({
            selector: 'app-validation',
            templateUrl: './validation.component.html',
            styleUrls: ['./validation.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ValidationComponent);
    return ValidationComponent;
}());
exports.ValidationComponent = ValidationComponent;
//# sourceMappingURL=validation.component.js.map