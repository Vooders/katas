import { App } from '../src/App'
import 'mocha'
import 'verify-it'
import * as chai from 'chai'

chai.should()

describe('Till', () => {
    verify.it('returns the correct price of an item', () => {
        const theTill = new App.Till()
        theTill.update('A99')
        theTill.getTotal().should.eql(50)
    })

    verify.it('returns the correct price of multiple items (no discount)', () => {
        const theTill = new App.Till()
        theTill.update('A99')
        theTill.update('B15')
        theTill.update('C40')
        theTill.update('T34')
        theTill.getTotal().should.eql(239)
    })

    verify.it('returns the correct discount for 3x A99', () => {
        const theTill = new App.Till()
        theTill.update('A99')
        theTill.update('A99')
        theTill.update('A99')
        theTill.getTotal().should.eql(130)
    })
})