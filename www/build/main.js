webpackJsonp([19],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		404,
		18
	],
	"../pages/article-detail/article-detail.module": [
		405,
		17
	],
	"../pages/credits/credits.module": [
		406,
		16
	],
	"../pages/event-detail/event-detail.module": [
		407,
		15
	],
	"../pages/events/events.module": [
		408,
		14
	],
	"../pages/home/home.module": [
		409,
		13
	],
	"../pages/jesus/jesus.module": [
		410,
		12
	],
	"../pages/location/location.module": [
		411,
		11
	],
	"../pages/menu/menu.module": [
		412,
		10
	],
	"../pages/post-detail/post-detail.module": [
		413,
		9
	],
	"../pages/prayer/prayer.module": [
		414,
		8
	],
	"../pages/resources/resources.module": [
		415,
		7
	],
	"../pages/series/series.module": [
		416,
		6
	],
	"../pages/sermon/sermon.module": [
		417,
		5
	],
	"../pages/sermons/sermons.module": [
		418,
		4
	],
	"../pages/staff/staff.module": [
		419,
		3
	],
	"../pages/stories/stories.module": [
		420,
		2
	],
	"../pages/tabs/tabs.module": [
		421,
		1
	],
	"../pages/times/times.module": [
		422,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreybackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.rootUrl = 'http://firstburleson.server3.greyback.net/';
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
    GreybackProvider.prototype.getCalendar = function () {
        //58c08c0d-776d-4762-8180-0df5fcf1ae74
        return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events?&startdate=10/01/2017&pageIndex=0&pageSize=30&calendarids=58c08c0d-776d-4762-8180-0df5fcf1ae74', this.opts).map(function (result) { return result.json(); });
    };
    GreybackProvider.prototype.getEvent = function (eventId) {
        //console.log(eventId);
        return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events/' + eventId, this.opts).map(function (result) { return result.json(); });
    };
    return GreybackProvider;
}());
GreybackProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GreybackProvider);

var _a;
//# sourceMappingURL=greyback.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(271);
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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_greyback_greyback__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_audio_audio__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_tab_hidden_tab_hidden__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 153,
	"./af.js": 153,
	"./ar": 154,
	"./ar-dz": 155,
	"./ar-dz.js": 155,
	"./ar-kw": 156,
	"./ar-kw.js": 156,
	"./ar-ly": 157,
	"./ar-ly.js": 157,
	"./ar-ma": 158,
	"./ar-ma.js": 158,
	"./ar-sa": 159,
	"./ar-sa.js": 159,
	"./ar-tn": 160,
	"./ar-tn.js": 160,
	"./ar.js": 154,
	"./az": 161,
	"./az.js": 161,
	"./be": 162,
	"./be.js": 162,
	"./bg": 163,
	"./bg.js": 163,
	"./bm": 164,
	"./bm.js": 164,
	"./bn": 165,
	"./bn.js": 165,
	"./bo": 166,
	"./bo.js": 166,
	"./br": 167,
	"./br.js": 167,
	"./bs": 168,
	"./bs.js": 168,
	"./ca": 169,
	"./ca.js": 169,
	"./cs": 170,
	"./cs.js": 170,
	"./cv": 171,
	"./cv.js": 171,
	"./cy": 172,
	"./cy.js": 172,
	"./da": 173,
	"./da.js": 173,
	"./de": 174,
	"./de-at": 175,
	"./de-at.js": 175,
	"./de-ch": 176,
	"./de-ch.js": 176,
	"./de.js": 174,
	"./dv": 177,
	"./dv.js": 177,
	"./el": 178,
	"./el.js": 178,
	"./en-au": 179,
	"./en-au.js": 179,
	"./en-ca": 180,
	"./en-ca.js": 180,
	"./en-gb": 181,
	"./en-gb.js": 181,
	"./en-ie": 182,
	"./en-ie.js": 182,
	"./en-nz": 183,
	"./en-nz.js": 183,
	"./eo": 184,
	"./eo.js": 184,
	"./es": 185,
	"./es-do": 186,
	"./es-do.js": 186,
	"./es-us": 187,
	"./es-us.js": 187,
	"./es.js": 185,
	"./et": 188,
	"./et.js": 188,
	"./eu": 189,
	"./eu.js": 189,
	"./fa": 190,
	"./fa.js": 190,
	"./fi": 191,
	"./fi.js": 191,
	"./fo": 192,
	"./fo.js": 192,
	"./fr": 193,
	"./fr-ca": 194,
	"./fr-ca.js": 194,
	"./fr-ch": 195,
	"./fr-ch.js": 195,
	"./fr.js": 193,
	"./fy": 196,
	"./fy.js": 196,
	"./gd": 197,
	"./gd.js": 197,
	"./gl": 198,
	"./gl.js": 198,
	"./gom-latn": 199,
	"./gom-latn.js": 199,
	"./gu": 200,
	"./gu.js": 200,
	"./he": 201,
	"./he.js": 201,
	"./hi": 202,
	"./hi.js": 202,
	"./hr": 203,
	"./hr.js": 203,
	"./hu": 204,
	"./hu.js": 204,
	"./hy-am": 205,
	"./hy-am.js": 205,
	"./id": 206,
	"./id.js": 206,
	"./is": 207,
	"./is.js": 207,
	"./it": 208,
	"./it.js": 208,
	"./ja": 209,
	"./ja.js": 209,
	"./jv": 210,
	"./jv.js": 210,
	"./ka": 211,
	"./ka.js": 211,
	"./kk": 212,
	"./kk.js": 212,
	"./km": 213,
	"./km.js": 213,
	"./kn": 214,
	"./kn.js": 214,
	"./ko": 215,
	"./ko.js": 215,
	"./ky": 216,
	"./ky.js": 216,
	"./lb": 217,
	"./lb.js": 217,
	"./lo": 218,
	"./lo.js": 218,
	"./lt": 219,
	"./lt.js": 219,
	"./lv": 220,
	"./lv.js": 220,
	"./me": 221,
	"./me.js": 221,
	"./mi": 222,
	"./mi.js": 222,
	"./mk": 223,
	"./mk.js": 223,
	"./ml": 224,
	"./ml.js": 224,
	"./mr": 225,
	"./mr.js": 225,
	"./ms": 226,
	"./ms-my": 227,
	"./ms-my.js": 227,
	"./ms.js": 226,
	"./my": 228,
	"./my.js": 228,
	"./nb": 229,
	"./nb.js": 229,
	"./ne": 230,
	"./ne.js": 230,
	"./nl": 231,
	"./nl-be": 232,
	"./nl-be.js": 232,
	"./nl.js": 231,
	"./nn": 233,
	"./nn.js": 233,
	"./pa-in": 234,
	"./pa-in.js": 234,
	"./pl": 235,
	"./pl.js": 235,
	"./pt": 236,
	"./pt-br": 237,
	"./pt-br.js": 237,
	"./pt.js": 236,
	"./ro": 238,
	"./ro.js": 238,
	"./ru": 239,
	"./ru.js": 239,
	"./sd": 240,
	"./sd.js": 240,
	"./se": 241,
	"./se.js": 241,
	"./si": 242,
	"./si.js": 242,
	"./sk": 243,
	"./sk.js": 243,
	"./sl": 244,
	"./sl.js": 244,
	"./sq": 245,
	"./sq.js": 245,
	"./sr": 246,
	"./sr-cyrl": 247,
	"./sr-cyrl.js": 247,
	"./sr.js": 246,
	"./ss": 248,
	"./ss.js": 248,
	"./sv": 249,
	"./sv.js": 249,
	"./sw": 250,
	"./sw.js": 250,
	"./ta": 251,
	"./ta.js": 251,
	"./te": 252,
	"./te.js": 252,
	"./tet": 253,
	"./tet.js": 253,
	"./th": 254,
	"./th.js": 254,
	"./tl-ph": 255,
	"./tl-ph.js": 255,
	"./tlh": 256,
	"./tlh.js": 256,
	"./tr": 257,
	"./tr.js": 257,
	"./tzl": 258,
	"./tzl.js": 258,
	"./tzm": 259,
	"./tzm-latn": 260,
	"./tzm-latn.js": 260,
	"./tzm.js": 259,
	"./uk": 261,
	"./uk.js": 261,
	"./ur": 262,
	"./ur.js": 262,
	"./uz": 263,
	"./uz-latn": 264,
	"./uz-latn.js": 264,
	"./uz.js": 263,
	"./vi": 265,
	"./vi.js": 265,
	"./x-pseudo": 266,
	"./x-pseudo.js": 266,
	"./yo": 267,
	"./yo.js": 267,
	"./zh-cn": 268,
	"./zh-cn.js": 268,
	"./zh-hk": 269,
	"./zh-hk.js": 269,
	"./zh-tw": 270,
	"./zh-tw.js": 270
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
webpackContext.id = 373;

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
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

/***/ 403:
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

},[330]);
//# sourceMappingURL=main.js.map