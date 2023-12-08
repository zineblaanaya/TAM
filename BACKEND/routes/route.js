const {Router} = require('express')
const router = Router()
const {connexion,inscription} = require('../controllers/control')
// const muv = require('mongoose-unique-validator');

router.post("/inscription", inscription)
router.post("/connexion", connexion)










module.exports = router



