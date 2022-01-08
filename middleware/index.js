const isLoggedIn = (req, res, next) => {
    const unauthorizedResObj = {
      status: -1,
      message: 'User not authenticated'
    }
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
      if (req.user) {
        // if email key is sent redirect.
        return next()
      } return res.status(401).send(unauthorizedResObj)
    }
    res.status(401).send(unauthorizedResObj)
  }

const isAdmin = (req,res, next) => {
    const unauthorizedResObj = {
        status: -1,
        message: 'User not authorised'
      }
    if(req.user && res.user.role == 'admin') {
        return next()
    } return res.status(401).send(unauthorizedResObj)
}

const isRegistered = (req,res, next) => {
    const unauthorizedResObj = {
        status: -1,
        message: 'User not authorised'
      }
    if(req.user && res.user.role == 'register') {
        return next()
    } return res.status(401).send(unauthorizedResObj)
}

module.exports = {
    isLoggedIn,
    isAdmin,
    isRegistered
}