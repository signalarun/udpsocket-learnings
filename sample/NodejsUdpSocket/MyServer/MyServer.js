/**
 * Demonstration of UDP server in Nodejs
 */

 const dgram = require('dgram');
 const chalk = require('chalk');
 const SERVER_PORT = 7071; // Localhost port
 
 const server = dgram.createSocket('udp4');
 const msgServer = "Hello client";

 server.on('message', (msg, senderInfo) => {
  console.log(chalk.yellow('Client : ' + msg));
  server.send(msgServer, senderInfo.port, senderInfo.address, ()=>{ console.log(chalk.green(`Message sent to ${senderInfo.address}:${senderInfo.port}`) )});
  //sendContinousData(senderInfo); uncomment for sending data continously
 });

 server.on('error', (err) => {
    console.log(chalk.red(`server error:\n${err.stack}`));
    server.close();
 });
 
 server.on('listening', () => {
  const address = server.address();
  console.log(chalk.green(`Listening on : ${address.address}:${address.port}`));
 });

 server.bind(SERVER_PORT);

/**
 * Sending data continously to clients at mentioned interval
 * @param {*} senderInfo 
 */ 
function sendContinousData(senderInfo){
   setInterval(()=>{server.send(msgServer, senderInfo.port, senderInfo.address, ()=>{ console.log(chalk.green(`Message sent to ${senderInfo.address}:${senderInfo.port}`) )})},500);
}