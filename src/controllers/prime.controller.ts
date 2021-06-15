import NumberI from "../models/number.model";

class PrimeController {
    static getLargestNumberLessThanInput = (request: any, response: any) => {
        try {
            let number = new NumberI( request.body.number);
            let result = number.seiveOfEra();
            response.status(200).send({
                status:200,
                data: result,
            })
        } catch (error) {
            response.status(400).send({
                status:400,
                error: error.message
            })
        }
    }
}

export default PrimeController
