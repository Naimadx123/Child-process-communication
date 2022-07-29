// Module 1 just validates and send to Module 2

process.on('message', (m) => {
  if(m?.user && m?.server && m?.cmd){
    // Send to Module 2
    return process.send({pipeTo: 2, output: m})
  }
  else{
    // Output Error
    let err1 = []
    if(!m?.user) err1.push(`Provide user!`);
    if(!m?.server) err1.push(`Provide server!`);
    if(!m?.cmd) err1.push(`Provide cmd!`);
    return process.send({pipeTo: 0, err: `Error: ${err1.join(` AND `)}`})
  }
});