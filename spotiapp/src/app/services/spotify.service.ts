import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import{map} from 'rxjs/operators';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 
  constructor(private http:HttpClient) {
    console.log('Spotify services listo');
   }
   getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD78OYQySYrLDZJeWhevXw5zM0zrGS3Pffmo4Vm2lKkfpGX19fldcilvev_wAoDuWJ6TY_6v5YRyAeyeOs'
     });
      return this.http.get(url,{headers});     

   }
   getNewReleases(){
     return this.getQuery('browse/new-releases')
        .pipe(map(data=>{
          return data['albums'].items;
        }));
   }
   getArtistas(termino:string){
      //  Busqueda basado en los parametros
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data=>data['artists'].items));
   }
   getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
    // .pipe(map(data=>data['artists'].items));
   }
   getTopTraks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>data['tracks']));
   }
}
// 	https://api.spotify.com/v1/artists/{id}
// artists/{id}/top-tracks