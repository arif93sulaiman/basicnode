const userController = {
    getAll: (req, res, next ) => {
        return res.status(200).json({ success: true, message : 'job very well done'})
    },
    getById: (req, res, next ) => {
        const { id } = req.params
        return res.status(200).json({ success: true, message : `job well done ${id}`})
    },
    createUser: (req, res, next ) => {
        const { firstName, lastName, email, userType } = req.body
        let error = {}
        let errorMessage = ""
        let isBodyValid = true

        if(!firstName || typeof firstName !== "string" || firstName.trim().length === 0 ){
            isBodyValid = false
            error['firstName'] = "first name should be a string & not empty"
        }
        if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0) {
            isBodyValid = false
            error['lastName'] = "last name should be a string & not empty"
        }
        if (!validateEmail(email)) {
            isBodyValid = false
            error['email'] = "this should be an email & not empty"
        }
        if (!userType || typeof userType !== "string" || userType.trim().length === 0) {
            isBodyValid = false
            error['userType'] = "user type should be a string & not empty"
        }else{
            const checks = ['user', 'admin', 'support']
            //check if its found in the array return true else false
            const found = checks.some(check => check === userType)
            if (!found) {
                isBodyValid = false
                error['userType'] = 'this should be a string & can have these values' + checks.join(',')
            }
        }
        if (!isBodyValid) {
            return res.status(400).json({
            success: isBodyValid,
            errorMessage: 'Kindly correct the error(s)',
            error
            })
        }   
            
        //only execute everything below when all data correct
        const userPayload = {
            firstName,
            lastName,
            email,
            userType
        }
            
        
        return res
        .status(200).json({ success: true, message : 'created user done', data: userPayload})
    },
    updateUser: (req, res, next ) => {
        const { id } = req.params
        return res.status(200).json({ success: true, message : `user updated : ${id}`})
    },
    deleteUser: (req, res, next ) => {
        const { id } = req.params
        return res.status(200).json({ success: true, message : `deleted : ${id}`})
    },


}

//validate email
function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

module.exports = userController