/**
 * Demonstration of UDP client in Nodejs
 */
const dgram = require('dgram');
const chalk = require('chalk');

const SERVER_PORT = 7071;

// creating a client socket
var client = dgram.createSocket('udp4');
const msgClient = "Hello Server";

client.on('message',function(msg,info){
 console.log(chalk.yellow(`Server(${info.address}:${info.port}) : ${msg.toString()}`));
});

//Sending message to server
client.send(msgClient, SERVER_PORT, 'localhost', function(error){
 if(error){
   client.close();
 }else{
   console.log(chalk.green("Client : " +'Data sent'));
  }
});