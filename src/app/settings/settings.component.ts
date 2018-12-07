import { Component, OnInit } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

  onReorder(event: CdkDragDrop<string[]>) {
    console.log('Reorder event: ', event);
    this.settings.reorder(event.previousIndex, event.currentIndex);
  }
}
