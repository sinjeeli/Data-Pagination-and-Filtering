
function showPage(list, page) {
  //function to display the page

var itemsPerPage = 9; 

var startIndex = (page * itemsPerPage) - itemsPerPage;
var endIndex = page * itemsPerPage;
//calculations for start and end index
var studentList = document.querySelector('.student-list');
studentList.innerHTML = "";
// select the UL element with a class of student-list and assign it to a new variable named studentList.
//Now set the innerHTML property of the studentList variable to an empty string.


for(var i = 0; i < list.length; i++) {
//conditional statement that checks if i is greater than or equal to the startIndex variable and less than the endIndex variable. 

   if(i >= startIndex && i < endIndex) {
var studentItem = `
<li class="student-item cf">
<div class="student-details">
  <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
  <h3>${data[i].name.first} ${data[i].name.last}</h3>
  <span class="email">${data[i].email}</span>
</div>
<div class="joined-details">
  <span class="date">${data[i].registered.date}</span>
</div>
<div class="anything">
  <span class="age">${data[i].registered.age}</span>
</div>
</li>
`;
//DOM elements needed to display the student at that index, which we will assign to a variable named studentItem


studentList.insertAdjacentHTML("beforeend", studentItem);
}
}
//insert it into the DOM on the studentList variable using the insertAdjacentHTML method and beforeend position.


}

function addPagination(list){
  //function named addPagination that will create and display our pagination buttons


   var itemsPerPage = 9;

   var numOfPages = Math.ceil(list.length/itemsPerPage);
   //variable named numOfPages, which will calculate the number of pagination buttons we will need.

   var linkList = document.querySelector(".link-list");
   //select the UL element with a class of link-list and assign it to a new variable named linkList


   linkList.innerHTML = "";
   // set the innerHTML property of the linkList variable to an empty string

for(var i = 1; i <= numOfPages; i++) {
  // set the innerHTML property of the linkList variable to an empty string
  // The loop should run until i is less than or equal to numOfPages.
   var button = 
   `
   <li><button type="button">${i}</button></li>
   `;
   //DOM elements needed to display the pagination button


   linkList.insertAdjacentHTML("beforeend", button);
   //insert it into the DOM on the linkList variable using the insertAdjacentHTML method and beforeend position

}

var buttons = linkList.querySelectorAll("button");
buttons[0].classList.add("active");
//add the active class to the first button


linkList.addEventListener("click", function(event) {
  //event listener on linkList that will be called when there is a click event.
  if (event.target.tagName === "BUTTON") {
    var clickedButton = event.target;
    //add the active class to the button that was clicked (i.e. the click target).
    var page = parseInt(clickedButton.textContent);
    //event listener on linkList that will be called when there is a click event.

    var previousActiveButton = linkList.querySelector(".active");
    //querySelector to select the first element with a class of active and then set the className property to an empty string.

    previousActiveButton.classList.remove("active");

    clickedButton.classList.add("active");

    showPage(list, page);
    //call the showPage function passing the list parameter and the text content of the click target as arguments. 

  }
});
}

console.log(data);
showPage(data, 1);
addPagination(data);