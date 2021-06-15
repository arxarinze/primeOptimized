class NumberI {
    number: number;
    constructor(number: number) {
        this.number = number;
    }

    seiveOfEra = (): number => {
        const numberArr = new Array(this.number + 1);
        numberArr.fill(true);
        numberArr[0] = numberArr[1] = false;
        for (let i = 2; i <= Math.sqrt(this.number); i++) {
            for (let j = 2; i * j <= this.number; j++) {
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
        result = result.filter((number :number) => number !== this.number);
        return result[result.length - 1];
    }
}

export default NumberI;