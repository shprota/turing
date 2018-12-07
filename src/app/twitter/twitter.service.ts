import {Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Tweet} from '../tweet/tweet';
import {forkJoin, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SettingsService} from '../settings/settings.service';
import {finalize} from 'rxjs/operators';
import {ToasterService} from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  columns = {};
  loading = false;

  constructor(private http: HttpClient, private settings: SettingsService, private ng_zone: NgZone, private toaster: ToasterService) {
    this.settings.on_refresh.subscribe(() => {
      this.ng_zone.run(this.loadTweets.bind(this));
    });
  }

  getTweets(screen_name: string = 'makeschool'): Observable<Array<Tweet>> {
    return this.http.get<Array<Tweet>>(`${environment.api}/statuses/user_timeline.json`, {
      params: new HttpParams()
        .set('count', this.settings.num_of_tweets.toString())
        .set('screen_name', screen_name)
        .set('tweet_mode', 'extended')
    });
  }

  loadTweets() {
    const requests = [];
    this.loading = true;
    this.settings.subscribes.forEach(name => requests.push(this.getTweets(name)));
    forkJoin(requests)
      .pipe(finalize(() => this.loading = false))
      .subscribe((tweets: Array<Array<Tweet>>) => {
        tweets.forEach((col: Array<Tweet>, i: number) => this.columns[this.settings.subscribes[i]] = col);
      }, () => {
        this.toaster.pop('error', 'Error', 'There was an error loading the tweets');
      });
  }
}
