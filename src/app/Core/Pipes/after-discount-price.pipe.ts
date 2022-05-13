import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'afterDiscountPrice',
})
export class AfterDiscountPricePipe implements PipeTransform {
  transform(value: number, discount: number): number {
    let discoutAmount: number = value * discount;

    return value - discoutAmount;
  }
}
