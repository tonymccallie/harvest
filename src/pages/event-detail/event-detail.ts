import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage({
	segment: 'event/:eventId'
})
@Component({
	selector: 'page-event-detail',
	templateUrl: 'event-detail.html',
})
export class EventDetailPage {
	event: any;
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor EventDetailPage');
		this.greybackProvider.getEvent(this.navParams.get('event')).subscribe(event => {
			this.event = event;
		});
		this.rootUrl = greybackProvider.rootUrl;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventDetailPage');
	}

}
