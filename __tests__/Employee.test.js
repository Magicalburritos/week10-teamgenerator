const Employee = require('../lib/Employee');
const employee = new Employee('joe', '24', 'hudakjoe@msn.com');

test('Employees constructor values', () => {
  expect(employee.name).toBe('joe');
  expect(employee.id).toBe('24');
  expect(employee.email).toBe('hudakjoe@msn.com');
});

test('test for getName() method', () => {
  expect(employee.getName()).toBe('joe');
});

test('test for getEmail() method', () => {
  expect(employee.getEmail()).toBe('hudakjoe@msn.com');
});

test('test for getId() method', () => {
  expect(employee.getId()).toBe('24');
});

test('test for getRole() method', () => {
  expect(employee.getRole()).toBe('Employee');
});
