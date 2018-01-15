import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	segment: 'times'
})
@Component({
	selector: 'page-times',
	templateUrl: 'times.html',
})
export class TimesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TimesPage');
	}

}
