const jwt = require('jsonwebtoken')
//should put in gitignore
SECRET_KEY = '123456'
const auth = {
    encode: (req, res, next) => {
        const payload = {
            username: req.body.username,
            password: req.body.password,    
        }
        //perform some db operation 
        //checking user
        const token = jwt.sign(payload, SECRET_KEY) 
        req.token = token
        next()
    },
    decode :(req, res, next) => {
        if(!req.headers['authorization']){
            return res.status(401).json({
                success: false,
                message: 'no token provided'
            })
        }
        //bearer auth.token
        try {
            const token = req.headers.authorization.split(' ')[1]//second part after bearer
            const decoded = jwt.decode(token, SECRET_KEY)
            req.information = decoded
            return next()
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'invalid auth token'
            })
        }
    }
}

module.exports = auth