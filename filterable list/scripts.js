// This script will match the text we input with the contact list everytime we type a letter.
// The whole string will be compared so letter order is taken into consideration

//Get Input Element
let filterInput = document.getElementById('filterInput');
//Get Clear Input Button
let clear = document.getElementById('clearButton');
//Add event Listener
filterInput.addEventListener('keyup', filterNames);
//add event listener to clear button
clear.addEventListener('click', clearInput);

function filterNames() {     
	//Get Value of Input     
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	//Get Names ul
	let names = document.getElementById('names');
	// Get Items li
	let li = names.querySelectorAll('li.collection-item');
	// Loop Through collection-item li
	for(let i = 0; i < li.length; i++){
		let a = li[i].getElementsByTagName('a')[0];
		console.log(filterValue);
		//if mateched
		//changed innerHTML to textContent/innerText to strip html tags before comparing
		if(a.innerText.toUpperCase().indexOf(filterValue) > -1){
			//if there is a match, its greater than -1 and contact should be displayed
			li[i].style.display = '';
		}else{
			//if -1 theres no match and contact shouldn't be displayed
			li[i].style.display = 'none';
		}
	}
	//check if clear button should be displayed
	displayClear();
}

function displayClear() {
	//if there is any text in input, show clear button
	if(filterInput.value.length > 0){
		clear.className = 'clearable_clear';
	}else{
	//else, hide button
		clear.className = 'clearable_clear hide';
	}
}



function clearInput(){
	//remove all text input
	filterInput.value = '';
	//reset contact list and clear button state
	filterNames();
}