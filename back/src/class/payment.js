class Payment {
  static #list = []

  constructor({ sum, sys, mes }) {
    this.sum = Number(sum)
    this.sys = sys
    this.mes = mes
    this.time = Payment.getTime()
  }

  static create(data) {
    const payment = new Payment(data)
    this.#list.push(payment)
    return payment
  }

  static getList = () => {
    return this.#list
  }

  static getById(id) {
    return (
      this.#list.find((user) => user.id === Number(id)) ||
      null
    )
  }

  static getTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(
      2,
      '0',
    )
    const currentTime = `${hours}:${minutes}`
    return currentTime
  }
}

module.exports = {
  Payment,
}
