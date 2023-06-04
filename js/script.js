
function showPage(list, page) {

var itemsPerPage = 9; 

var startIndex = (page * itemsPerPage) - itemsPerPage;

var endIndex = page * itemsPerPage;
var studentList = document.querySelector('.student-list');
studentList.innerHTML = "";

for(var i = 0; i < list.length; i++) {

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

studentList.insertAdjacentHTML("beforeend", studentItem);
}
}

}

function addPagination(list){

   var itemsPerPage = 9;

   var numOfPages = Math.ceil(list.length/itemsPerPage);
   var linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";
for(var i = 1; i <= numOfPages; i++) {
   var button = 
   `
   <li><button type="button">${i}</button></li>
   `;

   linkList.insertAdjacentHTML("beforeend", button);
}

var buttons = linkList.querySelectorAll("button");
buttons[0].classList.add("active");

linkList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    var clickedButton = event.target;
    var page = parseInt(clickedButton.textContent);

    var previousActiveButton = linkList.querySelector(".active");
    previousActiveButton.classList.remove("active");

    clickedButton.classList.add("active");

    showPage(list, page);
  }
});
}


console.log(data);
showPage(data, 1);
addPagination(data);