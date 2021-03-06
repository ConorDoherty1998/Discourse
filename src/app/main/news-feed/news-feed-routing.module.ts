import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'General/1',
    pathMatch: 'full'
  },
  {
    path: ':category',
    redirectTo: 'General/1',
    pathMatch: 'full'
  },
  {
    path: ':category/:page',
    component: NewsFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule { }
