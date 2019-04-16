import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myprefix'
})
export class MyprefixPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    return new Promise((resolve,reject)=>{
      resolve(args+value);
    });
  }

}
