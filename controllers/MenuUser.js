const { Menu, MenuUser } = require('../models')

class MenuUserController {
  static findAll(req, res) {
    MenuUser.findAll({ include: [Menu] })
      .then(result => {
        res.render('listMenuUser', { result })
      })
      .catch(err => {
        res.send(err)
      })
  }
  static renderAdd(req, res) {
    const id = +req.params.id

    Menu.findByPk(id)
      .then(result => {
        res.render('formAddMenuUser', { menu: result })
      })
      .catch(err => {
        res.send(err)
      })
  }
  static create(req, res) {
    const UserId = 1
    const MenuId = +req.params.id
    const delivery_date = req.body.delivery_date

    const menu = {
      UserId,
      MenuId,
      delivery_date
    }
    MenuUser.create(menu)
      .then(result => {
        res.redirect('/menuusers')
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
}

module.exports = MenuUserController