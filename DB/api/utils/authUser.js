const jwt = require ('jsonwebtoken');
const UserModel = require ('../models/users.model');

function authUser (req, res, next) {
    if(!req.headers.token) {
        res.status(500).send('Error during authentication')
    } else {
        jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
            if(err){
                res.status(500).send('Error during authentication, try again')
            } else {
                UserModel
                    .findOne({mail : token.mail})
                    .then(user => {
                        res.locals.user = user // corregir
                        next();
                    })
                    .catch(err => {
                        res.status(500).send('Authentication failed');
                    })
            }
        })
    }
}

module.exports = {
    authUser
};