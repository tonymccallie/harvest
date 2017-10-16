import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';
import * as moment from 'moment';

@IonicPage()
@Component({
	selector: 'page-events',
	templateUrl: 'events.html',
})
export class EventsPage {
	events: any[];
	rootUrl: string;
	curMonth: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor EventsPage');
		this.rootUrl = greybackProvider.rootUrl;
		this.greybackProvider.getCalendar().subscribe(events => {
			this.events = events.Page;
			this.events.forEach((event,index) => {
				console.log(event);
				let tmpMonth = moment.utc(event.StartDate).format('MMMM');
				if(this.curMonth != tmpMonth) {
					this.events[index].header = tmpMonth;
					this.curMonth = tmpMonth;
				}
			});
			console.log(this.events);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventsPage');
	}

	convertDate(date) {
		let newDate = Date.parse(date.substr(0,date.length - 4).replace(' ','T'));
		return newDate;
	}

	viewEvent(event) {
		this.navCtrl.push('EventDetailPage', {
			event: event,
			eventId: event.EventId
		});
	}

}
