const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const { WhoAreYou, One } = require('./controllers/index.js');
// const One = require('./controllers/one.js');

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('O Cliente está pronto');
});

client.on("disconnected", reason => {
  console.log('O Cliente foi desconectado !');
});

client.on('message', msg => {
  switch(msg.body){
    case '!teste':
      WhoAreYou(msg);
      break;
    case '.1':
      One(msg);
      break;
  }
});

client.initialize();