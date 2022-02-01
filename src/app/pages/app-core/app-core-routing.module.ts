import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCoreComponent } from './app-core.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: AppCoreComponent,
    children : [
      {
        path: 'list-episodes',
        component: ListEpisodesComponent 
      },
      {
        path: 'favorites',
        component: FavoritesComponent 
      },
      {
        path: '**', pathMatch: 'full', redirectTo: 'list-episodes'
      }  
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
