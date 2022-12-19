const express = require('express')

const controller = require('../controllers/movies.controller')

const router = express.Router()

const path = 'movies'

router.get(`/${path}/`,
    controller.getData
)

module.exports = router
