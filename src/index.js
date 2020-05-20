const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const { 
  WhoAreYou, 
  AnswerOne, 
  AnswerTwo, 
  AnswerThree,
  Test } = require('./controllers/index.js');

const client = new Client();

try {
  client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
  });
} catch (err) {
  console.log(err);
  console.log('\n\nTivemos um ao exibir o QrCode, tente reabrir o programa ');
  console.log('Caso o erro persista, comente ele em uma Issue no repositório do Github');
}

try {
  client.on('ready', () => {
    console.log('O Cliente foi conectado');
  });
} catch (err) {
  console.log(err);
  console.log('\n\nTivemos um erro para se conectar, tente reabrir o programa ');
  console.log('Caso o erro persista, comente ele em uma Issue no repositório do Github');
}

client.on('disconnected', () => {
  console.log('\n\nO Cliente foi desconectado !');
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
    case '.2':
      AnswerTwo(msg);
      break;
    case '.3':
      AnswerThree(msg);
      break;
  }
});

client.initialize();