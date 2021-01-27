const jwt = require ('jsonwebtoken');
const AdminModel = require ('../models/admin.model');

function authAdmin (req, res, next) {
    if(!req.headers.token) {
        res.status(500).send('Error during authentication')
    } else {
        jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
            if(err){
                res.status(500).send('Error during authentication, try again')
            } else {
                AdminModel
                    .findOne({ mail: token.mail})
                    .then(admin => {
                        res.locals.user = admin
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
    authAdmin
};