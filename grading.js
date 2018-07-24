// - every student receives a grade from 0  to 100
// - any grade less than 40 is failing
// - If the difference between the grade 
//   and the next multiple of 5 is less than 3, 
//   round grade up to the next multiple of 5.
// - if the value of a grade is less than 38
//   there is no rounding

function gradingStudents(grades) {
    grades.forEach((grade, index, grades) => {
        if(grade < 38) return grade;
        grade % 5 != 0 && grade % 5 < 3 ? grade : grades[index] = Math.ceil(grade/5)*5; 
    })
  return grades;
}
