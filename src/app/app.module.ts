import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MomentModule} from 'ngx-moment';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService, ToasterContainerComponent} from 'angular2-toaster';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppComponent} from './app.component';
import {TwitterComponent} from './twitter/twitter.component';
import {ColumnComponent} from './column/column.component';
import {TweetComponent} from './tweet/tweet.component';
import {TweetPipe} from './tweet/tweet.pipe';
import {SettingsComponent} from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    ColumnComponent,
    TweetComponent,
    TweetPipe,
    SettingsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MomentModule,
    DragDropModule,
    FormsModule,
    ToasterModule.forRoot(),
  ],
  providers: [ToasterService, ToasterContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
