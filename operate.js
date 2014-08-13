$(document).ready(function(){

  $('#submitBtn').on('click',function(){
    check();
    return false;
  });
});

var url = location.href;
function operate(){
  var score = getTotalScore();
  var result = document.getElementById("score");
  result.innerHTML = score;
  $('#totalScore')[0].classList.add('text-danger');
  location.href = url + '#top';
  return false;
}

function getTotalScore(){
  var answers = loadAllAnswers();
  var sum = 0;
  _.forEach(answers,function(answer){
    sum += answer.getScore();
  });
  return sum;
}


function check(){
  var checker = ['cls','num','name'];
  for(var i = 0; i < checker.length; i++){
    var element = $('#'+checker[i])[0];
    var isOk = element.value === "";
    if(isOk){
      return showError(checker[i]);
    }
  }
  operate();
  return false;
}

function showError(check){
  $('#'+check + '_text').addClass('has-error');
  $('#myModal').modal({
    keyboard: false
  });
  location.href = url + '#top';
  return false;
}

function loadAllAnswers(){
    return [
        new FillInAnswer('ans_1_1', ['统一建模语言'], 5),
        new FillInAnswer('ans_1_2', ['封装性', '继承性', '多态性'], 5),
        new ChoiceAnswer('ans_2_1', 'B', 10),
        new ChoiceAnswer('ans_2_2', 'A', 10),
        new MultipleChoiceAnswer('ans_3_1', 'ABD', 10),
        new MultipleChoiceAnswer('ans_3_2', 'ABC', 10),
        new ChoiceAnswer('ans_4_1', 'X', 10),
        new ChoiceAnswer('ans_4_2', 'V', 10),
        new ShortAnswer('ans_5_1',
            '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。',
            20)
    ];
}

function change(element){
  $('#'+element.id + '_text').removeClass('has-error');
}
