const { m1, m2 } = require(`../utils/children.js`);

module.exports = {
  name: 'message',
  execute(m) {
    if (m.pipeTo == 2) {
      m2.send(m.output);
    }
    else if (m.pipeTo == 0) {
      if (m.err) throw Error(m.err);
      console.log(m.output);
    }
    else if (m.pipeTo == 1) {
      if (m.err) throw Error(m.err);
      m2.send(m.output);
    }
    else {
      throw Error(`I cannot pipe this message! ${m.pipeTo} is unavailable!`);
    }
  },
};