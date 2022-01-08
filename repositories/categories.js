const db = require('../models')

module.exports.getCategories = async ({ where }) => {
    const result = await db.category.findAll({
        where,
        raw: true
    })
    return result
}

module.exports.createCategories = async ({ row, fields }) => {
    const result = await db.categories.create(row, { fields })
    return result.taskid
}

module.exports.editCategories = async ({ updateValues, where }) => {
    const result = await db.categories.update(updateValues, {
        where
    })
    return result
}

module.exports.deleteCategories = async ({ where }) => {
    const result = await db.categories.destroy({
        where
    })
    return result
}