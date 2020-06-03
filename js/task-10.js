import users from '../users.js';

const getSortedUniqueSkills = users =>
  users.reduce((calc, user) => {
    user.skills.forEach(skill => {
      if (!calc.includes(skill)) {
        calc.push(skill);
      }
    });

    calc.sort();

    return calc;
  }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
