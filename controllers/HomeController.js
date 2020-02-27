const { Menu } = require('../models')

const formatRupiah = require('../helpers/formatRupiah')

class Home {
    static HomePage(req, res) {
        Menu.findAll()
            .then(result => {
                res.render('home', { menus: result, name: req.session.name, isLogin: req.session.isLogin, formatRupiah })
            })
    }
}

module.exports = Home