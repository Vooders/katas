export module App {
  interface  Price {
    [ key: string ]: number
  }

  interface PriceList {
    [ key: string ]: Price;
  }

  interface  Counts {
    [ key: string ]: number
  }

  export class Till {
    products: string[]
    priceList: PriceList

    constructor() {
      this.products = []
      this.priceList = {
        'A99': { 'price': 50, 'offerThreshold': 3, 'offerDiscount': 20 },
        'B15': { 'price': 30, 'offerThreshold': 2, 'offerDiscount': 15 },
        'C40': { 'price': 60, 'offerThreshold': 0, 'offerDiscount': 0 },
        'T34': { 'price': 99, 'offerThreshold': 0, 'offerDiscount': 0 }
      }
    }

    update(sku: string) {
      this.products.push(sku)
    }

    getTotal(): number {
      let total: number = 0

      let counts:Counts = {}

      for (let i in this.products) {
        let sku = this.products[i]

        counts[sku] = counts[sku] ? counts[sku] + 1 : 1;
        total += this.priceList[sku].price
      }

      for (let sku in counts) {
        if (this.priceList[sku].offerThreshold > 0) {
          let a:number = Math.floor(counts[sku] / this.priceList[sku].offerThreshold)
          total -= a*this.priceList[sku].offerDiscount
        }
      }

      return total
    }
  }
}

