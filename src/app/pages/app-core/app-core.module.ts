import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppCoreRoutingModule } from './app-core-routing.module';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppCoreComponent } from './app-core.component';


//angular material.
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalListEpisodesComponent } from './list-episodes/modal-list-episodes/modal-list-episodes.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListEpisodesComponent,
    FavoritesComponent,
    AppCoreComponent,
    ModalListEpisodesComponent,
  ],
  imports: [
    CommonModule,
    AppCoreRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class AppCoreModule { }
