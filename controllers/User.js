const { User } = require('../models/index')
const { decryptPassword } = require('../helpers/bcrypt')
class UserController {
    static renderLogin(req, res) {
        res.render('login', { isLogin: req.session.isLogin })
    }

    static login(req, res) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    if (decryptPassword(password, result.password)) {
                        req.session.UserId = result.id
                        req.session.isLogin = true
                        req.session.name = result.name

                        if (result.role === 'admin') {
                            res.redirect('/menus')
                        } else {
                            console.log(req.session)
                            res.redirect('/')
                        }
                    } else {
                        res.send('Wrong Password')
                    }
                } else {
                    res.send('User not found')
                }
            })
            .catch(err => {
                console.log(err)
                res.send('Error!')
            })
    }

    static renderRegister(req, res) {
        res.render('register', { isLogin: req.session.isLogin })

    }
    static register(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: 'customer'
        }

        User.create(data).then(result => {
            req.session.UserId = result.id
            req.session.isLogin = true
            req.session.name = result.name
            res.redirect('/')
        }).catch(err => {
            console.log(err)
            res.send(err)
        })

    }

    static logout(req, res) {
        req.session.isLogin = false
        req.session.name = null
        res.redirect('/')
    }
}

module.exports = UserController