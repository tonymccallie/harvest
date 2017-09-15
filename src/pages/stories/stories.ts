import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage()
@Component({
	selector: 'page-stories',
	templateUrl: 'stories.html',
})
export class StoriesPage {
	stories: any[];
	player: any = null;
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		this.greybackProvider.getSeriesById(52).subscribe(stories => {
			this.stories = stories.data;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StoriesPage');
	}

	viewStory(story) {
		console.log(story);
		// this.navCtrl.push('SermonPage', {
		// 	series: this.series,
		// 	sermon: sermon,
		// 	sermonId: sermon.id
		// });
	}
}
