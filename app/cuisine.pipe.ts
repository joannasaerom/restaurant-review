import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "cuisines",
  pure: false
})

export class CuisinePipe implements PipeTransform {
  transform(input: Restaurant[], desiredCuisine) {
    var output: Restaurant[] = [];
    if(desiredCuisine === "American") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "American") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCuisine === "Mexican") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "Mexican") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCuisine === "Japanese") {
      for(var i=0; i < input.length; i++) {
        if(input[i].specialty === "Japanese") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
