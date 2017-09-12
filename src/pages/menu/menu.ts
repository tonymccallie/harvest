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
		{ title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'threeleaf-home' },
		{ title: 'Sermons', pageName: 'TabsPage', tabComponent: 'SeriesPage', index: 1, icon: 'threeleaf-sermons' },
		{ title: 'Events', pageName: 'TabsPage', tabComponent: 'EventsPage', index: 3, icon: 'threeleaf-events' },
		{ title: 'Stories', pageName: 'TabsPage', tabComponent: 'StoriesPage', index: 2, icon: 'threeleaf-stories' },
		{ title: 'Resources', pageName: 'TabsPage', tabComponent: 'ResourcesPage', index: 4, icon: 'threeleaf-resources' },
		{ title: 'About', pageName: 'AboutPage', icon: 'shuffle' },
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
		console.log([this.nav.getActiveChildNavs()[0], this.nav.getActiveChildNavs()])
		// The active child nav is our Tabs Navigation
		if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
			this.nav.getActiveChildNavs()[0].select(page.index);
		} else {
			// Tabs are not active, so reset the root page 
			// In this case: moving to or from SpecialPage
			this.nav.setRoot(page.pageName, params);
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
