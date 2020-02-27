const router = require('express').Router()
const MenuController = require('../controllers/MenuUser')

router.get('/', MenuController.findAll)
router.get('/add/:id', MenuController.renderAdd)
router.post('/add/:id', MenuController.create)
router.get('/pay/:id', MenuController.pay)
router.get('/delete/:id', MenuController.delete)

module.exports = router