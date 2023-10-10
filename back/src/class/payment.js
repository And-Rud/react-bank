class Payment {
  static #list = []
  static tid = 1

  constructor({ sum, sys, mes, id }) {
    this.sum = Number(sum)
    this.sys = sys
    this.mes = mes
    this.id = Number(id)
    this.time = Payment.getTime()
    this.tid = Payment.tid++
  }

  static create(data) {
    const payment = new Payment(data)
    this.#list.push(payment)
    return payment
  }

  static getList = () => {
    return this.#list
  }

  static getByTid(tid) {
    return (
      this.#list.find(
        (payment) => payment.tid === Number(tid),
      ) || null
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
