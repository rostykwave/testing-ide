import {
  calculateTotalRevenue,
  calculateTotalItems,
  calculateAverageRevenue,
  generateReport,
} from '../src/generateReport';

const sales = [
  { id: 1, productName: 'Laptop', price: 1000, quantity: 3 },
  { id: 2, productName: 'Mouse', price: 25, quantity: 10 },
  { id: 3, productName: 'Keyboard', price: 50, quantity: 5 },
];

const emptySales = [];

// Тести для функції calculateTotalRevenue
test('calculateTotalRevenue should return the correct total revenue', () => {
  expect(calculateTotalRevenue(sales)).toBe(3425);
});

test('calculateTotalRevenue should return 0 for empty sales', () => {
  expect(calculateTotalRevenue(emptySales)).toBe(0);
});

// Тести для функції calculateTotalItems
test('calculateTotalItems should return the correct total items', () => {
  expect(calculateTotalItems(sales)).toBe(18);
});

test('calculateTotalItems should return 0 for empty sales', () => {
  expect(calculateTotalItems(emptySales)).toBe(0);
});

// Тести для функції calculateAverageRevenue
test('calculateAverageRevenue should return the correct average revenue', () => {
  expect(calculateAverageRevenue(3425, 18)).toBeCloseTo(190.28);
});

test('calculateAverageRevenue should return 0 if total items is 0', () => {
  expect(calculateAverageRevenue(0, 0)).toBe(0);
});

// Тести для функції generateReport
test('generateReport should return a formatted report for valid sales data', () => {
  const expectedOutput = `Total Revenue: $3425.00\nTotal Items Sold: 18\nAverage Revenue per Item: $190.28`;
  expect(generateReport(sales)).toBe(expectedOutput);
});

test('generateReport should return a message for empty sales data', () => {
  expect(generateReport(emptySales)).toBe('No sales data available.');
});
