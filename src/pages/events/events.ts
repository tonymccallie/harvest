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
	curMonth: string;
	curDay: string;
	monthIndex: number = 0;
	dayIndex: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor EventsPage');
		this.rootUrl = greybackProvider.rootUrl;
		this.greybackProvider.getCalendar().subscribe(events => {
			//this.events = events.Page;
			this.events = [];
			events.Page.forEach((event,index) => {
				let tmpMonth = moment.utc(event.StartDate).format('MMMM');
				let tmpDay = moment.utc(event.StartDate).format('dddd, MMM Do');
				if(this.curMonth != tmpMonth) {
					this.monthIndex = this.events.length;
					this.events.push({
						name:tmpMonth,
						days:[]
					});
					this.curMonth = tmpMonth;
				}
				if(this.curDay != tmpDay) {
					this.dayIndex = this.events[this.monthIndex].days.length;
					this.events[this.monthIndex].days.push({
						name: tmpDay,
						events: []
					});
					this.curDay = tmpDay;
				}
				this.events[this.monthIndex].days[this.dayIndex].events.push(event);
				console.log(this.events);
			},error => {
				console.log('errors');
			});
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
