import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GreybackProvider {
	rootUrl: string = 'http://firstburleson.server3.greyback.net/';

	constructor(public http: Http) {
		console.log('Hello GreybackProvider Provider');
	}

	getNews() {
		return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:4/category:3').map(result => result.json());
	}

	getCommunity() {
		//return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:2').map(result => result.json());
		return this.http.get(this.rootUrl + '/ajax/plugin/community/community_posts/latest/department:2').map(result => result.json());
	}

	getSeries() {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_series/json/category:1').map(result => result.json());
	}

	getSeriesById(seriesId: number) {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/series:' + seriesId).map(result => result.json());
	}

	getLatestSermon() {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/limit:1/category:1').map(result => result.json());
	}

	getEvents() {
		return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:3').map(result => result.json());
	}

	getStaff() {
		return this.http.get(this.rootUrl + '/ajax/plugin/staff/staff_departments/json/department:2').map(result => result.json())
	}

	getCalendars() {
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', "Basic " + btoa('patrickkemp:Three3leaf'));
		let opts = new RequestOptions({ headers: headers });
		return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/calendars', opts).map(result => result.json());
	}

	getCalendar() {
		return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events?&startdate=10/01/2017&stopdate=10/31/2017&pageIndex=0&pageSize=50').map(result => result.json());
	}

}
