webpackJsonp([22],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, greybackProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.rootUrl = greybackProvider.rootUrl;
        console.log('contructor HomePage');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //fired if not cached
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //fired every time
        console.log('ionViewWillEnter HomePage');
        this.greybackProvider.getNews().subscribe(function (news) {
            _this.news = news.data;
        });
        this.greybackProvider.getCommunity().subscribe(function (posts) {
            _this.posts = posts.data;
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //fired every time
        console.log('ionViewDidEnter HomePage');
    };
    HomePage.prototype.viewArticle = function (article) {
        this.navCtrl.push('ArticleDetailPage', {
            article: article,
            articleId: article.NewsArticle.id
        });
    };
    HomePage.prototype.viewPost = function (post) {
        this.navCtrl.push('PostDetailPage', {
            post: post,
            postId: post.CommunityPost.id
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('doRefresh');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        // setTimeout(() => {
        // 	for (let i = 0; i < 30; i++) {
        // 		this.news.push({title:'test',body:'test'});
        // 	}
        // 	console.log('Async operation has ended');
        // 	infiniteScroll.complete();
        // }, 500);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/pages/home/home.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title start><img src="assets/logo.svg" class="logo"></ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n	<ion-slides autoplay="5000" loop="true" *ngIf="news && news.length">\n		<ion-slide *ngFor="let article of news" (click)="viewArticle(article)">\n			<img src="{{rootUrl}}/img/thumb/{{article.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" />\n		</ion-slide>\n	</ion-slides>\n	<ion-toolbar color="primary">\n		Community Feed\n	</ion-toolbar>\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher>\n	<div class="ion-card" *ngFor="let post of posts" (click)="viewPost(post)">\n		<!-- <img src="https://unsplash.it/500/300?random&{{i}}"> -->\n		<img src="{{rootUrl}}/img/thumb/{{post.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" />\n		<div class="card-title">\n			{{post.CommunityPost.title}}\n		</div>\n	</div>\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=22.js.map