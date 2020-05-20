const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const { WhoAreYou, AnswerOne, Test } = require('./controllers/index.js');

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('O Cliente está pronto');
});

client.on('disconnected', reason => {
  console.log('O Cliente foi desconectado !');
});

client.on('message', msg => {
  switch(msg.body){
    case '!ping':
      Test(msg);
      break;
    case '!teste':
      WhoAreYou(msg);
      break;
    case '.1':
      AnswerOne(msg);
      break;
  }
});

client.initialize();