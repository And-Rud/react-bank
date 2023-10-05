class Session {
  static #list = []

  constructor(user) {
    this.token = Session.generateCode()
    this.user = {
      email: user.email,
      isConfirm: user.isConfirm,
      id: user.id,
    }
  }

  static generateCode = () => {
    const length = 6
    const char = 'Th1sIs@Samp1eStr1ng!'

    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * char.length,
      )
      result += char[randomIndex]
    }
    return result
  }

  static create = (user) => {
    const session = new Session(user)

    this.#list.push(session)

    return session
  }

  static get = (token) => {
    return this.#list.find(
      (item) => item.token === token || null,
    )
  }
  static getList = () => this.#list
}

module.exports = {
  Session,
}
