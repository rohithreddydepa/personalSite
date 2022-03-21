import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'summary',
})
export class summayPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    let ans: string[] = [];
    if (value) return null;
    else {
      let words = value.split(' ');
      words.forEach((element, i) => {
        if (element.toLowerCase() === 'of' || element.toLowerCase() === 'the') {
          if (i === 0) ans.push(element[0].toUpperCase() + element.slice(1));
          else ans.push(element.toLowerCase());
        } else ans.push(element[0].toUpperCase() + element.slice(1));
      });
    }
    return ans.join(' ');
  }
}
