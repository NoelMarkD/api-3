const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
let count;

fetch('https://api.sampleapis.com/baseball/hitsSingleSeason')
    .then(res => res.json())
    .then(data => {
        count = data.length
    })

// localhost:3000/names
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/baseball/hitsSingleSeason'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/baseball', {
                title: 'Play Ball',
                name: 'Play Ball',
                data
            })
        })
})



// localhost:3000/jokes/:id 
router.get('/:id', (req, res)=> {
    const id = req.params.id 
    const URL = `https://api.sampleapis.com/baseball/hitsSingleSeason${id}`

    fetch(URL)
        .then(res => res.json()) 
        .then(data => {
            res.render('pages/single-baseball', {
                title: `${data.setup}`,
                name: `${data.setup}`,
                data,
                count
            })
        })
})

module.exports = router