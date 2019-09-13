"use strict";

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.averageMark = function() {
    let total = getArrayItemsSum(this.marks);
    let average = total / this.marks.length;
    return Math.floor(average * 100) / 100;
}

function getArrayItemsSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
};

function averageGroupMark(students) {
    const total = students.reduce((sum, student) => sum + student.averageMark(), 0);

    return total / students.length;

}

const students = [ 
    new Student('Student 1', [10,9,8,0,10]),
    new Student('Student 12', [10,0,8,0,3,4])
];