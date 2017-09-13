import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AudioProvider {
	player: any;
	playing: boolean = false;
	current: number = 0;
	duration: number = 0;
	percentage: number = 0;
	title: string = '';
	speaker: string = '';

	constructor(public http: Http) {
		var self = this;
		this.player = new Audio();
		this.player.ontimeupdate = function (player) {
			self.current = new Date(1970, 0, 1).setSeconds(player.srcElement.currentTime);
			self.duration = new Date(1970, 0, 1).setSeconds(player.srcElement.duration);
			self.percentage = Math.round(player.srcElement.currentTime / player.srcElement.duration * 100);
		}
	}

	play(config: any) {
		this.playing = true;
		this.title = config.title;
		this.speaker = config.speaker;
		this.player.src = config.url;
		this.player.autoplay = true;
		this.player.play();
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
		this.player.currentTime = (percent.value / 100) * this.player.duration;
	}
}