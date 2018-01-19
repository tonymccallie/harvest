webpackJsonp([1],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesPageModule", function() { return TimesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(460);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* TimesPage */]),
        ],
    })
], TimesPageModule);

//# sourceMappingURL=times.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-times',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/times/times.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Service Times</ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="assets/img/service_times_banner.jpg" />\n	<div padding>\n		<h1>Service Times</h1>\n		<p>Our weekend worship services are a time for us to gather as followers of Christ to remember and remind each other of God\'s goodness to us. We offer multiple worship services and styles across our three campuses. You will be encouraged and challenged through a time of biblical teaching, meaningful worship, and authentic fellowship. We can\'t wait to meet you this weekend.</p>\n\n		<h3>Downtown Campus</h3>\n		<p>Our downtown campus offer 2 different styles of worship experiences for everyone in your family.</p>\n\n		<img src="assets/img/downtown_modern.jpg" width="25%" /><br />\n		<b>Modern Worship</b>\n		<p>8:15am - East Sanctuary<br>\n		11:00am – Worship Center</p>\n\n		<img src="assets/img/downtown_blended.jpg" width="25%" /><br />\n		<b>Blended Worship</b>\n		<p>9:30am - Worship Center</p>\n\n		<button ion-button outline round color="light">Get Directions</button>\n		<p><br /></p>\n		<img src="assets/img/west.jpg" width="25%" /><br />\n		<h3>West Campus</h3>\n		<p>Our west campus offers live worship, fellowship, and teaching feed from our downtown campus.</p>\n\n		<b>Modern Worship</b>\n		<p>9:30am - West Auditorium<br>\n		11:00am – West Auditorium</p>\n\n		<button ion-button outline round color="light">Get Directions</button>\n		<p><br /></p>\n\n\n		<img src="assets/img/sheppard.jpg" width="25%" /><br />\n		<h3>Sheppard</h3>\n		<p>Our west campus offers live worship, fellowship, and teaching feed from our downtown campus.</p>\n\n		<b>Modern Worship</b>\n		<p>9:30am - Sheppard Auditorium<br>\n		11:00am – Sheppard Auditorium</p>\n\n		<button ion-button outline round color="light">Get Directions</button>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/times/times.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TimesPage);

//# sourceMappingURL=times.js.map

/***/ })

});
//# sourceMappingURL=1.js.map