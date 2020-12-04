import { Component, OnInit } from '@angular/core';
import { Track } from '../Model/track';
import { TrackService } from '../service/track.service';

@Component({
  selector: 'app-sweden',
  templateUrl: './sweden.component.html',
  styleUrls: ['./sweden.component.css']
})
export class SwedenComponent implements OnInit {
  p:any;
  listHindiSongs: Track[]=[];
  hindilist: Track[]=[];
  constructor(private service:TrackService) { }

  ngOnInit(): void {
    this.getSweden();
  }
  getSweden()
  {
    this.service.getSweden().subscribe(
      (list:any)=>{
        this.listHindiSongs=list.tracks.track;
        this.hindilist=this.listHindiSongs.map((ele:any)=>{
          let obj={
          name:ele.name,
          artistName:ele.artist.name,
          url:ele.url
          }
          return obj;
        });
        console.log(this.hindilist);
      }
    )
  }
}
