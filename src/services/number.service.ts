import {NumberI} from '../models/number.model';
export class NumberService {
    input: NumberI;
    constructor(number: NumberI) {
        this.input = number
    }

    seiveOfEra = (): number => {
        const numberArr = new Array(this.input.number + 1);
        numberArr.fill(true);
        numberArr[0] = numberArr[1] = false;
        for (let i = 2; i <= Math.sqrt(this.input.number); i++) {
            for (let j = 2; i * j <= this.input.number; j++) {
                numberArr[i * j] = false;
            }
        }
        let result = numberArr.reduce((a, v, i) => {
            if (v) {
                return a.concat(i);
            } else {
                return a;
            };
        }, []);
        result = result.filter((number :number) => number !== this.input.number);
        return result[result.length - 1];
    }
}