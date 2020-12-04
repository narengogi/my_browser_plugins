const queryString = window.location.search;

const urlparams = new URLSearchParams(queryString);

if (urlparams.has('q')) {
	let searchQuery = urlparams.get('q');
	let googleSearch = 'https://www.google.com/search?gl=IN&q=' + searchQuery;
	//window.open();
	window.location.open(googleSearch);
}
