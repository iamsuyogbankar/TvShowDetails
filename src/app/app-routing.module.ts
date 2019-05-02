import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsOfShowComponent } from './details-of-show/details-of-show.component';
import { TvshowDisplayComponent } from './tvshow-display/tvshow-display.component';

const routes: Routes = [
  {path: '', component: TvshowDisplayComponent, pathMatch: 'full'},
  {path: 'tvshow-display', component: TvshowDisplayComponent},
  {path: 'details-of-component', component: DetailsOfShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
