const adminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function adminSignUp(req, res) {
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    adminModel
        .create({
            name: req.body.name,
            mail: req.body.mail,
            password: encryptedPasswd
        })
        .then(admin => {
            const data = { mail: admin.mail, name: admin.name }
            const token = jwt.sign(data, process.env.SECRET) //al ser admin, quizá cambiar el pass cada x días
            res.status(200).json({ token: token, ...data})
        })
        .catch(err => res.status(500).send('Invalid credentials'))
}

function adminLogin(req, res) {
    adminModel
        .findOne({ mail: req.body.mail})
        .then(admin => {
            if(!admin){
                res.send('Unauthorized')
                return;
            } else {
                const pw = bcrypt.compareSync(req.body.password, admin.password)
                    if(pw){
                        const data = { mail: admin.mail, name: admin.name}
                        const token = jwt.sign(data, process.env.SECRET)
                        res.status(200).json({ token: token, ...data})
            } else {
                res.send('Invalid credentials')
            }
        }
    })
}

module.exports = {
    adminSignUp,
    adminLogin
}