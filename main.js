var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'python',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'php',
        coin: 0
    },
    {
        id: 5,
        name: 'java',
        coin: 0
    }
]

function courseHandler(course, index){
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
        index: index
    }
}


var newCourses = courses.map(courseHandler)

console.log(newCourses)
