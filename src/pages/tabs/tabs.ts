import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1Root: any = 'HomePage';
	tab2Root: any = 'SeriesPage';
	tab3Root: any = 'StoriesPage';
	tab4Root: any = 'EventsPage';
	tab5Root: any = 'ResourcesPage';
	myIndex: number;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.myIndex = navParams.data.tabIndex || 0;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabsPage');
	}

}
