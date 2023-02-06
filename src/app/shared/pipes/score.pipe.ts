import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): string {
    let result: string;
    if (value > 0) {
      result = '+' + value.toString();
    } else {
      result = value.toString();
    }
    return result;
  }
}
