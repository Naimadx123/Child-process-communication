const cp = require('node:child_process');

const m1 = cp.fork('./children/module1.js', [], {
  timeout: 10000,
})

const m2 = cp.fork('./children/module2.js', [], {
  timeout: 10000,
});

module.exports = { m1, m2 }