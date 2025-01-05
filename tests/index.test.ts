// const students = [
//   { name: 'Alice', grades: [85, 90, 78] },
//   { name: 'Bob', grades: [60, 70] },
//   { name: 'Charlie', grades: [] },
//   { name: 'David', grades: [95] },
// ];

import {
  calculateAverageGrade,
  getValidStudents,
  calculateTotalGrades,
} from '../src/index';

test('calculateAverageGrade calculates the correct average', () => {
  const students = [
    { name: 'Alice', grades: [85, 90, 78] },
    { name: 'Bob', grades: [60, 70] },
    { name: 'Charlie', grades: [] },
    { name: 'David', grades: [95] },
  ];

  expect(calculateAverageGrade(students)).toBe(80);
});

test('getValidStudents filters out students without grades', () => {
  const students = [
    { name: 'Alice', grades: [85, 90, 78] },
    { name: 'Bob', grades: [] },
  ];
  const filteredStudents = [{ name: 'Alice', grades: [85, 90, 78] }];

  expect(getValidStudents(students)).toEqual(filteredStudents);
});

test('calculateTotalGrades sums up grades correctly', () => {
  const student = { name: 'Alice', grades: [85, 90, 78] };
  expect(calculateTotalGrades(student)).toBe(253);
});
