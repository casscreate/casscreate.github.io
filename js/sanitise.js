var originSafe = false;
var regionSafe = false;
var notesSafe = false;
var producerSafe = false;
var altitudeSafe = false;
var infoSafe = false;//CHANGE
function checkInput(el){
  var submit = document.getElementById('formSubmit');
  var x = el.value;
  // console.log(x)
  switch(el.name){
    case 'Origin':
      if (x.length > 22 || x.length == null || x.length == 0) {
        originSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        originSafe = true;
      }
      break;
    case 'Region':
      if (x.length > 27 || x.length == null || x.length == 0) {
        regionSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        regionSafe = true;
      }
      break;
    case 'Notes':
      if (x.length > 224 || x.length == null || x.length == 0) {
        notesSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        notesSafe = true;
      break;
      }
    case 'Producer':
      if (x.length > 27 || x.length == null || x.length == 0) {
        producerSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        producerSafe = true;
      break;
      }
    case 'Altitude':
      if (x.length > 27 || x.length == null || x.length == 0) {
        altitudeSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        altitudeSafe = true;
      break;
      }
    case 'Info':
      if (x.length > 224 || x.length == null || x.length == 0) {
        infoSafe = false;
        submit.disabled = true;
        //add colour for the input
      } else {
        infoSafe = true;
      break;
      }
    }
  if (originSafe == true && regionSafe == true && notesSafe == true && producerSafe == true && altitudeSafe == true && infoSafe == true){
    submit.disabled = false;
  }
}
function addHandlers(){
  // var submit = document.getElementById('formSubmit');
  // submit.disabled = false //CHANGE
  document.addEventListener('keyup', function (event) {
    var inputTarg = event.target;
    checkInput(inputTarg);
  });
//   var inputs = document.getElementsByTagName('input');
//   for(var i = 0; i < inputs.length; i++) {
//     console.log('hi')
//     if(inputs[i].type.toLowerCase() == 'text') {
//         inputs[i].addEventListener('keyup', checkInput(inputs[i]));
//     }
// }
}
