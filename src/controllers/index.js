const { text1 } = require('./texts/index.js');

module.exports = function WhoAreYou(msg){
  msg.reply(text1);
};
