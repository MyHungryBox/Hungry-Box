const { Menu, MenuUser, User } = require('../models')
const formatRupiah = require('../helpers/formatRupiah')
const transporter = require('../helpers/mailer')

class MenuUserController {
  static findAll(req, res) {
    MenuUser.findAll({ include: [Menu] })
      .then(result => {
        res.render('listMenuUser', { result, isLogin: req.session.isLogin })
      })
      .catch(err => {
        res.send(err)
      })
  }
  static renderAdd(req, res) {
    const id = +req.params.id
    Menu.findByPk(id)
      .then(result => {
        res.render('formAddMenuUser', { menu: result, isLogin: req.session.isLogin, formatRupiah })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static create(req, res) {
    const UserId = +req.session.UserId
    const MenuId = +req.params.id
    const delivery_date = req.body.delivery_date

    const data = {
      UserId,
      MenuId,
      delivery_date
    }
    MenuUser.create(data)
      .then(menuUser => {

        Menu.findByPk(MenuId).then(menu => {
          User.findByPk(UserId).then(user => {
            let mailOptions = {
              from: 'ramadesisaragih@gmail.com',
              to: user.email,
              subject: 'Pesanan Anda berhasil dibuat',
              html: `<!DOCTYPE html>
              <html lang="en">
              
              <head>
                  <title>Pesanan Anda Berhasil Dibuat</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <style>
                      body {
                          font-family: Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          line-height: 22px;
                          text-align: center;
                      }
              
                      a img {
                          border: none;
                      }
              
                      a,
                      a:visited,
                      a:active,
                      a:link,
                      a:hover {
                          color: #30587D;
                          text-decoration: none;
                      }
              
                      h1 {
                          text-align: center;
                          font-size: 36px;
                          line-height: 50px;
                          color: #000000;
                      }
                  </style>
              </head>
              
              <body>
                  <div class="page">
                      <h1>Pesanan Anda: ${menu.name}</h1>
                      <h1>Total Bayar: ${formatRupiah(menu.price)}</h1>
              
                      <div class="results">
              
                          <p><img src="http://chart.apis.google.com/chart?cht=qr&amp;chs=300x300&amp;chl=https%3A//enigmatic-caverns-76282.herokuapp.com/menuusers/show/${menuUser.id}&amp;chld=H|0"
                                  alt="QR Code" /></p>
                          <p>Click here: <a href="https://enigmatic-caverns-76282.herokuapp.com/menuusers/show/${menuUser.id}">Tampilkan Pesanan</a></p>
                      </div>
              </body>
              
              </html>`
            }

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                res.send(error)
              } else {
                res.redirect('/menuusers')
              }
            })
          })
        })



      })
      .catch(err => {
        res.send(err)
      })
  }

  static pay(req, res) {
    let id = +req.params.id

    MenuUser.update({ status: true }, { where: { id } })
      .then(result => {
        res.redirect('/menuusers')
      })
      .catch(err => {
        res.send(err)
      })
  }
  static delete(req, res) {
    let id = +req.params.id
    MenuUser.destroy({ where: { id } })
      .then(result => {
        res.redirect('/menuusers')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static show(req, res) {
    let id = +req.params.id
    MenuUser.findByPk(id, { include: [Menu] }).then(result => {
      res.render('showMenuUser', { result, formatRupiah })
    })
  }
}
module.exports = MenuUserController