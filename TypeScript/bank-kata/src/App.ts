export module App {

  interface HistoryLine {
    [key: string] : string
  }

  export class Account {
    balance: number
    history: HistoryLine[]

    constructor() {
      this.balance = 0
      this.history = []
    }

    deposit(amount: number) {
      this.balance += amount;
      this.updateStatement(`+${amount}`)
    }

    withdraw(amount: number) {
      this.balance -= amount;
      this.updateStatement(`-${amount}`)
    }

    printStatement(): string {
      let output: string
      output = 'Date    Amount    Balance \n'
      for (let i in this.history) {
        output += `${this.history[i].date}    ${this.history[i].change}    ${this.history[i].balance} \n`
      }
      return output
    }

    updateStatement(amount: string){
      const line: HistoryLine = {
        'date': new Date().toISOString().slice(0, 10),
        'change': amount,
        'balance': this.balance.toString()
      }
      this.history.push(line)
    }
  }
}