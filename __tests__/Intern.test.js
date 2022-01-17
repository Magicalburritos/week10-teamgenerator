const Intern = require('../lib/Intern');
const intern = new Intern('joe', '24', 'hudakjoe@msn.com', 'uncc');

test('Employees constructor values', () => {
  expect(intern.name).toBe('joe');
  expect(intern.id).toBe('24');
  expect(intern.email).toBe('hudakjoe@msn.com');
});

test('test for getName() method', () => {
  expect(intern.getName()).toBe('joe');
});

test('test for getEmail() method', () => {
  expect(intern.getEmail()).toBe('hudakjoe@msn.com');
});

test('test for getId() method', () => {
  expect(intern.getId()).toBe('24');
});

test('test for getSchool() method', () => {
  expect(intern.getSchool()).toBe('uncc');
});

test('test for getRole() method', () => {
  expect(intern.getRole()).toBe('Intern');
});
