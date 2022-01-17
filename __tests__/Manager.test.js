const Manager = require('../lib/Manager');
const manager = new Manager('joe', '24', 'hudakjoe@msn.com', '999-888-7766');

test('Manager constructor values', () => {
  expect(manager.name).toBe('joe');
  expect(manager.id).toBe('24');
  expect(manager.email).toBe('hudakjoe@msn.com');
  expect(manager.officeNumber).toBe('999-888-7766');
});

test('test for getName() method', () => {
  expect(manager.getName()).toBe('joe');
});

test('test for getEmail() method', () => {
  expect(manager.getEmail()).toBe('hudakjoe@msn.com');
});

test('test for getId() method', () => {
  expect(manager.getId()).toBe('24');
});

test('test for getOfficeNumber() method', () => {
  expect(manager.getOfficeNumber()).toBe('999-888-7766');
});

test('test for getRole() method', () => {
  expect(manager.getRole()).toBe('Manager');
});
