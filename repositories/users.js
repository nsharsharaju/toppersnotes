const db = require('../models')

const getUsers = async ({ where }) => {
    const result = await db.users.findAll({
        where,
        raw: true
    })
    return result
}

module.exports = {
    getUsers
}