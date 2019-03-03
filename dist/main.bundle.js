webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scan_scan_component__ = __webpack_require__("./src/app/scan/scan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_validation_component__ = __webpack_require__("./src/app/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counting_counting_component__ = __webpack_require__("./src/app/counting/counting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decrease_decrease_component__ = __webpack_require__("./src/app/decrease/decrease.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'validation', component: __WEBPACK_IMPORTED_MODULE_4__validation_validation_component__["a" /* ValidationComponent */] },
    { path: 'scan', component: __WEBPACK_IMPORTED_MODULE_3__scan_scan_component__["a" /* ScanComponent */] },
    { path: 'counting', component: __WEBPACK_IMPORTED_MODULE_5__counting_counting_component__["a" /* CountingComponent */] },
    { path: 'decrease', component: __WEBPACK_IMPORTED_MODULE_7__decrease_decrease_component__["a" /* DecreaseComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_barcode_scanner__ = __webpack_require__("./node_modules/ngx-barcode-scanner/esm5/ngx-barcode-scanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation_validation_component__ = __webpack_require__("./src/app/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counting_counting_component__ = __webpack_require__("./src/app/counting/counting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__zxing_ngx_scanner__ = __webpack_require__("./node_modules/@zxing/ngx-scanner/esm5/zxing-ngx-scanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__decrease_decrease_component__ = __webpack_require__("./src/app/decrease/decrease.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scan_scan_component__ = __webpack_require__("./src/app/scan/scan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_messaging__ = __webpack_require__("./node_modules/angularfire2/messaging/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__messaging_service__ = __webpack_require__("./src/app/messaging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__validation_validation_component__["a" /* ValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__counting_counting_component__["a" /* CountingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__decrease_decrease_component__["a" /* DecreaseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__scan_scan_component__["a" /* ScanComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_barcode_scanner__["b" /* BarecodeScannerLivestreamModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__zxing_ngx_scanner__["b" /* ZXingScannerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_messaging__["a" /* AngularFireMessagingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_18__messaging_service__["a" /* MessagingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counting/counting.component.css":
/***/ (function(module, exports) {

module.exports = "/*Container style is for illustration purpose only */\n.container{\n min-height: 400px;\n}\n/*Can achive using vw css unit*/\n.row-full{\n      width: 100vw;\n      position: relative;\n      margin-left: -50vw;\n      height: 100px;\n      margin-top: 100px;\n      left: 50%;\n}\n.button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n.button2 {background-color: #008CBA;}\n/* Blue */\n.button3 {background-color: #f44336;}\n/* Red */\n.button4 {background-color: #e7e7e7; color: black;}\n/* Gray */\n.button5 {background-color: #555555;}\n/* Black */"

/***/ }),

/***/ "./src/app/counting/counting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row row-full\" style=\"height:100px; text-align:center;\">\n\t\t<button class=\"button button3\" (click)=\"count()\">\n\t\t\t<strong>COUNT</strong>\n\t\t</button>\n\n\t\t<h1>{{number}}</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/counting/counting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountingComponent = /** @class */ (function () {
    function CountingComponent(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.audio = new Audio();
        this.payload = {};
        this.number = 0;
    }
    CountingComponent.prototype.ngOnInit = function () {
        this.number = Number(localStorage.getItem('number'));
        // this.count()
        // this.playBeep()
    };
    CountingComponent.prototype.setHeader = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
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
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.setHeader(options);
        this.http.get('http://192.168.1.9:3000/counting', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.number = res['data'];
            _this.storageService.store('number', _this.number);
            _this.playBeep();
        }, function (err) {
            console.log(err);
            _this.playBuup();
            // err
        });
    };
    CountingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-counting',
            template: __webpack_require__("./src/app/counting/counting.component.html"),
            styles: [__webpack_require__("./src/app/counting/counting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]])
    ], CountingComponent);
    return CountingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "/*Container style is for illustration purpose only */\n.container{\n min-height: 400px;\n}\n.selamat-datang {\n    font-size: 70px; \n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n}\n.data-outlet {\n    font-size: 110px; \n    color: #16A2B7; font-family: sans-serif;\n}\n.data-table {\n    color: #16A2B7;\n}\n.meja-anda {\n    font-size: 50px; \n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n}\n/*Can achive using vw css unit*/\n.row-full{\n      width: 100vw;\n      position: relative;\n      margin-left: -50vw;\n      height: 100px;\n      margin-top: 50px;\n      left: 50%;\n}\n.button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n.button2 {background-color: #008CBA;}\n/* Blue */\n.button3 {background-color: #f44336;}\n/* Red */\n.button4 {background-color: #e7e7e7; color: black;}\n/* Gray */\n.button5 {background-color: #555555;}\n/* Black */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row row-full\" style=\"text-align:center;\">\n\t\t<h3 class=\"selamat-datang\">Selamat Datang!</h3>\n\n        <h1 *ngIf=\"data\" class=\"data-outlet\">\"{{data.outlet}}\"</h1>\n        <h5 *ngIf=\"data\" class=\"meja-anda\">Meja Anda <b class=\"data-table\">{{data.table}}</b></h5>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messaging_service__ = __webpack_require__("./src/app/messaging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(storageService, msgService) {
        this.storageService = storageService;
        this.msgService = msgService;
        this.number = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.number = Number(localStorage.getItem('number'));
        window.addEventListener("storage", function () {
            _this.number = Number(localStorage.getItem('number'));
        });
        this.msgService.getPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
        this.message.subscribe(function (message) {
            if (message != null) {
                _this.data = message.data;
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__messaging_service__["a" /* MessagingService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/decrease/decrease.component.css":
/***/ (function(module, exports) {

module.exports = "/*Container style is for illustration purpose only */\n.container{\n min-height: 400px;\n}\n/*Can achive using vw css unit*/\n.row-full{\n      width: 100vw;\n      position: relative;\n      margin-left: -50vw;\n      height: 100px;\n      margin-top: 100px;\n      left: 50%;\n}\n.button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n.button2 {background-color: #008CBA;}\n/* Blue */\n.button3 {background-color: #f44336;}\n/* Red */\n.button4 {background-color: #e7e7e7; color: black;}\n/* Gray */\n.button5 {background-color: #555555;}\n/* Black */"

/***/ }),

/***/ "./src/app/decrease/decrease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row row-full\" style=\"height:100px; text-align:center;\">\n\t\t<button class=\"button button3\" (click)=\"count()\">\n\t\t\t<strong>DECREASE</strong>\n\t\t</button>\n\n\t\t<h1>{{number}}</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/decrease/decrease.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecreaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DecreaseComponent = /** @class */ (function () {
    function DecreaseComponent(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.audio = new Audio();
        this.payload = {};
        this.number = 0;
    }
    DecreaseComponent.prototype.ngOnInit = function () {
        this.number = Number(localStorage.getItem('number'));
        // this.count()
        // this.playBeep()
    };
    DecreaseComponent.prototype.setHeader = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/json");
        options.headers = headers;
    };
    DecreaseComponent.prototype.playBeep = function () {
        this.audio.src = "./assets/beep.mp3";
        this.audio.load();
        this.audio.play();
    };
    DecreaseComponent.prototype.playBuup = function () {
        this.audio.src = "./assets/buup.mp3";
        this.audio.load();
        this.audio.play();
    };
    DecreaseComponent.prototype.count = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.setHeader(options);
        this.http.get('http://192.168.1.9:3000/decrease', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.number = res['data'];
            _this.storageService.store('number', _this.number);
            _this.playBeep();
        }, function (err) {
            console.log(err);
            _this.playBuup();
            // err
        });
    };
    DecreaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-decrease',
            template: __webpack_require__("./src/app/decrease/decrease.component.html"),
            styles: [__webpack_require__("./src/app/decrease/decrease.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]])
    ], DecreaseComponent);
    return DecreaseComponent;
}());



/***/ }),

/***/ "./src/app/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagingService = /** @class */ (function () {
    function MessagingService(db, afAuth, http) {
        this.db = db;
        this.afAuth = afAuth;
        this.http = http;
        this.payload = {};
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        if (__WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"].isSupported()) {
            this.messaging = __WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"]();
        }
    }
    MessagingService.prototype.setHeader = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/json; charset=utf-8");
        options.headers = headers;
    };
    MessagingService.prototype.updateToken = function (token) {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (user) {
            if (!user)
                return;
            var data = (_a = {}, _a[user.uid] = token, _a);
            _this.db.object('fcmTokens/').update(data);
            var _a;
        });
    };
    MessagingService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            _this.updateToken(token);
            _this.updateFcm(token);
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.updateFcm = function (token) {
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]();
        this.setHeader(options);
        this.payload['reg_id'] = token;
        this.http.put('https://api.marung.gumcode.net/fcm', this.payload, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.messaging.onMessage(function (payload) {
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/scan/scan.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scan/scan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"availableDevices\">\n  <select (change)=\"onDeviceSelectChange($event.target.value)\">\n    <option value=\"\" [selected]=\"!selectedDevice\">No Device</option>\n    <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"selectedDevice && device.deviceId === selectedDevice.deviceId\">{{ device.label }}</option>\n  </select>\n</div>\n\n<div [hidden]=\"!hasCameras\">\n\n  <zxing-scanner #scanner class=\"test-class\" start=\"true\" [device]=\"selectedDevice\" (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>\n\n  <h2 *ngIf=\"!this.selectedDevice\">No camera selected.</h2>\n\n  <p>\n    Result:\n    <strong>{{ qrResultString }}</strong>\n  </p>\n\n</div>\n\n<div *ngIf=\"!hasCameras && hasPermission === true\">\n\n  <h1>Looks like your actual device does not has cameras, or I could no find'em. </h1>\n\n</div>\n\n<div *ngIf=\"hasPermission === undefined\">\n\n  <h1>Waiting for permissions.</h1>\n\n  <blockquote>\n    <h2>If your device does not has cameras, no permissions will be asked.</h2>\n  </blockquote>\n\n</div>\n\n<div *ngIf=\"hasPermission === false\">\n\n  <h1>You denied the camera permissions, we can't scan anything without it. 😪</h1>\n\n</div>\n\n<p>{{error}}</p>\n\n<p>Angular version: {{ ngVersion }}</p>"

/***/ }),

/***/ "./src/app/scan/scan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zxing_ngx_scanner__ = __webpack_require__("./node_modules/@zxing/ngx-scanner/esm5/zxing-ngx-scanner.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanComponent = /** @class */ (function () {
    function ScanComponent(http) {
        this.http = http;
        this.audio = new Audio();
        this.ngVersion = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* VERSION */].full;
        this.hasCameras = false;
    }
    ScanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.camerasFound.subscribe(function (devices) {
            _this.hasCameras = true;
            console.log('Devices: ', devices);
            _this.availableDevices = devices;
        });
        this.scanner.camerasNotFound.subscribe(function (devices) {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });
        this.scanner.permissionResponse.subscribe(function (answer) {
            _this.hasPermission = answer;
        });
        this.playBeep();
    };
    ScanComponent.prototype.setHeader = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', "application/json; charset=utf-8");
        options.headers = headers;
    };
    ScanComponent.prototype.playBeep = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.audio.src = "./assets/beep.mp3";
            _this.audio.load();
            _this.audio.play();
            resolve();
        });
    };
    ScanComponent.prototype.handleQrCodeResult = function (resultString) {
        var _this = this;
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.setHeader(options);
        this.http.post('https://api.marung.gumcode.net/validate', {
            code: resultString
        }, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            return _this.playBeep().then(function () {
                alert("Validasi berhasil!");
            });
        }, function (err) {
            _this.error = err;
            alert("Data tiket tidak ditemukan!");
        });
    };
    ScanComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scanner'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__zxing_ngx_scanner__["a" /* ZXingScannerComponent */])
    ], ScanComponent.prototype, "scanner", void 0);
    ScanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scan',
            template: __webpack_require__("./src/app/scan/scan.component.html"),
            styles: [__webpack_require__("./src/app/scan/scan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ScanComponent);
    return ScanComponent;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.onSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.changes = this.onSubject.asObservable().share();
        this.start();
    }
    StorageService.prototype.ngOnDestroy = function () {
        this.stop();
    };
    StorageService.prototype.getStorage = function () {
        var s = [];
        for (var i = 0; i < localStorage.length; i++) {
            s.push({
                key: localStorage.key(i),
                value: JSON.parse(localStorage.getItem(localStorage.key(i)))
            });
        }
        return s;
    };
    StorageService.prototype.store = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        // the local application doesn't seem to catch changes to localStorage...
        this.onSubject.next({ key: key, value: data });
    };
    StorageService.prototype.clear = function (key) {
        localStorage.removeItem(key);
        // the local application doesn't seem to catch changes to localStorage...
        this.onSubject.next({ key: key, value: null });
    };
    StorageService.prototype.start = function () {
        window.addEventListener("storage", this.storageEventListener.bind(this));
    };
    StorageService.prototype.storageEventListener = function (event) {
        if (event.storageArea == localStorage) {
            var v = void 0;
            try {
                v = JSON.parse(event.newValue);
            }
            catch (e) {
                v = event.newValue;
            }
            this.onSubject.next({ key: event.key, value: v });
        }
    };
    StorageService.prototype.stop = function () {
        window.removeEventListener("storage", this.storageEventListener.bind(this));
        this.onSubject.complete();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/validation/validation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/validation/validation.component.html":
/***/ (function(module, exports) {

module.exports = "<barcode-scanner-livestream type=\"code_128\" (valueChanges)=\"onValueChanges($event)\"></barcode-scanner-livestream>\n    <div [hidden]=\"!barcodeValue\">\n        {{barcodeValue}}\n</div>"

/***/ }),

/***/ "./src/app/validation/validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_barcode_scanner__ = __webpack_require__("./node_modules/ngx-barcode-scanner/esm5/ngx-barcode-scanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ValidationComponent = /** @class */ (function () {
    function ValidationComponent(http) {
        var _this = this;
        this.http = http;
        this.audio = new Audio();
        this.payload = {};
        this.mySubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        this.mySubject
            .debounceTime(500)
            .subscribe(function (value) {
            _this.barcodeValue = value;
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
            _this.setHeader(options);
            _this.payload['code'] = value;
            _this.http.post('https://api.marung.gumcode.net/validate', _this.payload, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                return _this.playBeep().then(function () {
                    alert("Validasi berhasil!");
                });
            }, function (err) {
                return _this.playBuup().then(function () {
                    alert("Tiket tidak ditemukan atau sudah melakukan validasi!");
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_barcode_scanner__["a" /* BarecodeScannerLivestreamComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_barcode_scanner__["a" /* BarecodeScannerLivestreamComponent */])
    ], ValidationComponent.prototype, "BarecodeScanner", void 0);
    ValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-validation',
            template: __webpack_require__("./src/app/validation/validation.component.html"),
            styles: [__webpack_require__("./src/app/validation/validation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAE0rYIP8owNybYLJ8FhXFTv6JNIoBbkP8",
        authDomain: "ticketing-45d86.firebaseapp.com",
        databaseURL: "https://ticketing-45d86.firebaseio.com",
        projectId: "ticketing-45d86",
        storageBucket: "ticketing-45d86.appspot.com",
        messagingSenderId: "121430978811"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map