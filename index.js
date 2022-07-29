const { m1, m2 } = require(`./utils/children.js`);
const path = require(`path`);
const fs = require(`fs`);

// Example message for demonstration purposes

m1.send({ user: `102123123`, server: `124124124`, cmd: `ls` });


// events

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  m1.on(event.name, (...args) => event.execute(...args));
  m2.on(event.name, (...args) => event.execute(...args));
}