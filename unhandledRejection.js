const { m1, m2 } = require(`../utils/children.js`);

module.exports = {
  name: 'unhandledRejection',
  execute(code) {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  }
};