const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        // empty input box
        alert("You cannot leave this blank!")
    }
    else{
        let listItem = document.createElement("li") // create list item element
        listItem.innerHTML = inputBox.value // set input value 
        listContainer.appendChild(listItem) // add to the list
        let span = document.createElement("span") 
        span.innerHTML = "\u00d7";
        listItem.appendChild(span)
    }
    inputBox.value = ""; // clear input box
    saveData()
}

listContainer.addEventListener("click", function(mouse){
    let tagName = mouse.target.tagName
    if(tagName === "LI"){
        mouse.target.classList.toggle("checked");
    }
    else if(tagName === "SPAN"){
        mouse.target.parentElement.remove();
    }
    saveData()
}, false);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask()
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData()