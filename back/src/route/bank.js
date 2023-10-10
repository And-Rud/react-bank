// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')
const { Confirm } = require('../class/confirm')
const { Session } = require('../class/session')
const { Payment } = require('../class/payment')
const { Notifications } = require('../class/notifications')

//======================================================
router.post('/signup', function (req, res) {
  const { email, password } = req.body
  console.log(req.body)
  if (!email || !password) {
    console.log('error1')
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }
  try {
    const user = User.getByEmail(email)
    if (user) {
      console.log('error2')

      return res.status(400).json({
        message: 'Такий користувач вже існує',
      })
    }
    const newuser = User.create({ email, password })

    const session = Session.create(newuser)

    const confirm = Confirm.create(newuser.email)

    const notif = Notifications.create({
      info: 'Реєстрацію виконано',
    })
    newuser.notif.push(notif)
    console.log('confirm', confirm)
    return res.status(200).json({
      message: 'Користувач успішно зареєстрований',
      session,
      confirm,
    })
  } catch (err) {
    console.log('error3')
    return res.status(400).json({
      message: 'Помилка створення користувача',
    })
  }
})
//========================================
router.post('/signup-confirm', function (req, res) {
  const { code, token } = req.body
  console.log('token', Session.get(token))
  console.log('token', Session.getList())
  console.log('req', req.body)

  if (!code || !token) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }
  try {
    const confirm = Confirm.getData(Number(code))
    if (confirm) {
      if (confirm.code === Number(code)) {
        return res.status(200).json({
          message: 'Код підтверджений',
        })
      }
    } else {
      console.log('Code error')
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//===============================================
router.post('/signin', function (req, res) {
  const { email, password } = req.body
  console.log(req.body)

  if (!email || !password) {
    console.log('error1')
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }
  try {
    const user = User.getByEmail(email)
    if (user) {
      const session = Session.create(user)
      const notif = Notifications.create({
        info: 'Вхід виконано',
      })
      user.notif.push(notif)

      if (
        user.hasOwnProperty('password') &&
        user.password === password
      )
        return res.status(200).json({
          message: 'Вхід дозволено',
          session,
        })
    }
  } catch (err) {
    console.log('error3')
    return res.status(400).json({
      message: 'Помилка створення користувача',
    })
  }
})
//===============================================
router.post('/recovery', function (req, res) {
  const { email } = req.body
  console.log(email)

  if (!email) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }
  try {
    const user = User.getByEmail(email)

    if (!user) {
      return res.status(400).json({
        message: 'Користувач з таким email не існує',
      })
    }

    let confirm = Confirm.create(email)
    return res.status(200).json({
      message: 'Код для відновлення паролю відправлено',
      confirm,
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})
//===============================================
router.post('/recovery-confirm', function (req, res) {
  const { password, code } = req.body

  console.log(password, code)

  if (!code || !password) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }

  try {
    const email = Confirm.getData(Number(code))
    if (!email) {
      return res.status(400).json({
        message: 'Код не існує',
      })
    }

    const user = User.getByEmail(email.data)
    if (!user) {
      return res.status(400).json({
        message: 'Користувач з таким емейл не існує',
      })
    }

    user.password = password

    console.log(user)

    const session = Session.create(user)

    const notif = Notifications.create({
      info: 'Пароль відновлено',
    })
    user.notif.push(notif)

    return res.status(200).json({
      message: 'Пароль змінено',
      session,
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})
//======================================================
router.get('/balance', function (req, res) {
  const userId = req.query.userId
  console.log('quer', userId)
  let user = User.getById(userId)
  console.log('user', user)
  if (!user.payment) {
    user.userSum = 0
  } else {
    let userSum = user.payment.reduce(
      (acc, item) => acc + item.sum,
      0,
    )
    user.userSum = userSum
  }

  console.log('userLast', user.userSum)
  return res.json(user)
})
//========================================================
router.post('/recive', function (req, res) {
  const { sum, sys, mes, id } = req.body
  console.log(req.body)
  if (!sum || !sys || !mes) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }

  try {
    let newpayment = Payment.create({ sum, sys, mes, id })
    console.log('newpayment', newpayment)
    let user = User.getById(id)
    console.log('newpayment-user', user)

    user.payment.push(newpayment)
    const notif = Notifications.create({
      info: 'Кошти знято',
    })
    user.notif.push(notif)

    console.log('user.payment', user.payment)
    res.status(200).json({
      message: 'Ви зняли кошти',
      user,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//========================================================
router.post('/send', function (req, res) {
  const { sum, sys, mes, id } = req.body
  console.log(req.body)

  if (!sum || !sys || !mes) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }

  try {
    let newpayment = Payment.create({
      sum: -sum,
      sys,
      mes,
      id,
    })
    console.log('newpayment', newpayment)
    let user = User.getById(id)
    console.log('newpayment-user', user)

    user.payment.push(newpayment)
    console.log('user.payment', user.payment)
    const notif = Notifications.create({
      info: 'Кошти надіслано',
    })
    user.notif.push(notif)
    let sysUser = User.getByEmail(sys)
    if (sysUser) {
      sysUser.userSum = sysUser.userSum + sum
      console.log('sysUser exist', sysUser)
    } else {
      let sysUser = User.create(sys, '123')
      sysUser.userSum = sysUser.userSum + sum
      console.log('sysUser created', sysUser)
    }
    res.status(200).json({
      message: 'Ви зняли кошти',
      user,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//======================================================
router.get('/notifications', function (req, res) {
  const userId = req.query.userId
  console.log('quer', userId)
  let user = User.getById(userId)
  console.log('user', user)
  if (user) {
    return res.json(user)
  } else {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//========================================================
router.post('/settings/mail', function (req, res) {
  const { email, passwordOld1, id } = req.body
  console.log(req.body)

  if (!email || !passwordOld1 || !id) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }

  try {
    let user = User.getById(id)
    if (!user) {
      return res.status(400).json({
        message: 'Помилка пошуку юзера',
      })
    }

    if (user.password === passwordOld1) {
      user.email = email
      const notif = Notifications.create({
        info: 'Адресу пошти змінено',
      })
      user.notif.push(notif)
      res.status(200).json({
        message: 'Пошта змінена',
        user,
      })
    } else {
      return res.status(400).json({
        message: 'Помилка зміни пошти',
      })
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//========================================================
router.post('/settings/password', function (req, res) {
  const { passwordOld2, passwordNew, id } = req.body
  console.log(req.body)
  if (!passwordOld2 || !passwordNew || !id) {
    return res.status(400).json({
      message: 'Помилка. ОБовязкові поля відсутні',
    })
  }

  try {
    let user = User.getById(id)
    if (!user) {
      return res.status(400).json({
        message: 'Помилка пошуку юзера',
      })
    }

    if (user.password === passwordOld2) {
      user.password = passwordNew
      const notif = Notifications.create({
        info: 'Пароль змінено',
      })
      user.notif.push(notif)
      res.status(200).json({
        message: 'Пароль змінено',
        user,
      })
    } else {
      return res.status(400).json({
        message: 'Помилка зміни пошти',
      })
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
})
//======================================================
router.get('/transaction', function (req, res) {
  const userId = req.query.id
  const transId = req.query.transactionId
  console.log('quer', userId, transId)

  let user = User.getById(userId)
  console.log('user', user)
  if (user) {
    if (transId) {
      console.log('user.payment', user.payment)
      let transaction = user.payment.find(
        (item) => item.tid === Number(transId),
      )
      console.log('transaction', transaction)

      if (transaction) {
        return res.status(200).json(transaction)
      } else {
        return res
          .status(404)
          .json({ message: 'Transaction not found' })
      }
    } else {
      return res.status(200).json({ user })
    }
  } else {
    return res
      .status(404)
      .json({ message: 'User not found' })
  }
})
//================================================
// Підключаємо роутер до бек-енду
module.exports = router
