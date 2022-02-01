import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-list-episodes',
  templateUrl: './modal-list-episodes.component.html',
  styleUrls: ['./modal-list-episodes.component.css']
})
export class ModalListEpisodesComponent implements OnInit {

  public charactersDetail : any;

  constructor(
  @Inject(MAT_DIALOG_DATA) public dataCharacters : any
  ) { 
    
  }

  ngOnInit(): void {
    this.getDataCharacters()
    
  }

  getDataCharacters(){
    this.charactersDetail = this.dataCharacters
    
    
  }

}
