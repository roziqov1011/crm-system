const {
    signUser,
    verifyUser
} = require('../lib/jwt')
const {
    SECRET_KEY
} = require('../config')
const FS = require('../lib/fsDeal')
const user = new FS('../model/users.json')

module.exports = (req, res, next) => {
    try {
        const {
            username,
            password
        } = req.body

        const allUsers = JSON.parse(user.read())
        const foundUser = allUsers.find(e => e.username == username && e.password == password)
        if (!foundUser) {
            res.status(401).send('<h2>malumotlar onboridan topilamdingiz</h2>')
        } else {
            let token = signUser({
                id: foundUser.id,
                name: foundUser.username,
                role:foundUser.role
            })
            res.cookie("token", token)
            req.body = foundUser
            next()
        }
    } catch (err) {
        console.log(err);
    }

}