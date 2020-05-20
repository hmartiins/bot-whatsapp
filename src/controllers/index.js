const { 
  test, 
  text1, 
  text2,
  text3 
} = require('./texts/index.js');

function Test(msg){
  msg.reply(test);
}
function WhoAreYou(msg){
  msg.reply(text1);
}
function AnswerOne(msg){
  msg.reply(text2);
}
function AnswerTwo(msg){
  msg.reply(text3);
}
module.exports = {
  Test,
  WhoAreYou,
  AnswerOne,
  AnswerTwo,
}
