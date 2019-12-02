import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '../../../node_modules/@angular/platform-browser';
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
	// poster: string;
	youTubeUrl: SafeResourceUrl;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public greybackProvider: GreybackProvider,
		public audioProvider: AudioProvider,
		public mediaProvider: MediaProvider,
		public menuCtrl: MenuController,
		private sanitizer: DomSanitizer
	) {
		this.sermon = this.navParams.get('sermon');
		this.series = this.navParams.get('series');
		this.rootUrl = greybackProvider.rootUrl;
		// this.source = this.rootUrl + '/play/vid/' + this.sermon.MediaVideo.id + '/vid.mp4';
		this.youTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + this.sermon.MessageMessage.video_url);
		// this.source = "https://youtube.com/embed/" + this.sermon.MessageMessage.video_url;
		// this.poster = this.rootUrl + '/img/thumb/' + this.sermon.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';

	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad SermonPage');
	}

    ionViewWillEnter(): void {
		// for(let i of array_of_objects){
		//   i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
		// }
	}

	playAudio(sermon) {
		this.audioProvider.play({
			url: this.rootUrl + 'play/mp3/' + sermon.MediaAudio.id,
			title: sermon.MessageMessage.title,
			speaker: sermon.MessageAuthor.name
		});
		this.menuCtrl.open();
	}
}
