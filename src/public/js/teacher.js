let teacher = document.querySelector('.teacher-btn')
let group = document.querySelector('.group-btn')
let work = document.querySelector('.work-btn')

let tableStudent = document.querySelector('.table-student')
let tableGroup = document.querySelector('.table-group')
let tableWork = document.querySelector('.table-homework')


teacher.addEventListener('click', function (){
    teacher.classList.add('btn-before')
    group.classList.remove('btn-before')
    work.classList.remove('btn-before')

    tableStudent.classList.add('show')
    tableGroup.classList.remove('show')
    tableWork.classList.remove('show')

    window.localStorage.setItem('type', 'teacher')
})
group.addEventListener('click', function (){
    teacher.classList.remove('btn-before')
    group.classList.add('btn-before')
    work.classList.remove('btn-before')

    tableStudent.classList.remove('show')
    tableWork.classList.remove('show')
    tableGroup.classList.add('show')

    window.localStorage.setItem('type', 'group')
})
work.addEventListener('click', function (){
    teacher.classList.remove('btn-before')
    group.classList.remove('btn-before')
    work.classList.add('btn-before')

    tableStudent.classList.remove('show')
    tableGroup.classList.remove('show')
    tableWork.classList.add('show')

    window.localStorage.setItem('type', 'work')
})

let result = window.localStorage.getItem('type')
const test = ()=>{

    if(result == 'teacher'){
        teacher.classList.add('btn-before')
        group.classList.remove('btn-before')
        work.classList.remove('btn-before')

        tableStudent.classList.add('show')
        tableGroup.classList.remove('show')
        tableWork.classList.remove('show')
    }
    if(result == 'group'){
        teacher.classList.remove('btn-before')
        group.classList.add('btn-before')
        work.classList.remove('btn-before')

        tableStudent.classList.remove('show')
        tableWork.classList.remove('show')
        tableGroup.classList.add('show')

    }
    if(result == 'work'){
        teacher.classList.remove('btn-before')
        group.classList.remove('btn-before')
        work.classList.add('btn-before')

        tableStudent.classList.remove('show')
        tableGroup.classList.remove('show')
        tableWork.classList.add('show')
    }
}

test()