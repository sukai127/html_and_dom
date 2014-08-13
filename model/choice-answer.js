function ChoiceAnswer(name, answer, score) {
    Answer.call(this, name, answer, score);
}

ChoiceAnswer.prototype = Object.create(Answer.prototype);

ChoiceAnswer.prototype.constructor = ChoiceAnswer;

ChoiceAnswer.prototype.getScore = function () {

  var elements = $('.' + this.name + ' input');
  for(var i = 0; i < elements.length; i++){
    var isOk = elements[i].checked && (elements[i].value === this.answer);
    if(isOk){
      this.currentScore += this.score;
    }
  }
  return this.currentScore;
}
