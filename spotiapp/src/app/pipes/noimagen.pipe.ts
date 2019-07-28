import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(Image: any[]):string {
    if(!Image){
     
      return './assets/img/descarga.jpg';
    }
    if(Image.length>0){
      
      return Image[0].url;

    }
    else{
      
      return './assets/img/descarga.jpg';
    }
    
    
  }

}
