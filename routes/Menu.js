const router = require('express').Router()
const MenuController = require('../controllers/Menu')
const checkAuth = require('../middlewares/checkAuth')

router.get('/', MenuController.findAll)
router.get('/add', checkAuth, MenuController.add)
router.post('/add', checkAuth, MenuController.insert)
router.get('/edit/:id', checkAuth, MenuController.edit)
router.post('/edit/:id', checkAuth, MenuController.update)
router.get('/delete/:id', checkAuth, MenuController.delete)

module.exports = router