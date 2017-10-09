import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AudioProvider } from '../../providers/audio/audio';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {
	// Basic root for our content view
	rootPage = 'TabsPage';
	player: any;

	// Reference to the app's root nav
	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [
		{ title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'ios-home-outline' },
		{ title: 'Jesus', pageName: 'JesusPage', icon: 'ios-heart-outline' },
		{ title: 'About', pageName: 'AboutPage', icon: 'ios-information-circle-outline' },
		{ title: 'Sermons', pageName: 'TabsPage', tabComponent: 'SeriesPage', index: 1, icon: 'ios-headset-outline' },
		{ title: 'Events', pageName: 'TabsPage', tabComponent: 'EventsPage', index: 2, icon: 'ios-calendar-outline' },
		{ title: 'Giving', pageName: 'TabsPage', tabComponent: 'StoriesPage', index: 3, icon: 'ios-cash-outline' },
		{ title: 'Service Times', pageName: 'TabsPage', tabComponent: 'TimesPage', index: 4, icon: 'ios-time-outline' },
		{ title: 'Staff', pageName: 'StaffPage', icon: 'ios-contact-outline' },
		{ title: 'Location', pageName: 'LocationPage', icon: 'ios-pin-outline' },
		// { title: 'Prayer', pageName: 'PrayerPage', icon: 'ios-chatboxes-outline' },
		{ title: 'Credits', pageName: 'CreditsPage', icon: 'ios-ribbon-outline' },
	];

	constructor(public navCtrl: NavController, public navParams: NavParams, public audioProvider: AudioProvider) {
		this.player = audioProvider;
	}

	openPage(page: PageInterface) {
		let params = {};

		// The index is equal to the order of our tabs inside tabs.ts
		if (page.index) {
			params = { tabIndex: page.index };
		}
		
		// The active child nav is our Tabs Navigation
		if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
			this.nav.getActiveChildNavs()[0].select(page.index);
		} else {
			// Tabs are not active, so reset the root page 
			// In this case: moving to or from SpecialPage
			//this.nav.setRoot(page.pageName, params);
			//this.nav.getActiveChildNavs()[0].select(5);
			//this.nav.getActiveChildNavs()[0].getByIndex(5).push(page.pageName);
			this.nav.getActiveChildNavs()[0].getSelected().push(page.pageName);
			//this.nav.push(page.pageName);
		}
	}

	isActive(page: PageInterface) {
		// Again the Tabs Navigation
		let childNav = this.nav.getActiveChildNavs()[0];

		if (childNav) {
			if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
				return 'primary';
			}
			return;
		}

		// Fallback needed when there is no active childnav (tabs not active)
		if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
			return 'primary';
		}
		return;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MenuPage');
	}

	pause() {
		this.audioProvider.pause();
	}

	scrub(percent) {
		this.audioProvider.scrub(percent);
	}
}
