const router = require('express').Router()
const MenuController = require('../controllers/MenuUser')
const checkAuth = require('../middlewares/checkAuth')

router.get('/', checkAuth, MenuController.findAll)
router.get('/show/:id', MenuController.show)
router.get('/add/:id', checkAuth, MenuController.renderAdd)
router.post('/add/:id', checkAuth, MenuController.create)
router.get('/pay/:id', checkAuth, MenuController.pay)
router.get('/delete/:id', checkAuth, MenuController.delete)

module.exports = router