/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//console.log(data);





function showPage(list, page) {

var itemsPerPage = 9; 

startIndex = (page * itemsPerPage) - itemsPerPage;

endIndex =(page * itemsPerPage);
//

console.log(startIndex);
console.log(endIndex);
   
   //var studentList = document.getElementsByClassName('student-list')[0];
   //var studentList = document.querySelector(".student-list");
   var studentList = document.querySelector('.student-list');

studentList.innerHTML = "";

for(var i = startIndex; i < endIndex && i < list.length  ; i++) {

   if(data[i]) {
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

//$('.student-list').append(studentItem);


//

studentList.insertAdjacentHTML("beforeend", studentItem);
//('.student-list').insertAdjacentHTML("beforeend", studentItem);
}
}

}
showPage(data, 4);

function addPagination(list){

   console.log(list);
   var itemsPerPage = 9;

   var numOfPages = Math.ceil(list.length/itemsPerPage);
   var linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";
for(var i = 1; i <= numOfPages; i++) {
   var button = 
   `
   <li><button type="button class="active">1</button></li>
   `


   linkList.insertAdjacentHTML("beforeend", button);
   linkList.addEventListener('click',(event) => {
      if(event.target.tagName === "BUTTON") {
     const previousActiveButton = linkList.querySelector('.active');


      }

   });



   };
}






addPagination(data);


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
