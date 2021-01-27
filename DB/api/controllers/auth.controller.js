const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signUp(req, res) {
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    userModel
        .create({
            name: req.body.name,
            mail: req.body.mail,
            password: encryptedPasswd,
            checkID: req.body.checkID
        })
        .then(user => {
            const data = { mail: user.mail, name: user.name }
            const token = jwt.sign(data, process.env.SECRET /*{ expiresIn: '7d' }*/)
            res.status(200).json({ token: token, ...data })  
        })
        .catch(err => res.status(500).json(err))
}

function login(req, res) {
    userModel
    .findOne({ mail: req.body.mail})
    .then(user => {
        if (!user) {
            res.send('User not found')
            return;
        } else {
            const result = bcrypt.compareSync(req.body.password, user.password)
            if (result) {
                const data = { mail: user.mail, name: user.name }
                const token = jwt.sign(data, process.env.SECRET /*{ expiresIn: '7d' }*/)
                res.status(200).json({ token: token, ...data })              
            } else {
                res.send('Invalid credentials')
            }
        }
    })
}

module.exports = {
    signUp,
    login
}