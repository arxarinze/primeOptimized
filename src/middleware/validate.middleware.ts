export const requireJsonContent = () => {
    return (request: any, response: any, next: any) => {
        if (request.headers['content-type'] !== 'application/json') {
            response.status(400).send({
                status: 400, message: 'Server requires application/json'
            })
        } else {
            next()
        }
    }
}

export const requireNumberGreaterThanOne = () => {
    return (request: any, response: any, next: any) => {
        let number = request.body.number || 0;
        if (number <= 1) {
            response.status(400).send({
                status: 400,
                message: "invalid input number should be > 0"
            })
        }
        else {
            next()
        }
    }
}