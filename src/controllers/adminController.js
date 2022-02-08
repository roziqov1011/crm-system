const FS = require('../lib/fsDeal')
const user = new FS('../model/users.json')
const course = new FS('../model/courses.json')
const groups = new FS('../model/groups.json')
const allUsers = JSON.parse(user.read())
const allCourse = JSON.parse(course.read())
const allGroups = JSON.parse(groups.read())

module.exports = {
    ADMINPOST : (req, res) =>{
        if(req.body.role == "teacher"){
            const {username, role,phoneNumber,course} = req.body
    
            allUsers.push({id:allUsers.length + 1, username,role, password:phoneNumber, course,phoneNumber })
            console.log(allUsers);
            user.write(allUsers)
        }
        if(req.body.role == "student"){
            const {username, role,phoneNumber,course,teacherName,groupName} = req.body
    
            allUsers.push({id:allUsers.length + 1, username,role, password:phoneNumber, course,phoneNumber,teacherName,groupName })
            user.write(allUsers)
        }
        if(req.body.role == "course"){
            const {coursName,teacherName} = req.body
    
            allCourse.push({id:allCourse.length + 1, coursName,teacherName})
            course.write(allCourse)
        }
        if(req.body.role == "group"){
            const {groupName,courseName,teacherName} = req.body
    
            allGroups.push({id:allGroups.length + 1, groupName,courseName,teacherName})
            groups.write(allGroups);
            // console.log(allGroups);
        }

        res.redirect('/admin')
    }
}

