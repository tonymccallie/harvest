webpackJsonp([19],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		415,
		18
	],
	"../pages/article-detail/article-detail.module": [
		416,
		17
	],
	"../pages/credits/credits.module": [
		417,
		16
	],
	"../pages/event-detail/event-detail.module": [
		418,
		15
	],
	"../pages/events/events.module": [
		419,
		14
	],
	"../pages/home/home.module": [
		420,
		13
	],
	"../pages/jesus/jesus.module": [
		421,
		12
	],
	"../pages/location/location.module": [
		422,
		11
	],
	"../pages/menu/menu.module": [
		423,
		10
	],
	"../pages/post-detail/post-detail.module": [
		424,
		9
	],
	"../pages/prayer/prayer.module": [
		425,
		8
	],
	"../pages/resources/resources.module": [
		426,
		7
	],
	"../pages/series/series.module": [
		427,
		6
	],
	"../pages/sermon/sermon.module": [
		428,
		5
	],
	"../pages/sermons/sermons.module": [
		429,
		4
	],
	"../pages/staff/staff.module": [
		430,
		3
	],
	"../pages/stories/stories.module": [
		431,
		2
	],
	"../pages/tabs/tabs.module": [
		432,
		1
	],
	"../pages/times/times.module": [
		433,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreybackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GreybackProvider = (function () {
    function GreybackProvider(http) {
        this.http = http;
        this.rootUrl = 'http://firstburleson.server3.greyback.net';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        console.log('Hello GreybackProvider Provider');
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', "Basic " + btoa('patrickkemp:Three3leaf'));
        this.opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    GreybackProvider.prototype.getNews = function () {
        return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:4/category:3').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getCommunity = function () {
        //return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:2').map(result => result.json());
        return this.http.get(this.rootUrl + '/ajax/plugin/community/community_posts/latest/department:2').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getSeries = function () {
        return this.http.get(this.rootUrl + '/ajax/plugin/message/message_series/json/category:1').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getSeriesById = function (seriesId) {
        return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/series:' + seriesId).map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getLatestSermon = function () {
        return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/limit:1/category:1').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getEvents = function () {
        return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:3').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getStaff = function () {
        return this.http.get(this.rootUrl + '/ajax/plugin/staff/staff_departments/json/department:2').map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getCalendars = function () {
        return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/calendars', this.opts).map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getCalendar = function (index) {
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__().format('YYYY/MM/DD');
        var end = __WEBPACK_IMPORTED_MODULE_3_moment__().add(90, 'days').format('YYYY/MM/DD');
        //58c08c0d-776d-4762-8180-0df5fcf1ae74
        return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events?&startdate=' + today + '&stopdate=' + end + '&pageIndex=' + index + '&pageSize=50&calendarids=58c08c0d-776d-4762-8180-0df5fcf1ae74', this.opts).map(function (result) { return result.json(); });
        //return this.http.get('http://localhost:8100/assets/data.json', this.opts).map(result => result.json());
    };
    GreybackProvider.prototype.getEvent = function (eventId) {
        //console.log(eventId);
        return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events/' + eventId, this.opts).map(function (result) { return result.json(); });
    };
    return GreybackProvider;
}());
GreybackProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GreybackProvider);

//# sourceMappingURL=greyback.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2_angular2_moment__["MomentModule"]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudioProvider = (function () {
    function AudioProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.playing = false;
        this.loading = true;
        this.current = 0;
        this.duration = 0;
        this.percentage = 0;
        this.title = '';
        this.speaker = '';
        var self = this;
        this.player = new Audio();
        this.player.ontimeupdate = function (player) {
            self.current = new Date(1970, 0, 1).setSeconds(player.srcElement.currentTime);
            self.duration = new Date(1970, 0, 1).setSeconds(player.srcElement.duration);
            self.percentage = Math.round(player.srcElement.currentTime / player.srcElement.duration * 100);
        };
        this.player.onprogress = function (data) {
            console.log(['onprogress', data]);
        };
        this.player.oncanplay = function (data) {
            console.log(['oncanplay', data]);
            //self.player.play();
        };
        this.player.oncanplaythrough = function (data) {
            self.loading = false;
            console.log(['oncanplaythrough', data]);
        };
        this.player.onstalled = function (data) {
            console.log(['onstalled', data]);
        };
        this.player.onabort = function (data) {
            console.log(['onabort', data]);
        };
        this.player.onerror = function (data) {
            var alert = self.alertCtrl.create({
                title: 'Oh no!',
                subTitle: 'There was an error trying to load the audio file. You might try again later or listen to a different one.',
                buttons: ['Ok']
            });
            alert.present();
            self.playing = false;
            self.loading = true;
            self.title = '';
            console.log(['onerror', data]);
        };
        this.player.onloadstart = function (data) {
            console.log(['onloadstart', data]);
        };
        this.player.onplaying = function (data) {
            console.log(['onplaying', data]);
        };
        this.player.onplay = function (data) {
            console.log(['onplay', data]);
        };
        this.player.onpause = function (data) {
            console.log(['onpause', data]);
        };
    }
    AudioProvider.prototype.play = function (config) {
        this.playing = true;
        this.loading = true;
        this.title = config.title;
        this.speaker = config.speaker;
        this.player.src = config.url + '/file.mp3';
        this.player.load();
        this.player.play();
    };
    AudioProvider.prototype.pause = function () {
        if (this.playing) {
            this.player.pause();
            this.playing = false;
        }
        else {
            this.player.play();
            this.playing = true;
        }
    };
    AudioProvider.prototype.scrub = function (percent) {
        this.player.currentTime = (percent.value / 100) * this.player.duration;
    };
    return AudioProvider;
}());
AudioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], AudioProvider);

//# sourceMappingURL=audio.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_greyback_greyback__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_audio_audio__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_tab_hidden_tab_hidden__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_pro__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__ionic_pro__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var IonicPro = __WEBPACK_IMPORTED_MODULE_14__ionic_pro__["Pro"].init('2191a4b0', {
    appVersion: "1.0.0"
});
var MyErrorHandler = (function () {
    function MyErrorHandler() {
    }
    MyErrorHandler.prototype.handleError = function (err) {
        IonicPro.monitoring.handleNewError(err);
    };
    return MyErrorHandler;
}());

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__directives_tab_hidden_tab_hidden__["a" /* TabHiddenDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                mode: 'ios'
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/article-detail/article-detail.module#ArticleDetailPageModule', name: 'ArticleDetailPage', segment: 'article/:articleId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/credits/credits.module#CreditsPageModule', name: 'CreditsPage', segment: 'credits', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event/:eventId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jesus/jesus.module#JesusPageModule', name: 'JesusPage', segment: 'jesus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post-detail/post-detail.module#PostDetailPageModule', name: 'PostDetailPage', segment: 'post/:postId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/prayer/prayer.module#PrayerPageModule', name: 'PrayerPage', segment: 'prayer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resources/resources.module#ResourcesPageModule', name: 'ResourcesPage', segment: 'resources', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sermon/sermon.module#SermonPageModule', name: 'SermonPage', segment: 'sermon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sermons/sermons.module#SermonsPageModule', name: 'SermonsPage', segment: 'sermons/:seriesId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/staff/staff.module#StaffPageModule', name: 'StaffPage', segment: 'staff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stories/stories.module#StoriesPageModule', name: 'StoriesPage', segment: 'stories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/times/times.module#TimesPageModule', name: 'TimesPage', segment: 'times', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_10__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_13__directives_tab_hidden_tab_hidden__["a" /* TabHiddenDirective */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_greyback_greyback__["a" /* GreybackProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_audio_audio__["a" /* AudioProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_10__shared_module__["a" /* SharedModule */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bm": 167,
	"./bm.js": 167,
	"./bn": 168,
	"./bn.js": 168,
	"./bo": 169,
	"./bo.js": 169,
	"./br": 170,
	"./br.js": 170,
	"./bs": 171,
	"./bs.js": 171,
	"./ca": 172,
	"./ca.js": 172,
	"./cs": 173,
	"./cs.js": 173,
	"./cv": 174,
	"./cv.js": 174,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 176,
	"./da.js": 176,
	"./de": 177,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 177,
	"./dv": 180,
	"./dv.js": 180,
	"./el": 181,
	"./el.js": 181,
	"./en-au": 182,
	"./en-au.js": 182,
	"./en-ca": 183,
	"./en-ca.js": 183,
	"./en-gb": 184,
	"./en-gb.js": 184,
	"./en-ie": 185,
	"./en-ie.js": 185,
	"./en-nz": 186,
	"./en-nz.js": 186,
	"./eo": 187,
	"./eo.js": 187,
	"./es": 188,
	"./es-do": 189,
	"./es-do.js": 189,
	"./es-us": 190,
	"./es-us.js": 190,
	"./es.js": 188,
	"./et": 191,
	"./et.js": 191,
	"./eu": 192,
	"./eu.js": 192,
	"./fa": 193,
	"./fa.js": 193,
	"./fi": 194,
	"./fi.js": 194,
	"./fo": 195,
	"./fo.js": 195,
	"./fr": 196,
	"./fr-ca": 197,
	"./fr-ca.js": 197,
	"./fr-ch": 198,
	"./fr-ch.js": 198,
	"./fr.js": 196,
	"./fy": 199,
	"./fy.js": 199,
	"./gd": 200,
	"./gd.js": 200,
	"./gl": 201,
	"./gl.js": 201,
	"./gom-latn": 202,
	"./gom-latn.js": 202,
	"./gu": 203,
	"./gu.js": 203,
	"./he": 204,
	"./he.js": 204,
	"./hi": 205,
	"./hi.js": 205,
	"./hr": 206,
	"./hr.js": 206,
	"./hu": 207,
	"./hu.js": 207,
	"./hy-am": 208,
	"./hy-am.js": 208,
	"./id": 209,
	"./id.js": 209,
	"./is": 210,
	"./is.js": 210,
	"./it": 211,
	"./it.js": 211,
	"./ja": 212,
	"./ja.js": 212,
	"./jv": 213,
	"./jv.js": 213,
	"./ka": 214,
	"./ka.js": 214,
	"./kk": 215,
	"./kk.js": 215,
	"./km": 216,
	"./km.js": 216,
	"./kn": 217,
	"./kn.js": 217,
	"./ko": 218,
	"./ko.js": 218,
	"./ky": 219,
	"./ky.js": 219,
	"./lb": 220,
	"./lb.js": 220,
	"./lo": 221,
	"./lo.js": 221,
	"./lt": 222,
	"./lt.js": 222,
	"./lv": 223,
	"./lv.js": 223,
	"./me": 224,
	"./me.js": 224,
	"./mi": 225,
	"./mi.js": 225,
	"./mk": 226,
	"./mk.js": 226,
	"./ml": 227,
	"./ml.js": 227,
	"./mr": 228,
	"./mr.js": 228,
	"./ms": 229,
	"./ms-my": 230,
	"./ms-my.js": 230,
	"./ms.js": 229,
	"./my": 231,
	"./my.js": 231,
	"./nb": 232,
	"./nb.js": 232,
	"./ne": 233,
	"./ne.js": 233,
	"./nl": 234,
	"./nl-be": 235,
	"./nl-be.js": 235,
	"./nl.js": 234,
	"./nn": 236,
	"./nn.js": 236,
	"./pa-in": 237,
	"./pa-in.js": 237,
	"./pl": 238,
	"./pl.js": 238,
	"./pt": 239,
	"./pt-br": 240,
	"./pt-br.js": 240,
	"./pt.js": 239,
	"./ro": 241,
	"./ro.js": 241,
	"./ru": 242,
	"./ru.js": 242,
	"./sd": 243,
	"./sd.js": 243,
	"./se": 244,
	"./se.js": 244,
	"./si": 245,
	"./si.js": 245,
	"./sk": 246,
	"./sk.js": 246,
	"./sl": 247,
	"./sl.js": 247,
	"./sq": 248,
	"./sq.js": 248,
	"./sr": 249,
	"./sr-cyrl": 250,
	"./sr-cyrl.js": 250,
	"./sr.js": 249,
	"./ss": 251,
	"./ss.js": 251,
	"./sv": 252,
	"./sv.js": 252,
	"./sw": 253,
	"./sw.js": 253,
	"./ta": 254,
	"./ta.js": 254,
	"./te": 255,
	"./te.js": 255,
	"./tet": 256,
	"./tet.js": 256,
	"./th": 257,
	"./th.js": 257,
	"./tl-ph": 258,
	"./tl-ph.js": 258,
	"./tlh": 259,
	"./tlh.js": 259,
	"./tr": 260,
	"./tr.js": 260,
	"./tzl": 261,
	"./tzl.js": 261,
	"./tzm": 262,
	"./tzm-latn": 263,
	"./tzm-latn.js": 263,
	"./tzm.js": 262,
	"./uk": 264,
	"./uk.js": 264,
	"./ur": 265,
	"./ur.js": 265,
	"./uz": 266,
	"./uz-latn": 267,
	"./uz-latn.js": 267,
	"./uz.js": 266,
	"./vi": 268,
	"./vi.js": 268,
	"./x-pseudo": 269,
	"./x-pseudo.js": 269,
	"./yo": 270,
	"./yo.js": 270,
	"./zh-cn": 271,
	"./zh-cn.js": 271,
	"./zh-hk": 272,
	"./zh-hk.js": 272,
	"./zh-tw": 273,
	"./zh-tw.js": 273
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 383;

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //set starting page here
        this.rootPage = 'MenuPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcwichitafalls/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcwichitafalls/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;



var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthServiceProvider = (function () {
    function AuthServiceProvider() {
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHiddenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabHiddenDirective = (function () {
    function TabHiddenDirective(_el) {
        this._el = _el;
        this._tabElCache = new Map();
    }
    TabHiddenDirective.prototype.ngAfterViewChecked = function () {
        var tabId = this._el.nativeElement.id.split('-');
        tabId.shift();
        tabId.unshift('tab');
        tabId = tabId.join('-');
        var tabEl;
        if (!this._tabElCache.has(tabId)) {
            tabEl = document.querySelector('#' + tabId);
            this._tabElCache.set(tabId, tabEl);
        }
        else {
            tabEl = this._tabElCache.get(tabId);
        }
        if (tabEl) {
            if (this.tabHidden) {
                tabEl.style.display = 'none';
            }
            else {
                tabEl.style.display = 'flex';
            }
        }
    };
    return TabHiddenDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tab-hidden'),
    __metadata("design:type", Boolean)
], TabHiddenDirective.prototype, "tabHidden", void 0);
TabHiddenDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[tab-hidden]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], TabHiddenDirective);

//# sourceMappingURL=tab-hidden.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map