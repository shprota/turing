import {EventEmitter, Injectable} from '@angular/core';
import {moveItemInArray} from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  subscribes = ['makeschool', 'newsycombinator', 'ycombinator'];
  num_of_tweets = 30;
  on_refresh: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.num_of_tweets = parseInt(localStorage.getItem('num_of_tweets'), 10) || this.num_of_tweets;
    this.subscribes = JSON.parse(localStorage.getItem('subscribes')) || this.subscribes;
  }

  refresh() {
    this.on_refresh.emit(null);
  }

  reorder(prev_index, current_index) {
    moveItemInArray(this.subscribes, prev_index, current_index);
    this.save();
  }

  save() {
    localStorage.setItem('subscribes', JSON.stringify(this.subscribes));
    localStorage.setItem('num_of_tweets', JSON.stringify(this.num_of_tweets));
  }
}
