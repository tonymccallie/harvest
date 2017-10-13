import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage()
@Component({
	selector: 'page-events',
	templateUrl: 'events.html',
})
export class EventsPage {
	events: any[];
	rootUrl: string;


	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor EventsPage');
		this.rootUrl = greybackProvider.rootUrl;
		this.greybackProvider.getCalendar().subscribe(events => {
			this.events = events.Page;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventsPage');
	}

	convertDate(date) {
		console.log(date);
		let newDate = Date.parse(date);
		console.log(newDate);
		return newDate;
	}

	viewEvent(event) {
		this.navCtrl.push('EventDetailPage', {
			event: event,
			eventId: event.EventId
		});
	}

}
