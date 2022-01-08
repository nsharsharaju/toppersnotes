const cookieParser = require('cookie-parser')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const redisStore = require('connect-redis')(session)
const redisConfig = require('./config/redis')
const bodyParser = require('body-parser')
const app = express()
require('./services/auth/passport')(passport)

app.use(cookieParser('cookieParseSign#1997_!2017')) // read cookies (needed for auth)
app.use(bodyParser.json({
    extended: false,
    limit: '5mb'
}))

app.use(bodyParser.urlencoded({ extended: true }))

const redisClient = new redisStore(redisConfig)
app.use(
    session({
        store: redisClient,
        secret: 'ssshhhhh',
        resave: false,
        rolling: true,
        saveUninitialized: false,
        cookie: { maxAge: Date.now() + 30 * 60 * 1000 }
    })
)


app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

})

app.use('/', require('./routes'))

app.use((req, res, next) => {
    req.session.destroy(() => {
        req.logout()
    })
    logger.error(`API not found. ${req.method}:${req.originalUrl}`)
    const err = new Error('API not found.')
    err.status = 404
    next(err)
})

app.set('port', 3000)
const server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port)
})