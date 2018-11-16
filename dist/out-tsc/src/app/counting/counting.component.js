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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CountingComponent = /** @class */ (function () {
    function CountingComponent(http) {
        this.http = http;
        this.audio = new Audio();
        this.payload = {};
        this.number = 0;
    }
    CountingComponent.prototype.ngOnInit = function () {
        // this.count()
        // this.playBeep()
    };
    CountingComponent.prototype.setHeader = function (options) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', "application/json");
        options.headers = headers;
    };
    CountingComponent.prototype.playBeep = function () {
        this.audio.src = "./assets/beep.mp3";
        this.audio.load();
        this.audio.play();
    };
    CountingComponent.prototype.playBuup = function () {
        this.audio.src = "./assets/buup.mp3";
        this.audio.load();
        this.audio.play();
    };
    CountingComponent.prototype.count = function () {
        var _this = this;
        var options = new http_1.RequestOptions();
        this.setHeader(options);
        this.http.get('http://192.168.1.7:3000/increase', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.number = res['data'];
            localStorage.setItem('number', String(_this.number));
            _this.playBeep();
        }, function (err) {
            console.log(err);
            _this.playBuup();
            // err
        });
    };
    CountingComponent = __decorate([
        core_1.Component({
            selector: 'app-counting',
            templateUrl: './counting.component.html',
            styleUrls: ['./counting.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], CountingComponent);
    return CountingComponent;
}());
exports.CountingComponent = CountingComponent;
//# sourceMappingURL=counting.component.js.map