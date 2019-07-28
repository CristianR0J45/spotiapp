import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.css']
})
export class TargetasComponent {

  @Input() items:any[]=[];
  
  constructor(private router:Router) {
   
   }
   varArtista(item:any){
     console.log(item);
     let artistaId;
     if(item.type==='artist')
     {
        artistaId=item.id;

     }else{
       artistaId=item.artists[0].id;
     }
     console.log(artistaId);
     this.router.navigate(['/artista',artistaId]);
   }

  

}
