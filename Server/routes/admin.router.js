const express = require('express')

const controller = require('../controllers/admin.controller')

const router = express.Router()

const path = 'admin'

router.get(`/${path}/`,
    controller.getData
)

module.exports = router