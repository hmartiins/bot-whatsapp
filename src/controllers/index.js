const { test, text1, text2 } = require('./texts/index.js');

function Test(msg){
  msg.reply(test);
}
function WhoAreYou(msg){
  msg.reply(text1);
}
function One(msg){
  msg.reply(text2);
}
module.exports = {
  Test,
  WhoAreYou,
  One
}
