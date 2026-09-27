let inputField = document.getElementById("inputfield");
let addBtn = document.getElementById("addTask");
let listContainer = document.querySelector(".listContainer");

addBtn.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("Please Enter a Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;

    let span = document.createElement("span");
    span.innerHTML = "Remove";

    li.appendChild(span);
    listContainer.appendChild(li);
  }
});

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
});