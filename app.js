var todayDate = new Date().toDateString();
var dateBox = document.getElementById("dateBox");
dateBox.innerHTML = todayDate;

var input = document.getElementById("add");
var list = document.getElementById("todolist");
function addItem() {
    if (input.value) {
        var liElem = document.createElement('li'); // let's create an empty list element
    var liText = document.createTextNode(input.value); // let's capture input value
    var liCheck = document.createElement('input'); // let's add a checkbox 
    var liDel = document.createElement('button'); // let's add a button to delete
    var liDelText = document.createTextNode('❌'); // let's assign delete button a value
    var liEdit = document.createElement('button'); // let's add a button to edit
    var liEditText = document.createTextNode('✏️'); // let's assign edit button a value
    liCheck.setAttribute("type", "checkbox"); // let's set attr to input
    liDel.setAttribute("onclick", "del(this)"); // let's add onclick event to delete
    liEdit.setAttribute("onclick", "edit(this)"); // let's add onclick event to edit
    liElem.appendChild(liCheck); // let's put li text
    liElem.appendChild(liText); // let's put li text
    liDel.appendChild(liDelText); // let's put delete text under button
    liEdit.appendChild(liEditText); // let's put edit text under the button
    liElem.appendChild(liDel); // let's put delete button under element
    liElem.appendChild(liEdit); // let's put edit button under element
    list.appendChild(liElem); // let's put the li inside the UL
    input.value = ""; // let's empty the input value
}
}
function deleteAll() {
    list.innerHTML = ""; // let's emptify the inner html of the ul
}
function del(x) {
    x.parentNode.remove(); // let's remove the li itself
}
function edit(e) {
    e.parentNode.childNodes[1].nodeValue = prompt('Enter new ToDo'); // let's assign the new value to the li
}