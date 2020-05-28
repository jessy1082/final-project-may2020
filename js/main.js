function fn1() {
  var select = document.getElementById("ddselect");
  //console.log(select.options[select.selectedIndex].value)
  //var selected = select.options[select.selectedIndex].value
  var selected = select.selectedIndex
  if (selected === 1) { //redirect to Arroz Con Pato
    window.document.location = './Ingredients.html';
  } else if (selected === 2) {
    window.document.location = './Ingredients2.html';
  } else if (selected === 3) {
    window.document.location = './Ingredients3.html';
  } else {
    console.log('choose another')
  }
}

//1st Dish
var btn = document.getElementById("myBtnIng");
btn.onclick = function () {
  window.document.location = './Ingredients.html';
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtnVideo");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//2nd Dish
var btn2 = document.getElementById("myBtnIng2");
btn2.onclick = function () {
  window.document.location = './Ingredients2.html';
}

// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn2a = document.getElementById("myBtnVideo2");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal 
btn2a.onclick = function () {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//3rd Dish
var btn3 = document.getElementById("myBtnIng3");
btn3.onclick = function () {
  window.document.location = './Ingredients3.html';
}

// Get the modal
var modal3 = document.getElementById("myModal3"); // video
// Get the button that opens the modal
var btn3a = document.getElementById("myBtnVideo3");// button
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];
// When the user clicks the button, open the modal 
btn3a.onclick = function () {
  modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}