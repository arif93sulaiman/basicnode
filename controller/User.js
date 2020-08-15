const userController = {
    getAll: (req, res, next ) => {
        return res.status(200).json({ success: true, message : 'job well done'})
    },
    getById: (req, res, next ) => {
        const { id } = req.params
        return res.status(200).json({ success: true, message : `job well done ${id}`})
    },
    createUser: (req, res, next ) => {
        const { id, firstName, lastName } = req.body
        const userPayload = {
            id,
            firstName,
            lastName
        }
        
        return res
        .status(200).json({ success: true, message : 'created user done', data: userPayload})
    }
}

module.exports = userController