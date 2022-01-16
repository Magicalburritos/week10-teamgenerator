const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generatePage = (data) => {
  const { manager, engineer, intern } = data;
  console.log(manager);
};
