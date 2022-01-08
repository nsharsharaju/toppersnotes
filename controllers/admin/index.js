const locationsRepo = require('../../repositories/locations')
const categoriesRepo = require('../../repositories/categories')
const eventsRepo = require('../../repositories/events');

module.exports.getCategories = async (request, response) => {
    try{
    const result = await categoriesRepo.getCategories();
    response.json({
        status: 0,
        result
    })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.createCategory = async (request,response) => {
    try {
        const category = request.body
        await categoriesRepo.createCategories({ row: category })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.editCategory = async (request,response) => {
    try {
        const updateValues = request.body
        await categoriesRepo.editCategories({updateValues,updateValues})
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.deleteCategory = async (request, response) => {
    try {
        const { categoryid } = request.body
        await categoriesRepo.deleteCategories({ where: { categoryid } })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch (exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.getLocations = async (request, response) => {
    try{
    const result = await locationsRepo.getLocations();
    response.json({
        status: 0,
        result
    })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.createLocation = async (request,response) => {
    try {
        const location = request.body
        await categoriesRepo.createLocation({ row: location })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.editLocation = async (request,response) => {
    try {
        const updateValues = request.body
        await locationsRepo.editLocation({updateValues,updateValues})
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.deleteLocation = async (request, response) => {
    try {
        const { locationid } = request.body
        await locationsRepo.deleteLocation({ where: { locationid } })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch (exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.getEvents = async (request, response) => {
    try{
    const result = await eventsRepo.getEvents();
    response.json({
        status: 0,
        result
    })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.createEvent = async (request,response) => {
    try {
        const event = request.body
        await eventsRepo.createEvent({ row: event })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.editEvent = async (request,response) => {
    try {
        const updateValues = request.body
        await eventsRepo.editEvent({updateValues,updateValues})
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch(exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}

module.exports.deleteEvent = async (request, response) => {
    try {
        const { eventid } = request.body
        await eventsRepo.deleteEvent({ where: { eventid } })
        response.json({
            status: 0,
            message: 'Request Successful'
        })
    } catch (exception) {
        response.json({
            status: -1,
            message: 'Something is not good'
        })
    }
}