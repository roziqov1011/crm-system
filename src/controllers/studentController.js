const FS = require('../lib/fsDeal')
const {verifyUser} = require('../lib/jwt')
const homeWork = new FS('../model/homework.json')
const groups = new FS('../model/groups.json')
const allHomeWork = JSON.parse(homeWork.read())

module.exports = {
    SRUDENTRPOST : (req, res) =>{
        const token = req.cookies.token
            const verifyToken = verifyUser(token);
            const {homeWorkName, textarea,group} = req.body
            allHomeWork.push({id:allHomeWork.length + 1, name:homeWorkName,izoh:textarea, groupName:group,teacherName: verifyToken.name})
            homeWork.write(allHomeWork)
            console.log(allHomeWork);
        res.redirect('/teacher')
    }
}

