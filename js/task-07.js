import users from '../users.js';

const calculateTotalBalance = users =>
  users.reduce((calc, user) => calc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
