const chai = require('chai');
const http = require('chai-http'); 
const subSet = require('chai-subset'); 

const app = require('../app');

const UserController = require('../controller/UserController'); 
const CalendarController = require('../controller/CalendarController');

chai.use(http);
chai.use(subSet);

const userSchema = {
    name: name => name,
    password: password => password
};

const calendarPostSchema = {
    name: name => name,
    day: day => day,
    hour: hour => hour
}

const calendarSchema = {
    name: name => name,
    day: day => day,
    hour: hour => hour,
    creationDate: creation => creation
};

describe('Integration tests user and calendars', async() => {

    it('/users - POST', () => {
        chai.request(app)
            .post('/users')
            .send({
                name: 'testeNode',
                password: 'teste123'
            })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(201);
                chai.expect(res.body).to.containSubset(userSchema); 
            });
    });

    
    it('/calendars - POST', () => {
        chai.request(app)
            .post('/calendars')
            .send({
                name: 'testeEvent',
                day: '1',
                hour: '1:00'
            })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(201);
                chai.expect(res.body).to.containSubset(calendarPostSchema); 
            });
    });

    it('/calendars - GET', () => {
        chai.request(app)
            .get('/calendar')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200); 
                chai.expect(res.body.length).to.be.equal(4);
                chai.expect(res.body).to.containSubset([calendarSchema]);
            });
    });
});


// describe('Unit tests user and calendars', async() => {

    // it('addUser', async() => {
    //     const user = await UserController.register({name:'testeNode', password: 'teste123'});
        
    //     chai.expect(user.name).to.be.equals('testeNode');
    //     chai.expect(user).to.containSubset(userSchema);
    // });

    // it('getCalendars', async() => {
    //     var calendar;
    //     CalendarController.store({name: 'test1', day: '1', hour: '1'});
    //     CalendarController.store({name: 'test2', day: '2', hour: '2'});
    //     CalendarController.store({name: 'test3', day: '3', hour: '3'}).then(async() => {
    //         calendar = await CalendarController.index().data;
    //     });
        
    //     chai.expect(calendar.length).to.be.equals(0);
    //     chai.expect(calendar).to.containSubset(calendarSchema);
    // });
});
