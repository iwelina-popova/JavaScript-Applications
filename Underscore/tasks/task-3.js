/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    return function (students) {
        var matchedStudent = _.chain(students)
            .map(function (student) {
                var marksSum = 0,
                    marksCounter = student.marks.length;

                _.each(student.marks, function (mark) {
                    marksSum += mark;
                });

                student.fullname = student.firstName + ' ' + student.lastName;
                student.averageMark = marksSum / marksCounter;
                return student;
            })
            .sortBy('averageMark')
            .last()
            .value();

        console.log(matchedStudent.fullname + ' has an average score of ' + matchedStudent.averageMark);
    };
}

module.exports = solve;
