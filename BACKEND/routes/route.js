const {Router} = require('express')
const router = Router()
const {connexion,inscription} = require('../controllers/control')

router.post("/inscription", inscription)
router.post("/connexion", connexion)










module.exports = router



