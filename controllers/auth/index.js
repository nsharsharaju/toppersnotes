const passport = require('passport')

const login = async (request, response) => {
    try {
        const { username, password } = request.body
        if (!username || !password) {
            return response.json({
                status: -1,
                message: 'Something is not good'
            })
        }
        passport.authenticate('local-login', async (err, user, info) => {
            if (err || !user)
                return response.json({
                    status: -1,
                    message: 'Invalid Username or Password'
                })
            request.logIn(user, null, async (loginInErr) => {
                if (loginInErr) {
                    return response.json({
                        status: -1,
                        message: 'Something is not good'
                    })
                }
                response.cookie('c_ux', 30 * 60 * 1000, { maxAge: 30 * 60 * 1000 })
                response.json({
                    status: 0,
                    message: 'Request Successful'
                })
            })
        })(request, response)

    } catch (exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports = {
    login
}