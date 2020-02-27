const { Menu } = require('../models')

class Home {
    static HomePage(req, res) {
        Menu.findAll()
            .then(result => {
                res.render('home', { menus: result, name: req.session.name, isLogin: req.session.isLogin })
            })
    }
}

module.exports = Home