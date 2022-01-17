const Engineer = require('../lib/Engineer');
const engineer = new Engineer('joe', '24', 'hudakjoe@msn.com', 'joehub');

test('Employees constructor values', () => {
  expect(engineer.name).toBe('joe');
  expect(engineer.id).toBe('24');
  expect(engineer.email).toBe('hudakjoe@msn.com');
});

test('test for getName() method', () => {
  expect(engineer.getName()).toBe('joe');
});

test('test for getEmail() method', () => {
  expect(engineer.getEmail()).toBe('hudakjoe@msn.com');
});

test('test for getId() method', () => {
  expect(engineer.getId()).toBe('24');
});

test('test for getGithub() method', () => {
  expect(engineer.getGithub()).toBe('joehub');
});

test('test for getRole() method', () => {
  expect(engineer.getRole()).toBe('Engineer');
});
