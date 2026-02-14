const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
inputBox.focus();

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
        inputBox.focus();

    }
            else{
                let li = document.createElement("li");
                let spanText = document.createElement("span")
                spanText.classList.add("text");
                spanText.innerHTML = inputBox.value;
                li.appendChild(spanText);
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.classList.add("delete");
                span.innerHTML = "&#10006;";
                li.appendChild(span);
                inputBox.focus();
            }
            inputBox.value = "";
            inputBox.focus();
            saveData();
}

listContainer.addEventListener("click", function(e){
if(e.target.classList.contains("text")){
    e.target.parentElement.classList.toggle("checked");
     inputBox.focus();

    saveData()
}
else if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
     inputBox.focus();
    saveData()
    console.log(e.target);
console.log(e.target.classList);
}
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
 function showTask(){
listContainer.innerHTML = localStorage.getItem("data");

 }
 showTask();




