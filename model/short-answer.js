function ShortAnswer(name, answer, score) {
    Answer.call(this, name, answer, score);
}

ShortAnswer.prototype = Object.create(Answer.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function () {
  var element = $('#' + this.name);
  if(element && this.answer === element.value){
    this.currentScore += this.score;
  }
  return this.currentScore;
};
