const input = document.querySelector('#fruit');
const searchWrapper = document.querySelector('.search-container');
const inputBox = document.querySelector('input');
const suggestionBox = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let inputData = str.target.value;
	let results = [];

	if (inputData) {
		results = fruit.filter((data) => {
			return data.toLowerCase().includes(inputData.toLowerCase());
	});
		results = results.map((data) => {
			return data = '<ul>' + data + '</ul>';
	})
		console.log(results);
		searchWrapper.classList.add("active");
		showSuggestions(results);
		let allList = suggestionBox.querySelectorAll('ul');
		for (let i = 0; i < allList.length; i++) {
			allList[i].setAttribute('onclick', 'useSuggestion(this)');
		};
	}
}

function showSuggestions(list) {
	let listData;
	if(!list.length) {
		userValue = inputBox.value;
		listData = '<ul>' + userValue + '</ul>';
	} else {
		listData = list.join('');
	}
		suggestionBox.innerHTML = listData;
}

function useSuggestion(e) {
	let selectInputData = e.textContent;
		inputBox.value = selectInputData;
}

input.addEventListener('keyup', search);

// The function search(str) triggers based on the event listener below. It returns a list called results. if(inputData) allows for the filtering of the fruit list based on the user's input. toLowerCase ensures that the search is not hindered by upper case or lower case letters.

// function showSuggestions(list) populates the drop-down menu with array of const fruit

// function useSuggestion(e) enables user to populate the search bar with whatever fruit was clicked/selected from the drop-down menu

// input.addEventListener creates an event for key strokes, enabling the suggested fruits containing each key.
