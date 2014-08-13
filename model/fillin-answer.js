function FillInAnswer(name,answer,score){
  Answer.call(this,name,answer,score);
}

FillInAnswer.prototype= Object.create(Answer.prototype);
FillInAnswer.prototype.constructor = FillInAnswer;

FillInAnswer.prototype.getScore = function(){

  var check = function(element,answers,temp){

    var isExist = false;
    _(temp).forEach(function(t){
      isExist = element.value === t;
    });

    if(isExist){
      return false;
    }

    _.forEach(answers,function(answer){
      if(answer === element.value){
        temp.push(element.value);
        isExist = true;
      }
    });
    return isExist;
  };

  var temp = [];
  for(var i = 0; i < this.answer.length; i++){
    var element = $('#' + this.name + "_" + (i+1))[0];
    if(check(element,this.answer,temp)){
      this.currentScore += this.score;
    }
  }
  return this.currentScore;
};
