import {NumberI} from '../models/number.model';
export class NumberService {
    input: NumberI;
    constructor(number: NumberI) {
        this.input = number
    }

    isPrime = (num:number):boolean=> {
        if(num < 2) return false;
        if(num % 2 == 0) return false;
        if(num %3 == 0 ) return false;
      
        for (let k = 2; k < num; k++){
          if( num % k == 0){
            return false;
          }
        }
        return true;
      }

    seiveOfEra = (): number => {
        let number = 0
        for (let i = this.input.number-1; i > 2; i--) {
            if(this.isPrime(i)){
                number = i;
                break;
            }
        }
        return number;
    }
}