import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameStringLength'
})
export class NameStringLengthPipe implements PipeTransform {

  transform(value: string): unknown {


    if(value.length>=45)
        value=value.substring(0,45)+"..."

    return value;
  }

}
