import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify services listo');
   }
   getNewReleases(){
     const headers = new HttpHeaders({
      'Authorization':'Bearer BQAj_tIk2KWA2wFJPITk1KY0lq9BBQcNsjVM-o0Av3DgajbqnaV310NRZfly4W6mCfOeXN9sX7Ln29YqRuc'
     });
       
     return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
   }
   getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAj_tIk2KWA2wFJPITk1KY0lq9BBQcNsjVM-o0Av3DgajbqnaV310NRZfly4W6mCfOeXN9sX7Ln29YqRuc'
     });
      //  Busqueda basado en los parametros
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
   }
}
