const { cookie } = require("express/lib/response");
const FS = require('../lib/fsDeal')
const user = new FS('../model/users.json')
const courses = new FS('../model/courses.json')
const groups = new FS('../model/groups.json')
const homework = new FS('../model/homework.json')
const { signUser, verifyUser} = require('../lib/jwt')
const allUsers = JSON.parse(user.read())
const allCourses = JSON.parse(courses.read())
const allGroups = JSON.parse(groups.read())
const allHomework = JSON.parse(homework.read())
module.exports = {
    LOGIN: (req, res)=>{
         try {
            res.render('login')
        } catch (err){
            console.log(err);
        }
    },
    LOGINPOST: (req,res)=>{
        try {
            const {role} = req.body
            console.log(role);

                if(role == 'admin'){
                    res.redirect('admin')
                }
                if(role == 'teacher'){
                 res.redirect('teacher')
                 }
                 if(role == 'student'){
                     res.redirect('student')
                 }
         
       } catch (err){
           console.log(err);
       }
   },
    
    ADMIN:(req, res)=>{
        try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const d = verifyUser(token);
            if(d && d.role == 'admin') {
                const foundTeacher = allUsers.filter((e) => e.role == 'teacher')
                res.render('admin',{allUsers, allCourses,allGroups,allHomework,foundTeacher});
            }else{
                res.redirect('/')
            }
        } catch(err) {
            res.status(401).send({
                msg: "Invalid token"
            })
        }

    },
    TEACHER:(req, res)=>{
        try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const d = verifyUser(token);
            if(d && d.role == 'teacher') {
                const foundStudent = allUsers.filter((e) => e.teacherName == d.name)
                
                const foundGroups = allGroups.filter((e) =>e.teacherName == d.name)
                const foundWork = allHomework.filter((e) =>e.teacherName == d.name)
                res.render('teacher',{ foundStudent,foundGroups,allCourses,allHomework,allGroups,foundWork});
            }else{
                res.redirect('/');
            }
        } catch(err) {
            res.status(401).send({
                msg: "Invalid token"
            })
        }
        
    },
    STUDENT:(req, res)=>{
         try{
            const token = req.cookies.token
            if(!token){
                res.redirect('/')
            } 
            const d = verifyUser(token);
            if(d  && d.role == 'student') {
                const foundStudent = allUsers.find((e) => e.username == d.name)
                const foundHomeWork = allHomework.filter((e)=> e.groupName == foundStudent.groupName)
                res.render('student',{foundStudent,foundHomeWork});
            }else{
                res.redirect('/');
            }
        } catch(err) {
            res.status(401).send({
                msg: "Invalid token"
            })
        }
        res.render('student')
    }
}