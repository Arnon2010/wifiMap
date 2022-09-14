// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'fresh'
// })
// export class FreshPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fresh' })
  export class FreshPipe implements PipeTransform {
    transform(value: any, filterString: string) {
      if(value.length === 0) {
        return value;
      }

      const devices = [];
      for (const item of value) {
         if(item['name'] === filterString) {
          devices.push(item);
         } 
      }
      return devices;
    }
}

