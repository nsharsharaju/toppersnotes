const db = require('../models')

module.exports.getComments = async ({ where }) => {
    const result = await db.comments.findAll({
        where,
        raw: true
    })
    return result
}


module.exports.createComment = async ({ row, fields }) => {
    const result = await db.comments.create(row, { fields })
    return result.taskid
}

module.exports.editComment = async ({ task, where }) => {
    const result = await db.comments.update(task, {
        where
    })
    return result
}

module.exports.deleteComment = async ({ where }) => {
    const result = await db.comments.destroy({
        where
    })
    return result
}