class User {
  static #list = []
  static #count = 1

  constructor({ email, password, role }) {
    this.id = User.#count++
    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.isConfirm = false
    this.userSum = 0
    this.payment = []
    this.notif = []
  }

  static create(data) {
    const user = new User(data)
    this.#list.push(user)
    console.log(this.#list)

    return user
  }

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
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

  static paymentById = (payId) => {
    return (
      this.user.payment.find(
        (payment) => payment.tid === Number(payId),
      ) || null
    )
  }
}

module.exports = {
  User,
}
