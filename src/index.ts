type Student = {
  name: string;
  grades: number[];
};

// function calculateAverageGrade(students: Student[]) {
//   let totalGrades = 0;
//   let totalStudents = 0;

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].grades && students[i].grades.length > 0) {
//       for (let j = 0; j < students[i].grades.length; j++) {
//         totalGrades += students[i].grades[j];
//       }
//       totalStudents++;
//     }
//   }

//   if (totalStudents > 0) {
//     return totalGrades / totalStudents;
//   } else {
//     return 0;
//   }
// }

///

function getValidStudents(students: Student[]): Student[] {
  return students.filter(
    (student) => student.grades && student.grades.length > 0,
  );
}

function calculateTotalGrades(student: Student): number {
  return student.grades.reduce((totalGrades, grade) => totalGrades + grade, 0);
}

function calculateAverageGrade(students: Student[]): number {
  const validSudents = getValidStudents(students);

  if (validSudents.length === 0) return 0;

  const totalGrades = validSudents.reduce(
    (sum, student) => sum + calculateTotalGrades(student),
    0,
  );
  return totalGrades / validSudents.length;

  //   let totalGrades = 0;
  //   let totalStudents = 0;

  //   for (let i = 0; i < students.length; i++) {
  //     if (students[i].grades && students[i].grades.length > 0) {
  //       for (let j = 0; j < students[i].grades.length; j++) {
  //         totalGrades += students[i].grades[j];
  //       }
  //       totalStudents++;
  //     }
  //   }

  //   if (totalStudents > 0) {
  //     return totalGrades / totalStudents;
  //   } else {
  //     return 0;
  //   }
}

export { calculateAverageGrade, getValidStudents, calculateTotalGrades };
