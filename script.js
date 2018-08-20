var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementById("samplelistitem");
var delBTNo = document.getElementsByClassName("delBTN");

function inputLength() {
	return input.value.length;
}

function makeId() {
	var textId = "";
	var possible = "ABCDEF0123456789";
	for (var i = 0; i < 16; i++) {
		textId += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return textId;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li).setAttribute("id", makeId());
	ul.appendChild(li).setAttribute("class", "none");
	input.value = "";
	createDeleteButton(li);
}

function createDeleteButton(li) {
	var delBTN = document.createElement("button");
	delBTN.appendChild(document.createTextNode("Delete Item"));
	li.appendChild(delBTN);
	li.appendChild(delBTN).setAttribute("class", "delBTN");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneItem(event){
	var itemListID = event.target.id;
	if (event.target.type != "submit"){
		document.getElementById(itemListID).classList.toggle("done");
	}
}

function deleteItem(event){
	if(event.target.type == "submit"){
		var delElement = event.target.parentElement;
		delElement.parentNode.removeChild(delElement);
	}
}

createDeleteButton(li);

ul.addEventListener("click", toggleDoneItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", deleteItem);