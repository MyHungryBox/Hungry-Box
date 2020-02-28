const { Menu } = require('../models')
const { Op } = require("sequelize");
class MenuController {
    static findAll(req, res) {
        let keyword = req.query.keyword 

        if (!keyword) {
            keyword = ''
        }
        Menu.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%`
                }
            }
        })
            .then(result => {

                for (let i = 0; i < result.length; i++) {
                    result[i].setDataValue(`formattedPrice`, result[i].getPrice());
                    console.log(result[i].getPrice())
                }

                res.render('homeMenu', { menus: result, isLogin: req.session.isLogin })
            })
    }

    static add(req, res) {
        res.render('formAddMenu', { isLogin: req.session.isLogin })
    }

    static insert(req, res) {
        let data = {
            name: req.body.name,
            description: req.body.description,
            price: +req.body.price,
            menu_type: req.body.menu_type,
            img_url: req.body.img_url
        }
        Menu.create(data)
            .then(result => {
                res.redirect('/menus')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static edit(req, res) {
        let id = +req.params.id
        Menu.findByPk(id)
            .then(result => {
                res.render('formEditMenu', { isLogin: req.session.isLogin, result })
            })

            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        let id = +req.params.id
        let data = {
            name: req.body.name,
            description: req.body.description,
            price: +req.body.price,
            menu_type: req.body.menu_type,
            img_url: req.body.img_url
        }
        Menu.update(data, { where: { id } })
            .then(result => {
                res.redirect('/menus')
            })

            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        const id = +req.params.id

        Menu.destroy({ where: { id } }).then(result => {
            res.redirect('/menus')
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = MenuController