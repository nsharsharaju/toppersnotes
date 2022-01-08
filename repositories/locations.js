const db = require('../models')

module.exports.getLocations = async ({ where }) => {
    const result = await db.locations.findAll({
        where,
        raw: true
    })
    return result
}

module.exports.createLocation = async ({ row, fields }) => {
    const result = await db.locations.create(row, { fields })
    return result.taskid
}

module.exports.editLocation = async ({ updateValues, where }) => {
    const result = await db.locations.update(updateValues, {
        where
    })
    return result
}

module.exports.deleteLocation = async ({ where }) => {
    const result = await db.locations.destroy({
        where
    })
    return result
}