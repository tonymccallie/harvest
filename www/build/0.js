webpackJsonp([0],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocationPageModule = (function () {
    function LocationPageModule() {
    }
    return LocationPageModule;
}());
LocationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
        ]
    })
], LocationPageModule);

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(51);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    LaunchNavigator.prototype.navigate = function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    LaunchNavigator.prototype.isAppAvailable = function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    LaunchNavigator.prototype.availableApps = function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    LaunchNavigator.prototype.getAppDisplayName = function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.prototype.getAppsForPlatform = function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsTransportMode = function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.prototype.getTransportModes = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsDestName = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsStart = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsStartName = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsLaunchMode = function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    LaunchNavigator.prototype.userSelect = function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    LaunchNavigator.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//LaunchNavigatorOptions
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.map = function (location) {
        this.launchNavigator.navigate(location);
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/location/location.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Location</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="assets/img/locations.jpg">\n	<div padding>\n		<h1>Locations</h1>\n		<p>We have 3 campuses accross Wichita Falls. Check out the differnt service times we have and make plans to join us this weekd.\n			See you Sunday.</p>\n\n		<h3>Downtown Campus:</h3>\n		<br>\n		<p>1200 9th St.\n			<br> Wichita Falls, TX 76301</p>\n		<p>\n			<strong>Phone:</strong>&nbsp;940.723.2764\n			<br>\n			<strong>Fax:&nbsp;</strong>940.766.1373</p>\n		<b>Modern Worship</b>\n		<p>8:15am - East Sanctuary\n			<br> 11:00am – Worship Center</p>\n		<b>Blended Worship</b>\n		<p>9:30am - Worship Center</p>\n\n		<button ion-button outline round small color="light" (click)="map(\'1200 9th St., Wichita Falls, TX 76301\')">Get Directions</button>\n		<br>\n		<br>\n\n\n		<h3>West Campus:</h3>\n		<br>\n		<p>4317 Barnett Road\n			<br> Wichita Falls, TX 76310</p>\n		<p>\n			<strong>Phone:</strong>&nbsp;940.723.2764\n			<br>\n			<strong>Fax:&nbsp;</strong>940.766.1373</p>\n		<b>Modern Worship</b>\n		<p>9:30am - West Auditorium\n			<br> 11:00am – West Auditorium</p>\n\n		<button ion-button outline round small color="light" (click)="map(\'4317 Barnett Road, Wichita Falls, TX 76310\')">Get Directions</button>\n		<br>\n		<br>\n\n\n		<h3>Sheppard Campus:</h3>\n		<br>\n		<p>2101 Puckett Rd\n			<br> Wichita Falls, TX 76306</p>\n		<p>\n			<strong>Phone:</strong>940.723.2764\n			<br>\n			<strong>Fax:&nbsp;</strong>940.766.1373</p>\n		<b>Modern Worship</b>\n		<p>9:30am - Sheppard Auditorium\n			<br> 11:00am – Sheppard Auditorium</p>\n		<button ion-button outline round small color="light" (click)="map(\'2101 Puckett Rd, Wichita Falls, TX 76306\')">Get Directions</button>\n		<br>\n		<br>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=0.js.map