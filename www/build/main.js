webpackJsonp([19],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		419,
		18
	],
	"../pages/article-detail/article-detail.module": [
		420,
		17
	],
	"../pages/credits/credits.module": [
		421,
		16
	],
	"../pages/event-detail/event-detail.module": [
		422,
		15
	],
	"../pages/events/events.module": [
		423,
		14
	],
	"../pages/home/home.module": [
		424,
		13
	],
	"../pages/jesus/jesus.module": [
		425,
		12
	],
	"../pages/location/location.module": [
		426,
		11
	],
	"../pages/menu/menu.module": [
		427,
		10
	],
	"../pages/post-detail/post-detail.module": [
		428,
		9
	],
	"../pages/prayer/prayer.module": [
		429,
		8
	],
	"../pages/resources/resources.module": [
		430,
		7
	],
	"../pages/series/series.module": [
		431,
		6
	],
	"../pages/sermon/sermon.module": [
		433,
		5
	],
	"../pages/sermons/sermons.module": [
		432,
		4
	],
	"../pages/staff/staff.module": [
		434,
		3
	],
	"../pages/stories/stories.module": [
		435,
		2
	],
	"../pages/tabs/tabs.module": [
		436,
		1
	],
	"../pages/times/times.module": [
		437,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreybackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
    function GreybackProvider(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
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
        var _this = this;
        //&departmentIds=
        return new Promise(function (resolve) {
            _this.http.get('http://api.serviceu.com/rest/events/occurrences/search?orgKey=9ccb6bd6-c8f2-4e89-8b1e-b8cfbc85c19d&format=json').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.http.get('assets/search.json').subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    console.warn(['getCalendar', err]);
                });
            });
        });
    };
    /*
    {
    CategoryList: "Department Event",
    ContactEmail: "abills@fbcwf.org",
    ContactName: "Angela Bills",
    ContactPhone: "",
    DateModified: "01/15/2018 03:36:31 PM",
    DepartmentList: "Adult Ministry",
    DepartmentName: "Adult Ministry",
    Description: "Off Campus",
    DisplayTimes: false,
    EventId: 9872952,
    ExternalEventUrl: "",
    ExternalImageUrl: "",
    LocationAddress: "2907 Garnett Ave WF 76308",
    LocationAddress2: "",
    LocationCity: "",
    LocationName: "Jason' Deli",
    LocationState: "",
    LocationZip: "",
    MaxDate: "01/01/1900 12:00:00 AM",
    MinDate: "01/01/1900 12:00:00 AM",
    Name: "Perkins LIFE Group Fellowship - January",
    OccurrenceEndTime: "01/15/2018 08:00:00 PM",
    OccurrenceId: 401278366,
    OccurrenceStartTime: "01/15/2018 06:00:00 PM",
    PublicEventUrl: "http://public.serviceu.com/calendar/EventDetails.asp?OrgKey=9ccb6bd6-c8f2-4e89-8b1e-b8cfbc85c19d&EventID=9872952&OccID=401278366",
    RegistrationEnabled: 0,
    RegistrationUrl: "",
    ResourceEndTime: "01/15/2018 08:00:00 PM",
    ResourceList: "",
    ResourceStartTime: "01/15/2018 06:00:00 PM",
    StatusDescription: "Approved",
    SubmittedBy: "Angela Bills"
    }
    */
    GreybackProvider.prototype.getCalendarX = function (index) {
        var today = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY/MM/DD');
        var end = __WEBPACK_IMPORTED_MODULE_4_moment__().add(90, 'days').format('YYYY/MM/DD');
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], GreybackProvider);

var _a, _b;
//# sourceMappingURL=greyback.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(277);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_greyback_greyback__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_audio_audio__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_pro__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ionic_pro__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var IonicPro = __WEBPACK_IMPORTED_MODULE_13__ionic_pro__["Pro"].init('2191a4b0', {
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
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
                    { loadChildren: '../pages/sermons/sermons.module#SermonsPageModule', name: 'SermonsPage', segment: 'sermons/:seriesId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sermon/sermon.module#SermonPageModule', name: 'SermonPage', segment: 'sermon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/staff/staff.module#StaffPageModule', name: 'StaffPage', segment: 'staff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stories/stories.module#StoriesPageModule', name: 'StoriesPage', segment: 'stories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/times/times.module#TimesPageModule', name: 'TimesPage', segment: 'times', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_9__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_greyback_greyback__["a" /* GreybackProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_audio_audio__["a" /* AudioProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__shared_module__["a" /* SharedModule */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 160,
	"./ar-dz": 161,
	"./ar-dz.js": 161,
	"./ar-kw": 162,
	"./ar-kw.js": 162,
	"./ar-ly": 163,
	"./ar-ly.js": 163,
	"./ar-ma": 164,
	"./ar-ma.js": 164,
	"./ar-sa": 165,
	"./ar-sa.js": 165,
	"./ar-tn": 166,
	"./ar-tn.js": 166,
	"./ar.js": 160,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bm": 170,
	"./bm.js": 170,
	"./bn": 171,
	"./bn.js": 171,
	"./bo": 172,
	"./bo.js": 172,
	"./br": 173,
	"./br.js": 173,
	"./bs": 174,
	"./bs.js": 174,
	"./ca": 175,
	"./ca.js": 175,
	"./cs": 176,
	"./cs.js": 176,
	"./cv": 177,
	"./cv.js": 177,
	"./cy": 178,
	"./cy.js": 178,
	"./da": 179,
	"./da.js": 179,
	"./de": 180,
	"./de-at": 181,
	"./de-at.js": 181,
	"./de-ch": 182,
	"./de-ch.js": 182,
	"./de.js": 180,
	"./dv": 183,
	"./dv.js": 183,
	"./el": 184,
	"./el.js": 184,
	"./en-au": 185,
	"./en-au.js": 185,
	"./en-ca": 186,
	"./en-ca.js": 186,
	"./en-gb": 187,
	"./en-gb.js": 187,
	"./en-ie": 188,
	"./en-ie.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es-us": 193,
	"./es-us.js": 193,
	"./es.js": 191,
	"./et": 194,
	"./et.js": 194,
	"./eu": 195,
	"./eu.js": 195,
	"./fa": 196,
	"./fa.js": 196,
	"./fi": 197,
	"./fi.js": 197,
	"./fo": 198,
	"./fo.js": 198,
	"./fr": 199,
	"./fr-ca": 200,
	"./fr-ca.js": 200,
	"./fr-ch": 201,
	"./fr-ch.js": 201,
	"./fr.js": 199,
	"./fy": 202,
	"./fy.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it.js": 214,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ky": 222,
	"./ky.js": 222,
	"./lb": 223,
	"./lb.js": 223,
	"./lo": 224,
	"./lo.js": 224,
	"./lt": 225,
	"./lt.js": 225,
	"./lv": 226,
	"./lv.js": 226,
	"./me": 227,
	"./me.js": 227,
	"./mi": 228,
	"./mi.js": 228,
	"./mk": 229,
	"./mk.js": 229,
	"./ml": 230,
	"./ml.js": 230,
	"./mr": 231,
	"./mr.js": 231,
	"./ms": 232,
	"./ms-my": 233,
	"./ms-my.js": 233,
	"./ms.js": 232,
	"./my": 234,
	"./my.js": 234,
	"./nb": 235,
	"./nb.js": 235,
	"./ne": 236,
	"./ne.js": 236,
	"./nl": 237,
	"./nl-be": 238,
	"./nl-be.js": 238,
	"./nl.js": 237,
	"./nn": 239,
	"./nn.js": 239,
	"./pa-in": 240,
	"./pa-in.js": 240,
	"./pl": 241,
	"./pl.js": 241,
	"./pt": 242,
	"./pt-br": 243,
	"./pt-br.js": 243,
	"./pt.js": 242,
	"./ro": 244,
	"./ro.js": 244,
	"./ru": 245,
	"./ru.js": 245,
	"./sd": 246,
	"./sd.js": 246,
	"./se": 247,
	"./se.js": 247,
	"./si": 248,
	"./si.js": 248,
	"./sk": 249,
	"./sk.js": 249,
	"./sl": 250,
	"./sl.js": 250,
	"./sq": 251,
	"./sq.js": 251,
	"./sr": 252,
	"./sr-cyrl": 253,
	"./sr-cyrl.js": 253,
	"./sr.js": 252,
	"./ss": 254,
	"./ss.js": 254,
	"./sv": 255,
	"./sv.js": 255,
	"./sw": 256,
	"./sw.js": 256,
	"./ta": 257,
	"./ta.js": 257,
	"./te": 258,
	"./te.js": 258,
	"./tet": 259,
	"./tet.js": 259,
	"./th": 260,
	"./th.js": 260,
	"./tl-ph": 261,
	"./tl-ph.js": 261,
	"./tlh": 262,
	"./tlh.js": 262,
	"./tr": 263,
	"./tr.js": 263,
	"./tzl": 264,
	"./tzl.js": 264,
	"./tzm": 265,
	"./tzm-latn": 266,
	"./tzm-latn.js": 266,
	"./tzm.js": 265,
	"./uk": 267,
	"./uk.js": 267,
	"./ur": 268,
	"./ur.js": 268,
	"./uz": 269,
	"./uz-latn": 270,
	"./uz-latn.js": 270,
	"./uz.js": 269,
	"./vi": 271,
	"./vi.js": 271,
	"./x-pseudo": 272,
	"./x-pseudo.js": 272,
	"./yo": 273,
	"./yo.js": 273,
	"./zh-cn": 274,
	"./zh-cn.js": 274,
	"./zh-hk": 275,
	"./zh-hk.js": 275,
	"./zh-tw": 276,
	"./zh-tw.js": 276
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
webpackContext.id = 389;

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
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

/***/ })

},[336]);
//# sourceMappingURL=main.js.map