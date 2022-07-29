// Module 2 executes things
var { exec } = require('node:child_process');

process.on('message', (m) => {
  let cmdArr = m.cmd.split(` `);
  let cmd = cmdArr.shift();
  if (cmd === `log`) {
    console.log(cmdArr.join(` `))
  }
  if (cmd === `ping`) {
    exec(`ping ${cmdArr[0]}`, (error, stdout, stderr) => {
      if (error) {
        return process.send({ pipeTo: 0, err: `exec error: ${error}`});
      }
      console.log(`stdout: ${stdout}`);
      process.send({ pipeTo: 0, err: `stderr: ${stderr}`});
    });
  }
  if (cmd === `ls`) {
    exec(`ls ${cmdArr[0] ? cmdArr[0] : ``}`, (error, stdout, stderr) => {
      if (error) {
        return process.send({ pipeTo: 0, err:`exec error:\n${error}`});
      }
    // Send output to main process
    process.send({ pipeTo: 0, output: `User ${m.user} on server ${m.server} execute: '${m.cmd}'.\n${stdout}`})
    });
  }
});