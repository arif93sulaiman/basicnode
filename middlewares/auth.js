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
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60 }) 
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
        const token = req.headers.authorization.split(' ')
        try {
            const decoded = jwt.decode(token)
            req.information = decoded
            next()
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'invalid auth token'
            })
        }
    }
}

module.exports = auth