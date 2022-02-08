const express = require('express')
const  roter = express.Router()
const {LOGIN, ADMIN, TEACHER, STUDENT, LOGINPOST} = require('./authControlle')
const {ADMINPOST} = require('./adminController')
const {TEACHERPOST} = require('./teacherController')
const authRole = require('../middleware/authRole')


roter
.get('/',LOGIN)
.post('/',authRole, LOGINPOST)
.get('/admin',ADMIN)
.post('/admin',ADMINPOST)
.get('/teacher',TEACHER)
.post('/teacher',TEACHERPOST)
.get('/student',STUDENT)


module.exports=roter