const { 
  test, 
  text1, 
  answer1,
  answer2,
  answer3 
} = require('./texts/index.js');

function Test(msg){
  msg.reply(test);
}
function WhoAreYou(msg){
  msg.reply(text1);
}
function AnswerOne(msg){
  msg.reply(answer1);
}
function AnswerTwo(msg){
  msg.reply(answer2);
}
function AnswerThree(msg){
  msg.reply(text4);  
}
module.exports = {
  Test,
  WhoAreYou,
  AnswerOne,
  AnswerTwo,
  AnswerThree
}
