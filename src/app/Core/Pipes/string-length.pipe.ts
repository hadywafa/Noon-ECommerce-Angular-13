import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength',
})
export class StringLengthPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length >= 73) value = value.substring(0, 72) + '...';

    return value;
  }
}
