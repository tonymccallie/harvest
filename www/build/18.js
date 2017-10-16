webpackJsonp([18],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/pages/about/about.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>About</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Our mission is to develop fully devoted Christ-Followers and share the message of Jesus Christ with everyone.</p>\n	<img src="assets/img/worship.jpg" />\n	<h3>WORSHIP</h3>\n	<p>We love God and we love helping people experience the joy of living for God. Join us in discovering how much He loves us\n		and in learning how to go through life with our eyes fixed on Him.</p>\n	<img src="assets/img/community.jpg" />\n	<h3>COMMUNITY</h3>\n	<p>Following Jesus is an individual decision, but the journey is best made in good company. We believe that joining a group\n		is one of the best ways to grow closer to Jesus.</p>\n	<img src="assets/img/serving.jpg" />\n	<h3>SERVING</h3>\n	<p>Jesus said that after loving God with everything we have, the most important thing we can do is love our neighbors. As we\n		become more like Him, we are inspired to use our lives to serve others.</p>\n\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=18.js.map