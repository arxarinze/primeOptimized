import {NumberI} from '../models/number.model';
import { NumberService } from '../services/number.service';
class PrimeController {
    static getLargestNumberLessThanInput = (request: any, response: any) => {
        try {
            let number : NumberI={number: parseInt(request.body.number)};
            let result = new NumberService(number).seiveOfEra();
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
