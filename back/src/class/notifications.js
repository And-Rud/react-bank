class Notifications {
  static #list = []

  constructor({ info }) {
    this.info = info
    this.time = Notifications.getDateAndTime()
  }

  static create(data) {
    const notif = new Notifications(data)
    return notif
  }

  static getList = () => {
    return this.#list
  }

  // static getById(id) {
  //   return (
  //     this.#list.find((notif) => notif.id === Number(id)) ||
  //     null
  //   )
  // }

  static getDateAndTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(
      2,
      '0',
    )
    const currentTime = `${hours}:${minutes}`

    let getCurrentDate = () => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date = new Date()
      const day = date.getDate()
      const month = months[date.getMonth()]
      return `${day} ${month}`
    }
    const currentDate = getCurrentDate()
    return `${currentDate}, ${currentTime}`
  }
}

module.exports = {
  Notifications,
}
