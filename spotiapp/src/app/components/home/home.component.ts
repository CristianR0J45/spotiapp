import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../..//services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises:any[]=[];
  // constructor( private http:HttpClient) { 

  //   console.log('constructor hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((resp:any)=>
  //       {
  //         this.paises=resp;
  //         console.log(resp);
  //       }
  //       );

  // }


  loading:boolean;
  home:boolean=true;
  nuevasCanciones:any[]=[];
  error:boolean=false;
  mensajeError:string;

  constructor(private spotify:SpotifyService){
    this.loading=true;
    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
      
      this.nuevasCanciones=data;
      this.loading=false;
      this.error=false;

    }, (errorServicio)=>{
      this.error=true;
      this.loading=false;
      this.mensajeError= errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
