function MultipleChoiceAnswer(name, answer, score) {
    Answer.call(this, name, answer, score);
}

MultipleChoiceAnswer.prototype = Object.create(Answer.prototype);

MultipleChoiceAnswer.prototype.constructor = MultipleChoiceAnswer;

MultipleChoiceAnswer.prototype.getScore = function () {

  var temp = '';
  var elements = $('.' + this.name + ' input');
  _.forEach(elements,function(element){
    if(element.checked){
      temp += element.value;
    }
  });

  if(temp === this.answer){
    this.currentScore += this.score;
  }
  return this.currentScore;
};
