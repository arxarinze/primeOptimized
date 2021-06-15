//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
let should = chai.should();

chai.use(chaiHttp);
describe('Number', () => {
    describe('/POST number', () => {
        it('it should return to the user the highest prime number lower than the input number', (done) => {
            let number = {
                number: 55
            }
            chai.request(server)
                .post('/prime')
                .send(number)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('number');
                    done();
                });
        });
    });

});