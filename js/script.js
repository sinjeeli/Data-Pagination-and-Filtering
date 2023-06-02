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
   
   var studentList = document.getElementsByClassName("student-list");


studentList.innerHTML = "";

for(var i = startIndex; i < endIndex && i < list.length  ; i++) {

   var student = list[i];

var studentItem = `
<li class="student-item cf">
<div class="student-details">
  <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
  <h3>Ethel Dean</h3>
  <span class="email">ethel.dean@example.com</span>
</div>
<div class="joined-details">
  <span class="date">Joined 12-15-2005</span>
</div>
</li>
`;
//

studentList.insertAdjacentHTML('beforeend', studentItem);
//console.log(list);
//console.log(page);

}

}
//
showPage(data, 1);


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
