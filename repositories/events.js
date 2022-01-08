const { Sequelize } = require('../models')
const db = require('../models')

module.exports.getEvents = async ({ where }) => {
    const result = await db.events.findAll({
        where,
        raw: true
    })
    return result
}

module.exports.createEvent = async ({ row, fields }) => {
    const result = await db.events.create(row, { fields })
    return result.taskid
}

module.exports.editEvent = async ({ task, where }) => {
    const result = await db.events.update(task, {
        where
    })
    return result
}

module.exports.deleteEvent = async ({ where }) => {
    const result = await db.events.destroy({
        where
    })
    return result
}

module.exports.getEventDetails = async ({eventid}) => {
    const result = await db.sequelize.query(`
        SELECT e.*, c.category, l.location, cm.comment FROM events e
        JOIN categories c on e.categoryid = c.categoryid
        JOIN locations l on l.locationid = e.locationid
        JOIN comments cm in cm.commentid = e.commentid
        WHERE e.eventid = ${eventid}
    `, {type: Sequelize.QueryTypes.SELECT})
    return result;
}