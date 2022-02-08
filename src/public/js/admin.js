let teacher = document.querySelector('.teacher')
let student = document.querySelector('.student')
let group = document.querySelector('.group')
let course = document.querySelector('.course')
let qoshish = document.querySelector('.qoshish')
//table show
let tableTeacher = document.querySelector('.table-teacher')
let tableStudent = document.querySelector('.table-student')
let tableGroup = document.querySelector('.table-group')
let tableCours = document.querySelector('.table-cours')

teacher.addEventListener('click', function () {
    qoshish.setAttribute('data-bs-target', '#teacher')
    qoshish.setAttribute('aria-controls', 'teacher')
    qoshish.textContent = "O'qituvchi qo'shish ";

    teacher.classList.add('btn-before')
    student.classList.remove('btn-before')
    course.classList.remove('btn-before')
    group.classList.remove('btn-before')


    tableTeacher.classList.add('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.remove('show')
    tableCours.classList.remove('show')

    window.localStorage.setItem('type', 'teacher')
})
student.addEventListener('click', function () {
    qoshish.setAttribute('data-bs-target', '#student')
    qoshish.setAttribute('aria-controls', 'student')
    qoshish.textContent = "O'quvchi qo'shish";

    teacher.classList.remove('btn-before')
    student.classList.add('btn-before')
    course.classList.remove('btn-before')
    group.classList.remove('btn-before')

    tableTeacher.classList.remove('show')
    tableStudent.classList.add('show')
    tableGroup.classList.remove('show')
    tableCours.classList.remove('show')

    window.localStorage.setItem('type', 'student')
})
course.addEventListener('click', function () {
    qoshish.setAttribute('data-bs-target', '#course')
    qoshish.setAttribute('aria-controls', 'course')

    teacher.classList.remove('btn-before')
    student.classList.remove('btn-before')
    course.classList.add('btn-before')
    group.classList.remove('btn-before')

    qoshish.textContent = "Kurs qo'shish ";
    tableTeacher.classList.remove('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.remove('show')
    tableCours.classList.add('show')
    window.localStorage.setItem('type', 'course')
})
group.addEventListener('click', function () {
    qoshish.setAttribute('data-bs-target', '#group')
    qoshish.setAttribute('aria-controls', 'group')
    qoshish.textContent = "Guruh qo'shish ";

    teacher.classList.remove('btn-before')
    student.classList.remove('btn-before')
    course.classList.remove('btn-before')
    group.classList.add('btn-before')

    tableTeacher.classList.remove('show')
    tableStudent.classList.remove('show')
    tableGroup.classList.add('show')
    tableCours.classList.remove('show')

    window.localStorage.setItem('type', 'group')
})

let result = window.localStorage.getItem('type')
const test = ()=>{

    if(result == 'teacher'){
        qoshish.setAttribute('data-bs-target', '#teacher')
        qoshish.setAttribute('aria-controls', 'teacher')
        qoshish.textContent = "O'qituvchi qo'shish ";

        teacher.classList.add('btn-before')
        student.classList.remove('btn-before')
        course.classList.remove('btn-before')
        group.classList.remove('btn-before')


        tableTeacher.classList.add('show')
        tableStudent.classList.remove('show')
        tableGroup.classList.remove('show')
        tableCours.classList.remove('show')
    }

    if(result == 'student'){
        qoshish.setAttribute('data-bs-target', '#student')
        qoshish.setAttribute('aria-controls', 'student')
        qoshish.textContent = "O'quvchi qo'shish";
    
        teacher.classList.remove('btn-before')
        student.classList.add('btn-before')
        course.classList.remove('btn-before')
        group.classList.remove('btn-before')
    
        tableTeacher.classList.remove('show')
        tableStudent.classList.add('show')
        tableGroup.classList.remove('show')
        tableCours.classList.remove('show')
    }
    if(result == 'course'){
        qoshish.setAttribute('data-bs-target', '#course')
        qoshish.setAttribute('aria-controls', 'course')

        teacher.classList.remove('btn-before')
        student.classList.remove('btn-before')
        course.classList.add('btn-before')
        group.classList.remove('btn-before')

        qoshish.textContent = "Kurs qo'shish ";
        tableTeacher.classList.remove('show')
        tableStudent.classList.remove('show')
        tableGroup.classList.remove('show')
        tableCours.classList.add('show')
    }
    if(result == 'group'){
        qoshish.setAttribute('data-bs-target', '#group')
        qoshish.setAttribute('aria-controls', 'group')
        qoshish.textContent = "Guruh qo'shish ";

        teacher.classList.remove('btn-before')
        student.classList.remove('btn-before')
        course.classList.remove('btn-before')
        group.classList.add('btn-before')

        tableTeacher.classList.remove('show')
        tableStudent.classList.remove('show')
        tableGroup.classList.add('show')
        tableCours.classList.remove('show')
    }
}
test()