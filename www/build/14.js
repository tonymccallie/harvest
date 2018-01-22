webpackJsonp([14],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivingPageModule", function() { return GivingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__giving__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GivingPageModule = (function () {
    function GivingPageModule() {
    }
    return GivingPageModule;
}());
GivingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__giving__["a" /* GivingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__giving__["a" /* GivingPage */]),
        ],
    })
], GivingPageModule);

//# sourceMappingURL=giving.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GivingPage; });
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


/**
 * Generated class for the GivingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GivingPage = (function () {
    function GivingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GivingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GivingPage');
    };
    return GivingPage;
}());
GivingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-giving',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/giving/giving.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Giving</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="assets/img/crowd.jpg" />\n	<div padding>\n		<h3>Giving</h3>\n		<p>At First Baptist, we believe that giving of our first fruits is an act of worship and a way that we can honor God with\n			what He has given us. God has greatly increased the effectiveness of church through your gifts. You have an opportunity,\n			as at no other time in history, to transform our world through God’s Word, one life at a time.</p>\n		<p>Your tithes and gifts are vital to the everyday ministry that takes place in and through First Baptist. We ask that you\n			would prayerfully consider how God is leading you to give.</p>\n\n		<a ion-button outline round small color="light" href="https://public.serviceu.com/PaymentForm/1573/?OrgKey=9ccb6bd6-c8f2-4e89-8b1e-b8cfbc85c19d">Give Now</a>\n		<br>\n		<br>\n\n		<h3>It\'s secure</h3>\n		<p>Online giving is actually more secure than checks or cash. With this system, you won’t have three or four different people\n			processing your paper checks or cash. Your gift is electronically transferred directly to our bank and the information\n			about your transfer is sent to our office for our internal records.\n			<br>\n		</p>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcwichitafalls/src/pages/giving/giving.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], GivingPage);

//# sourceMappingURL=giving.js.map

/***/ })

});
//# sourceMappingURL=14.js.map