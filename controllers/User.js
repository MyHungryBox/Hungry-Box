const { User } = require('../models')

class UserController {
    static findAll(req, res){
        User.findAll()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}