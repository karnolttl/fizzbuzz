$(document).ready (function() {
  var $ul = $('body > ul');

  $('input').keyup(function (e) {
    if (e.keyCode == 13) {
      $('li').remove();
      var num = ValidateNum($(this).val());
      if (num)
        fizzbuzz(num);
      else
        (function(){
          $('p').append('<strong class="message" style="display:block; color:red">Invalid entry. Try again.</strong>');
          setTimeout(function() {
            $('.message').remove();
          }, 4000);
        })();
    } // if the enterkey is pressed
  });

  function ValidateNum(val) {
    console.log(val);
    if(/[0-9]+/.test(val) && Number(val) > 1){
      return Number(val);
    }
    return NaN;
}


  function fizzbuzz(len) {
    for(var i = 1; i <= len; i++){
    var result = '';
    if((i%3) == 0)
      result = 'fizz';
    if((i%5) == 0)
      result+= 'buzz'
    if(!result)
      result = i;
    $ul.append("<li>"+result+"</li>");
    }
  }
});
