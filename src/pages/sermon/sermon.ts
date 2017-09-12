import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';
import { AudioProvider } from '../../providers/audio/audio';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-sermon',
	templateUrl: 'sermon.html',
})
export class SermonPage {
	series: any;
	sermon: any;
	rootUrl: string;
	player: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider, public audioProvider: AudioProvider, public menuCtrl: MenuController) {
		this.sermon = this.navParams.get('sermon');
		this.series = this.navParams.get('series');
		this.rootUrl = greybackProvider.rootUrl;
		this.player = audioProvider;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SermonPage');
	}

	playAudio(sermon) {
		this.audioProvider.play({
			url: this.rootUrl + '/play/mp3/' + sermon.MediaAudio.id,
			title: sermon.MessageMessage.title,
			speaker: sermon.MessageAuthor.name
		});
		this.menuCtrl.open();
	}
}
