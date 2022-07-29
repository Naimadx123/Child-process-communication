const { m1, m2 } = require(`../utils/children.js`);

module.exports = {
  name: 'exit',
  execute(code) {
    console.log('Process exit event with code: ', code);
  }
};