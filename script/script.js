function addNewWEField(){
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("row",3);

	let weObj = document.getElementById("we");
	let weAddButton = document.getElementById("weAddButton");

	weObj.insertBefore(newNode, weAddButton);
}