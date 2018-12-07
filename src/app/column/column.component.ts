import {Component, Input} from '@angular/core';
import {Tweet} from '../tweet/tweet';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() tweets: Array<Tweet>;
}
