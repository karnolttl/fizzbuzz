$(document).ready (function() {
  var $ul = $('body > ul');
  for(var i = 1; i <= 100; i++){
    var result = '';
    if((i%3) == 0)
      result = 'fizz';
    if((i%5) == 0)
      result+= 'buzz'
    if(!result)
      result = i;
    $ul.append("<li>"+result+"</li>");
  }
});
