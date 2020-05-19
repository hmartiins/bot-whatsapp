const { Client } = require('whatsapp-web.js');

const client = new Client();

module.exports = async function WhoAreYou(msg){
  msg.reply(`
    Olá meu nome é Henrique Martins, sou estudante de desenvolvimento de sistemas
    na Etec de Peruíbe. Atualmente você está conversando com um bot que eu
    programei hahah, mas calma ai, deixei umas opções de falas com o bot bem 
    bacaninhas para vc testar, taca lhe pau ent. 
    \n\n
    [1] * Com o que esse bot foi desenvolvido ?  
  `);
};

client.initialize();
