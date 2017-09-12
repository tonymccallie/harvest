import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GreybackProvider {
	rootUrl: string = 'http://gracepointcoppell.org';

	constructor(public http: Http) {
		console.log('Hello GreybackProvider Provider');
	}

	getNews() {
		return this.http.get(this.rootUrl+'/ajax/plugin/news/news_articles/json/limit:4/category:3').map(result => result.json());
	}

	getSeries() {
		return this.http.get(this.rootUrl+'/ajax/plugin/message/message_series/json/category:1').map(result => result.json());
	}

	getSeriesById(seriesId: number) {
		return this.http.get(this.rootUrl+'/ajax/plugin/message/message_messages/json/series:'+seriesId).map(result => result.json());
	}

	getLatestSermon() {
		return this.http.get(this.rootUrl+'/ajax/plugin/message/message_messages/json/limit:1/category:1').map(result => result.json());
	}

}
