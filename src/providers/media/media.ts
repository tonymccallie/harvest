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
		//this.player = this.media.create('../assets/test.mp3');
		// this.player.ontimeupdate = function (player) {
		// 	self.current = new Date(1970, 0, 1).setSeconds(player.srcElement.currentTime);
		// 	self.duration = new Date(1970, 0, 1).setSeconds(player.srcElement.duration);
		// 	self.percentage = Math.round(player.srcElement.currentTime / player.srcElement.duration * 100);
		// }

		// this.player.onprogress = function (data) {
		// 	console.log(['onprogress',data]);
		// }
		// this.player.oncanplay = function (data) {
		// 	console.log(['oncanplay',data]);
		// 	//self.player.play();
		// }
		// this.player.oncanplaythrough = function (data) {
		// 	self.loading = false;
		// 	console.log(['oncanplaythrough',data]);
		// }
		// this.player.onstalled = function (data) {
		// 	console.log(['onstalled',data]);
		// }
		// this.player.onabort = function (data) {
		// 	console.log(['onabort',data]);
		// }
		// this.player.onerror = function (data) {
		// 	let alert = self.alertCtrl.create({
		// 		title: 'Oh no!',
		// 		subTitle: 'There was an error trying to load the audio file. You might try again later or listen to a different one.',
		// 		buttons: ['Ok']
		// 	});
		// 	alert.present();
		// 	self.playing = false;
		// 	self.loading = true;
		// 	self.title = '';
		// 	console.log(['onerror',data]);
		// }
		// this.player.onloadstart = function (data) {
		// 	console.log(['onloadstart',data]);
		// }
		// this.player.onplaying = function (data) {
		// 	console.log(['onplaying',data]);
		// }
		// this.player.onplay = function (data) {
		// 	console.log(['onplay',data]);
		// }
		// this.player.onpause = function (data) {
		// 	console.log(['onpause',data]);
		// }
	}

	play(config: any) {
		this.playing = true;
		this.loading = true;
		this.title = config.title;
		this.speaker = config.speaker;

		console.error(config.url + '/file.mp3');
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
		this.timer = setInterval(() => {
			this.timeUpdate()
		}, 1000);
	}

	timeUpdate() {
		this.player.getCurrentPosition().then((position) => {
			console.log('getCurrentPosition', position);
			this.current = position;
			this.duration = new Date(1970, 0, 1).setSeconds(this.player.getDuration());
			console.log('duration',this.duration);
			this.percentage = Math.round(this.current / this.duration * 100);
			console.log('percentage',this.percentage);
		});
	}

	pause() {
		if (this.playing) {
			this.player.pause();
			this.playing = false;
		} else {
			this.player.play();
			this.playing = true;
		}
	}

	scrub(percent) {
		//this.player.currentTime = (percent.value / 100) * this.player.duration;
		this.player.seekTo((percent.value / 100) * (this.player.getDuration() * 1000));
	}

}
