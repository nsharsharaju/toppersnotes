const LocalStrategy = require('passport-local').Strategy
const { getUsers } = require('../../repositories/users')

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user)
    })
    passport.deserializeUser((user, done) => {
        done(null, user)
    })

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows to pass entire request to the callback
        },
            async (req, username, password, done) => { // callback from our form
                try {
                    const users = await getUsers({ where: { username, password } })
                    if (!users || !users[0]) return done(null, false, 'No user found.')
                    const user = users[0]
                    return done(null, user)
                } catch (exception) {
                    return done(exception)
                }
            })
    )
}