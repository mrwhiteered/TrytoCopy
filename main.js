 window.onload = function() {
      var text2 = "All text on this page cannot be copied. But you can try)"
    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo";
      document.getElementById('no-copy').innerHTML = text;
      document.getElementById('title').innerHTML = text2;
      };



// Запрет на правую кнопку мыши 
document.addEventListener('contextmenu', event => event.preventDefault());

// запрет на открытие панели разрабочтиков, запрет на использование горячих клавиш 
// document.addEventListener('keydown', function(event) {
//   if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73 || event.keyCode === 123 || 
//     (event.ctrlKey && event.keyCode=== 67) || (event.metaKey && event.key === "c") ) {
//     event.preventDefault(); // Prevent the default action of opening the developer panel
//     // alert('copy disabled'); // Display a warning message
//   }
// }); 


document.addEventListener('keydown', function(event) {
if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73){
 event.preventDefault(); // Prevent the default action of opening the developer panel
   
   // f12
} else if (event.keyCode === 123) {
  event.preventDefault();
 
} else if(event.ctrlKey && event.keyCode=== 67) {
event.preventDefault();

// print
} else if (event.ctrlKey && event.key === "p") {
    event.preventDefault(); // Prevent the default behavior of opening the page source
     // Display a custom message
  } 
  // open another page with code 
  else if (event.ctrlKey && event.key === "u") {
    event.preventDefault(); // Prevent the default behavior of opening the page source
    // dev tools
  } else if (event.metaKey && event.key === "i") {

  }
 


});


window.addEventListener("devtoolschange", function(event) {
 
  // Alternatively, you could redirect the user to another page:
  window.location.href = "https://example.com/";
});

document.addEventListener("keydown", function(event) {
  if (event.metaKey && event.altKey ) {
    event.preventDefault(); // Prevent the default behavior of opening the developer panel
    alert("Мак у тебя круто, но что дальше то?"); // Display a custom message
  }
});
