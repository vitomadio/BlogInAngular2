import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'derp'
})
export class DerpPipe implements PipeTransform {

  transform(value, args){
    return Array.from(value) ;
  }

}
