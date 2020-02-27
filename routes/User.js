const router = require('express').Router()
const UserController = require('../controllers/User')

router.get('/login', UserController.renderLogin)
router.post('/login', UserController.login)
router.get('/register', UserController.renderRegister)
router.post('/register', UserController.register)
router.get('/logout', UserController.logout)

module.exports = router