import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from './tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() retweet: Tweet;

  private static _checkLinkClick(e) {
    let target = e.target;

    while (target !== e.currentTarget) {
      if (target.tagName === 'A') {
        return true;
      }
      target = target.parentNode;
    }
    return false;
  }

  constructor() {
  }

  ngOnInit() {

  }

  hasPhoto(tweet: Tweet) {
    return tweet.entities.media
      && tweet.entities.media.length
      && tweet.entities.media[0].type === 'photo';
  }

  twitUrl(tweet: Tweet) {
    return 'https://twitter.com/statuses/' + tweet.id_str;
  }

  openTwit(event, tweet: Tweet) {
    if (!TweetComponent._checkLinkClick(event)) {
      window.open(this.twitUrl(tweet), '_blank');
    }
  }
}
