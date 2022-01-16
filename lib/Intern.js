const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
  }
  getSchool() {
    return;
  }
  getRole() {
    return Intern;
  }
}
