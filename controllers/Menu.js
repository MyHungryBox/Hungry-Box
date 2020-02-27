const { Menu } = require('../models')

class MenuController {
    static findAll(req, res) {
        Menu.findAll()
            .then(result => {
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
}

module.exports = MenuController