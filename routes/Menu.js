const router = require('express').Router()
const MenuController = require('../controllers/Menu')

router.get('/', MenuController.findAll)
router.get('/add', MenuController.add)
router.post('/add', MenuController.insert)

module.exports = router