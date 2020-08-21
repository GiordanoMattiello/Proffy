
const express = require('express')
const server = express()
const {pageLanding,pageStudy,pageGiveClasses,saveClasses} = require('./pages')


const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true
})


server

.use(express.urlencoded({extended:true}))
//Configure static files
.use(express.static("public"))

//routes
.get('/',pageLanding)
.get('/study',pageStudy)
.get('/give-classes',pageGiveClasses)
.post('/save-classes',saveClasses)
.listen(5500)

/*
    http://www.kongregate.com/forums/1023281-territory-idle/topics/1762576-enemy-data

*/