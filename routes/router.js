const express = require('express')

const router = express.Router()

// static files
router.use(express.static('public'))

const baseballRoutes = require('./api/baseballRoutes')

router.use('/baseball', baseballRoutes)

// home route 
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Play Ball Website!',
        name: 'Baseball'
    })
})

// error route 
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>Strike Three, Your Out!</h1>')
        
    }
})

module.exports = router