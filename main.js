console.log("started,,,,");
// get the form element with id "addForm"
let form = document.getElementById("addForm");
// get the ul element with id "items"
let items = document.getElementById("items");
// get the search element with id 'filer'
let filter = document.getElementById("filter");


// form 'submit' event
form.addEventListener("submit", addItem);
// remove item on 'click' of delete btn
items.addEventListener('click', removeItem);
// filter item on 'keyup' after typing into search box
filter.addEventListener('keyup', filterItems);


// addItem functionality
function addItem(e) {
    e.preventDefault();

    // get input value
    let newItem = document.getElementById("item").value;

    // create new li element
    let newLi = document.createElement('li');
    newLi.className = "list-group-item";
    // add a textNode to newli
    newLi.appendChild(document.createTextNode(newItem));

    // adding a delete btn to this list item
    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm float-end delete";
    delBtn.appendChild(document.createTextNode('X'));

    // add delBtn to newLI
    newLi.appendChild(delBtn);

    // adding newLi to original item List
    items.appendChild(newLi);

    // console.log(newLi);
}

// remove item functionality
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure ?")) {
            let li = e.target.parentElement;   // taking parent of delete btn
            items.removeChild(li);
        }
    }
    // console.log("btn clicked");
}


// remove item functionality
function filterItems(e) {
    // get text from Search box
    let searchText = e.target.value.toLowerCase();

    // getting all the li elements
    let lists = document.querySelectorAll('li');

    lists.forEach(item => {
        let itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.startsWith(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}