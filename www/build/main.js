webpackJsonp([19],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		267,
		18
	],
	"../pages/article-detail/article-detail.module": [
		268,
		17
	],
	"../pages/credits/credits.module": [
		269,
		16
	],
	"../pages/event-detail/event-detail.module": [
		270,
		15
	],
	"../pages/events/events.module": [
		271,
		14
	],
	"../pages/home/home.module": [
		272,
		13
	],
	"../pages/jesus/jesus.module": [
		273,
		12
	],
	"../pages/location/location.module": [
		274,
		11
	],
	"../pages/menu/menu.module": [
		275,
		10
	],
	"../pages/post-detail/post-detail.module": [
		276,
		9
	],
	"../pages/prayer/prayer.module": [
		277,
		8
	],
	"../pages/resources/resources.module": [
		278,
		7
	],
	"../pages/series/series.module": [
		279,
		6
	],
	"../pages/sermon/sermon.module": [
		280,
		5
	],
	"../pages/sermons/sermons.module": [
		281,
		4
	],
	"../pages/staff/staff.module": [
		282,
		3
	],
	"../pages/stories/stories.module": [
		283,
		2
	],
	"../pages/tabs/tabs.module": [
		284,
		1
	],
	"../pages/times/times.module": [
		285,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreybackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
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
        console.log(eventId);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_greyback_greyback__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_audio_audio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_tab_hidden_tab_hidden__ = __webpack_require__(266);
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
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

/***/ 266:
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

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 307,
	"./af.js": 307,
	"./ar": 308,
	"./ar-dz": 309,
	"./ar-dz.js": 309,
	"./ar-kw": 310,
	"./ar-kw.js": 310,
	"./ar-ly": 311,
	"./ar-ly.js": 311,
	"./ar-ma": 312,
	"./ar-ma.js": 312,
	"./ar-sa": 313,
	"./ar-sa.js": 313,
	"./ar-tn": 314,
	"./ar-tn.js": 314,
	"./ar.js": 308,
	"./az": 315,
	"./az.js": 315,
	"./be": 316,
	"./be.js": 316,
	"./bg": 317,
	"./bg.js": 317,
	"./bm": 318,
	"./bm.js": 318,
	"./bn": 319,
	"./bn.js": 319,
	"./bo": 320,
	"./bo.js": 320,
	"./br": 321,
	"./br.js": 321,
	"./bs": 322,
	"./bs.js": 322,
	"./ca": 323,
	"./ca.js": 323,
	"./cs": 324,
	"./cs.js": 324,
	"./cv": 325,
	"./cv.js": 325,
	"./cy": 326,
	"./cy.js": 326,
	"./da": 327,
	"./da.js": 327,
	"./de": 328,
	"./de-at": 329,
	"./de-at.js": 329,
	"./de-ch": 330,
	"./de-ch.js": 330,
	"./de.js": 328,
	"./dv": 331,
	"./dv.js": 331,
	"./el": 332,
	"./el.js": 332,
	"./en-au": 333,
	"./en-au.js": 333,
	"./en-ca": 334,
	"./en-ca.js": 334,
	"./en-gb": 335,
	"./en-gb.js": 335,
	"./en-ie": 336,
	"./en-ie.js": 336,
	"./en-nz": 337,
	"./en-nz.js": 337,
	"./eo": 338,
	"./eo.js": 338,
	"./es": 339,
	"./es-do": 340,
	"./es-do.js": 340,
	"./es-us": 341,
	"./es-us.js": 341,
	"./es.js": 339,
	"./et": 342,
	"./et.js": 342,
	"./eu": 343,
	"./eu.js": 343,
	"./fa": 344,
	"./fa.js": 344,
	"./fi": 345,
	"./fi.js": 345,
	"./fo": 346,
	"./fo.js": 346,
	"./fr": 347,
	"./fr-ca": 348,
	"./fr-ca.js": 348,
	"./fr-ch": 349,
	"./fr-ch.js": 349,
	"./fr.js": 347,
	"./fy": 350,
	"./fy.js": 350,
	"./gd": 351,
	"./gd.js": 351,
	"./gl": 352,
	"./gl.js": 352,
	"./gom-latn": 353,
	"./gom-latn.js": 353,
	"./gu": 354,
	"./gu.js": 354,
	"./he": 355,
	"./he.js": 355,
	"./hi": 356,
	"./hi.js": 356,
	"./hr": 357,
	"./hr.js": 357,
	"./hu": 358,
	"./hu.js": 358,
	"./hy-am": 359,
	"./hy-am.js": 359,
	"./id": 360,
	"./id.js": 360,
	"./is": 361,
	"./is.js": 361,
	"./it": 362,
	"./it.js": 362,
	"./ja": 363,
	"./ja.js": 363,
	"./jv": 364,
	"./jv.js": 364,
	"./ka": 365,
	"./ka.js": 365,
	"./kk": 366,
	"./kk.js": 366,
	"./km": 367,
	"./km.js": 367,
	"./kn": 368,
	"./kn.js": 368,
	"./ko": 369,
	"./ko.js": 369,
	"./ky": 370,
	"./ky.js": 370,
	"./lb": 371,
	"./lb.js": 371,
	"./lo": 372,
	"./lo.js": 372,
	"./lt": 373,
	"./lt.js": 373,
	"./lv": 374,
	"./lv.js": 374,
	"./me": 375,
	"./me.js": 375,
	"./mi": 376,
	"./mi.js": 376,
	"./mk": 377,
	"./mk.js": 377,
	"./ml": 378,
	"./ml.js": 378,
	"./mr": 379,
	"./mr.js": 379,
	"./ms": 380,
	"./ms-my": 381,
	"./ms-my.js": 381,
	"./ms.js": 380,
	"./my": 382,
	"./my.js": 382,
	"./nb": 383,
	"./nb.js": 383,
	"./ne": 384,
	"./ne.js": 384,
	"./nl": 385,
	"./nl-be": 386,
	"./nl-be.js": 386,
	"./nl.js": 385,
	"./nn": 387,
	"./nn.js": 387,
	"./pa-in": 388,
	"./pa-in.js": 388,
	"./pl": 389,
	"./pl.js": 389,
	"./pt": 390,
	"./pt-br": 391,
	"./pt-br.js": 391,
	"./pt.js": 390,
	"./ro": 392,
	"./ro.js": 392,
	"./ru": 393,
	"./ru.js": 393,
	"./sd": 394,
	"./sd.js": 394,
	"./se": 395,
	"./se.js": 395,
	"./si": 396,
	"./si.js": 396,
	"./sk": 397,
	"./sk.js": 397,
	"./sl": 398,
	"./sl.js": 398,
	"./sq": 399,
	"./sq.js": 399,
	"./sr": 400,
	"./sr-cyrl": 401,
	"./sr-cyrl.js": 401,
	"./sr.js": 400,
	"./ss": 402,
	"./ss.js": 402,
	"./sv": 403,
	"./sv.js": 403,
	"./sw": 404,
	"./sw.js": 404,
	"./ta": 405,
	"./ta.js": 405,
	"./te": 406,
	"./te.js": 406,
	"./tet": 407,
	"./tet.js": 407,
	"./th": 408,
	"./th.js": 408,
	"./tl-ph": 409,
	"./tl-ph.js": 409,
	"./tlh": 410,
	"./tlh.js": 410,
	"./tr": 411,
	"./tr.js": 411,
	"./tzl": 412,
	"./tzl.js": 412,
	"./tzm": 413,
	"./tzm-latn": 414,
	"./tzm-latn.js": 414,
	"./tzm.js": 413,
	"./uk": 415,
	"./uk.js": 415,
	"./ur": 416,
	"./ur.js": 416,
	"./uz": 417,
	"./uz-latn": 418,
	"./uz-latn.js": 418,
	"./uz.js": 417,
	"./vi": 419,
	"./vi.js": 419,
	"./x-pseudo": 420,
	"./x-pseudo.js": 420,
	"./yo": 421,
	"./yo.js": 421,
	"./zh-cn": 422,
	"./zh-cn.js": 422,
	"./zh-hk": 423,
	"./zh-hk.js": 423,
	"./zh-tw": 424,
	"./zh-tw.js": 424
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
webpackContext.id = 438;

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(436);
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

/***/ })

},[197]);
//# sourceMappingURL=main.js.map