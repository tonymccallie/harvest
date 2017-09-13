webpackJsonp([3],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonPageModule", function() { return SermonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sermon__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SermonPageModule = (function () {
    function SermonPageModule() {
    }
    return SermonPageModule;
}());
SermonPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sermon__["a" /* SermonPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sermon__["a" /* SermonPage */]),
        ],
    })
], SermonPageModule);

//# sourceMappingURL=sermon.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SermonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_audio_audio__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SermonPage = (function () {
    function SermonPage(navCtrl, navParams, greybackProvider, audioProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.audioProvider = audioProvider;
        this.menuCtrl = menuCtrl;
        this.sermon = this.navParams.get('sermon');
        this.series = this.navParams.get('series');
        this.rootUrl = greybackProvider.rootUrl;
        this.player = audioProvider;
    }
    SermonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SermonPage');
    };
    SermonPage.prototype.playAudio = function (sermon) {
        this.audioProvider.play({
            url: this.rootUrl + '/play/mp3/' + sermon.MediaAudio.id,
            title: sermon.MessageMessage.title,
            speaker: sermon.MessageAuthor.name
        });
        this.menuCtrl.open();
    };
    return SermonPage;
}());
SermonPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sermon',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/pages/sermon/sermon.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Sermon</ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="{{rootUrl}}/img/thumb/{{series.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto">\n	<ion-toolbar color="primary">\n		{{sermon.title}}\n	</ion-toolbar>\n	<ion-list>\n		<button ion-item (click)="playAudio(sermon)">\n			Play MP3\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/pages/sermon/sermon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_audio_audio__["a" /* AudioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], SermonPage);

//# sourceMappingURL=sermon.js.map

/***/ })

});
//# sourceMappingURL=3.js.map