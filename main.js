var newColor = $('.color-here');
var changeColorBtn = $('.change-color');
var currrentColor = localStorage.getItem('color') || '#000000';

changeColorBtn.on("click", changeColor);
/*changeColor();*/

checkColor();

function checkColor() {
  if(localStorage.length > 0) {
    newColor.css('backgroundColor', localStorage.getItem('color'));
    $('.color').val(localStorage.getItem('color'));
  }
}


function changeColor(event) {
  event.preventDefault();
  var color = $('.color').val();
  // newColor.append(`<p>${color}</p>`);
  newColor.css('backgroundColor', color);
  localStorage.setItem('color', color);
  console.log(localStorage.color);
}
