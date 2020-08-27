//  the id ="" is how you will connect the HTML to the JS

let nameInputElement = document.getElementById("nameInput");

let  nameElement = document.getElementById("name");
var buttonElement = document.getElementById("updateButton");

buttonElement.addEventListener("click", function(){
    var newName = nameInputElement.value;
     nameElement.innerHTML = newName;
});