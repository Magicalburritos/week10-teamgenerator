const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./page.js');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const teamMembers = [];

const promptManager = () => {
  if (!teamMembers.manager) {
    teamMembers.manager = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your Managers name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'please enter your Managers #id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter you Managers email address',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your Managers Office Number',
      },
    ])
    .then((answers) => {
      teamMembers.manager.push(answers);
    })
    .then(promptChoice);
};

// need a way to make mager let you ten select a new member and not finish
const promptChoice = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'please select one of the folloing',
        choices: ['Engineer', 'Intern', 'Finish'],
      },
    ])
    .then((answers) => {
      if (answers.choice === 'Engineer') {
        promptEngineer();
      }
      if (answers.choice === 'Intern') {
        promptIntern();
      }
      if (answers.choice === 'Finish') finish();
    });
};

const promptEngineer = () => {
  if (!teamMembers.engineer) {
    teamMembers.engineer = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter Engineers name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter Engineers ID Number',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter Engineers Email address',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter Engineers Github Username',
      },
    ])
    .then((answers) => {
      teamMembers.engineer.push(answers);
    })
    .then(promptChoice);
};
const promptIntern = () => {
  if (!teamMembers.intern) {
    teamMembers.intern = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter Interns name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter Interns ID Number',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter Interns Email address',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the School you attend',
      },
    ])
    .then((answers) => {
      teamMembers.intern.push(answers);
    })
    .then(promptChoice);
};
const finish = () => {
  const pageHtml = generatePage(teamMembers);
  fs.writeFile('./dist/page.html', pageHtml, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('page created!');

    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('css created!');
    });
  });
};

promptManager();
