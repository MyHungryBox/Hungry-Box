const router = require('express').Router()
const HomeController = require('../controllers/HomeController')
const user_routes = require('./User')
const menu_routes = require('./Menu')
const menuUser_routes = require('./MenuUser')

router.get('/', HomeController.HomePage)
router.use('/menus', menu_routes)
router.use('/users', user_routes)
router.use('/menuusers', menuUser_routes)

module.exports = router