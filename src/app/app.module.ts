import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvshowDisplayComponent } from './tvshow-display/tvshow-display.component';
import { HttpClientModule } from '@angular/common/http';
import { TvServiceService } from './tv-service.service';
import { DetailsOfShowComponent } from './details-of-show/details-of-show.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TvshowDisplayComponent,
    DetailsOfShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [TvServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
