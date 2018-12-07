import {Component, OnInit} from '@angular/core';
import {TwitterService} from './twitter.service';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  constructor(private twitter: TwitterService, private settings: SettingsService) {
  }

  ngOnInit() {
    this.twitter.loadTweets();
  }
}
