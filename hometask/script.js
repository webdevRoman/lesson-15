var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var myList = document.getElementById("list");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementsByClassName("close")[0];

// console.log(story);
// console.log(popup);
// console.log(close);

function addItem() {
	var newItem = document.createElement("li");
	newItem.innerHTML = "Новая задача!";
	newItem.className = "item";
	myList.appendChild(newItem);
	popup.style.display = "none";
}

function delItem() {
	myList.removeChild(story[0]);
	if (story.length == 0) {
		popup.style.display = "block";
	}
}

function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);