class Confirm {
  static #list = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }

  static generateCode = () => {
    return Math.floor(Math.random() * 9000) + 1000
  }

  static create = (data) => {
    const confirm = new Confirm(data)
    this.#list.push(confirm)

    setTimeout(() => {
      this.delete(code)
    }, 86400000)

    console.log(this.#list)
    return confirm
  }

  static delete = (code) => {
    const length = this.#list

    this.#list = this.#list.filter(
      (item) => item.code !== code,
    )
    return length > this.#list.length
  }

  static getData = (code) => {
    const el = this.#list.find((item) => item.code === code)
    return el ? el : null
  }
}

module.exports = {
  Confirm,
}
