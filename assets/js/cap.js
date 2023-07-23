filterSelection("ALL") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("coloumn");
  if (c == "ALL") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "SHOW");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "SHOW");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("clickbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// let list = document.querySelectorAll('.btn');
// let itemBox = document.querySelectorAll('.itemBox');

// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     for (let j = 0; j < list.length; j++) {
//       list[j].classList.remove('active');
//     }
//     this.classList.add('active');


//     let dataFilter = this.getAttribute('data-filter');

//     for (let k = 0; k < itemBox.length; k++) {
//       itemBox[k].classList.add('active');
//       itemBox[k].classList.add('hide');

//       if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
//         itemBox[k].classList.add('hide');
//         itemBox[k].classList.add('active');
//       }
//     }
//   })
// }

// $(document).ready(function () {

//   $(window).scroll(function () {
//     var postop = $(document).scrollTop();
//     console.log(postop);

//   });
// });