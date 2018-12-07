import {Component, OnInit} from '@angular/core';
import {TwitterService} from './twitter.service';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  constructor(public twitter: TwitterService, public settings: SettingsService) {
  }

  ngOnInit() {
    this.twitter.loadTweets();
  }
}
