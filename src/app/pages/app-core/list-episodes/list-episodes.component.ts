import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
// import { CardpersonajesComponent } from 'src/app/components/cardpersonajes/cardpersonajes.component';
import { RickymortyService } from 'src/app/services/rickymorty/rickymorty.service';
import Swal from 'sweetalert2';
import { ModalListEpisodesComponent } from './modal-list-episodes/modal-list-episodes.component';




@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.css']
})
export class ListEpisodesComponent implements OnInit {
  
  public listEpisodes: any[] = [];
  public listEpisodesFilter: any[] = [];
  public page = 0;
  public size = 4;
  
  
  constructor( 
    private episodesRickYMorty : RickymortyService,
    public dialog : MatDialog
  ) {
    
  }

  ngOnInit(): void {
    this.getListEpisodes();
    setTimeout(() => {
      this.getData({
        pageIndex: this.page, pageSize: this.size
      })
    }, 500);
      

  }

  getListEpisodes():void {

    this.episodesRickYMorty.getNewReleases()
      .subscribe((data:any) =>{
        this.listEpisodes = data.results
        
      })
  }

  getData(obj : any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.listEpisodesFilter = this.listEpisodes.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
  
  openModalListEpisodes(data:any){
    this.dialog.open(ModalListEpisodesComponent, {
      width : '50%',
      autoFocus : true,
      data: data
    })
  }
  
  

}

