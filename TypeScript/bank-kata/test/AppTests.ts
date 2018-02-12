import 'mocha'
import 'verify-it'
import * as chai from 'chai'
import { App } from '../src/App'
import { Gen } from 'verify-it'

chai.should()

describe('Account', () => {
  verify.it('should return correct balance after deposit', Gen.integer, (deposit: number) => {
    const account = new App.Account()
    account.deposit(deposit)
    account.balance.should.eql(deposit)
  })

  verify.it('should return the correct balance after a withdrawal', Gen.integer, (deposit: number) => {
    const account = new App.Account()
    account.deposit(deposit)
    const withdrawal: number = deposit/2
    account.withdraw(withdrawal)
    account.balance.should.eql(withdrawal)
  })

  verify.it('should print a correct statement', Gen.integerBetween(100, 1000), (deposit: number) => {
    const account = new App.Account()
    account.deposit(deposit)
    const withdrawal: number = deposit/2
    account.withdraw(withdrawal)
    const date: String = new Date().toISOString().slice(0, 10)
    console.log(date)
    account.printStatement().should.eql(`Date    Amount    Balance \n${date}    +${deposit}    ${deposit} \n${date}    -${withdrawal}    ${withdrawal} \n`)
  })
})
