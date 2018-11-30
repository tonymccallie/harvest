import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';


@Injectable()
export class MediaProvider {
	player: MediaObject;
	playing: boolean = false;
	loading: boolean = true;
	current: number = 0;
	duration: number = 0;
	percentage: number = 0;
	title: string = '';
	speaker: string = '';
	timer: any;

	constructor(
		private media: Media,
		public alertCtrl: AlertController
	) {
		console.log('Hello MediaProvider Provider');
		//var self = this;
		this.player = this.media.create('../assets/test.mp3');
	}

	play(config: any) {
		this.playing = true;
		this.loading = true;
		this.title = config.title;
		this.speaker = config.speaker;

		this.player.release();
		this.player = this.media.create(config.url + '/file.mp3');
		this.player.onStatusUpdate.subscribe(status => {
			console.log('onStatusUpdate', status);
		});
		this.player.onSuccess.subscribe(() => {
			console.log('onSuccess');
		});
		this.player.onError.subscribe((error) => {
			console.log('onStatusUpdate', error);
			let alert = this.alertCtrl.create({
				title: 'Oh no!',
				subTitle: 'There was an error trying to load the audio file. You might try again later or listen to a different one.',
				buttons: ['Ok']
			});
			alert.present();
			this.playing = false;
			this.loading = true;
			this.title = '';
			console.log(['onerror', error]);
		});
		this.player.getCurrentPosition().then((position) => {
			console.error(position);
		});
		this.player.play();
		this.timeUpdate();
	}

	timeUpdate() {
		this.timer = setInterval(() => {
			this.player.getCurrentPosition().then((position) => {
				if(position > 0) {
					this.loading = false;
				}
				console.log('getCurrentPosition', position);
				this.current = new Date(1970, 0, 1).setSeconds(position);
				this.duration = new Date(1970, 0, 1).setSeconds(this.player.getDuration());
				console.log('duration',this.duration);
				this.percentage = Math.round(position / this.player.getDuration() * 100);
				console.log('percentage',this.percentage);
			});
		}, 1000);
	}

	pause() {
		if (this.playing) {
			this.player.pause();
			this.playing = false;
			clearInterval(this.timer);
		} else {
			this.player.play();
			this.playing = true;
			this.timeUpdate();
		}
	}

	scrub(percent) {
		//this.player.currentTime = (percent.value / 100) * this.player.duration;
		this.player.seekTo((percent.value / 100) * (this.player.getDuration() * 1000));
	}

}
