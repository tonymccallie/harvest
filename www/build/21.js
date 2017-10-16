webpackJsonp([21],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesPageModule", function() { return TimesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimesPageModule = (function () {
    function TimesPageModule() {
    }
    return TimesPageModule;
}());
TimesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__times__["a" /* TimesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* TimesPage */]),
        ],
    })
], TimesPageModule);

//# sourceMappingURL=times.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
 * Generated class for the TimesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TimesPage = (function () {
    function TimesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimesPage');
    };
    return TimesPage;
}());
TimesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-times',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/pages/times/times.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Service Times</ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n		<p><img alt="" src="assets/img/traditional.jpg" ><br></p>\n		<h1>TRADITIONAL 9:30 IN WORSHIP CENTER</h1>\n		<p>The Traditional Worship Service is filled with familiar hymns featuring our choir and orchestra. This celebration service is located in the Worship Center on the south end of campus.</p>\n		<p><img alt="" src="assets/img/modern.jpg" ><br></p>\n		<h1>MODERN 9:30 &amp; 11:00 IN THREE1SEVEN</h1>\n		<p>The modern service is a casual exciting hour of high energy worship in three1seven on the north end of our campus. The energizing and uplifting music is led by our incredible band.</p>\n		<p><img alt="" src="assets/img/spanish.jpg" ><br></p>\n		<h1>SPANISH 11:00 IN WORSHIP CENTER</h1>\n		<p>Ofrecemos un servicio de culto español ocasional los domingos por la mañana en el centro de adoración a las 11:00 am. Este servicio tiene increíble música de culto.<br></p><br>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/pages/times/times.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TimesPage);

//# sourceMappingURL=times.js.map

/***/ })

});
//# sourceMappingURL=21.js.map