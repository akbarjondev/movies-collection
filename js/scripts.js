// functions
var $_ = function(selector, node = document) {
	return document.querySelector(selector);
}

var $$_ = function(selector, node = document) {
	return document.querySelectorAll(selector);
}

// create new element
var createElement = function(newElName, elClass, elValue) {
	var elNewEl = document.createElement(newElName);
	elNewEl.classList.add(elClass);
	elNewEl.textContent = elValue;

	return elNewEl;
}

// variables
var elMoviesList = $_('.movies__list');
var movies = kinolar.splice(0, 50);


/*******************WITH FOR LOOP********************/
// for(var i = 0; i < movies.length; i++) {
// 	// create elements
// 	var elNewLi = document.createElement('li');
// 	elNewLi.classList.add('movies__item');

// 	var moviesName = document.createElement('h3');
// 	moviesName.classList.add('movies__name');
// 	moviesName.textContent = movies[i].title;

// 	var moviesActor = document.createElement('div');
// 	moviesActor.classList.add('movies__actor');
// 	moviesActor.textContent = movies[i].cast.join(', ');

// 	var moviesYear = document.createElement('p');
// 	moviesYear.classList.add('movies__year');
// 	moviesYear.textContent = movies[i].year;

// 	// append new els
// 	elNewLi.appendChild(moviesName);
// 	elNewLi.appendChild(moviesActor);
// 	elNewLi.appendChild(moviesYear);

// 	// append li element to ul
// 	elMoviesList.append(elNewLi);
// }

/*******************WITH FOR EACH AND CREATE ELEMENTS WITH FUNCTION********************/
// movies.forEach(function(movie) {
// 	// create elements
// 	var elNewLi = createElement('li', 'movies__item');

// 	var moviesName = createElement('h3', 'movies__name', movie.title);

// 	var moviesActor = createElement('div', 'movies__actor', movie.cast.join(', '));

// 	var moviesYear = createElement('p', 'movies__year', movie.year);

// 	// append new els
// 	elNewLi.appendChild(moviesName);
// 	elNewLi.appendChild(moviesActor);
// 	elNewLi.appendChild(moviesYear);

// 	// append li element to ul
// 	elMoviesList.append(elNewLi);	
// });

/*******************WITH FRAGMENT********************/
var fragmentBox = document.createDocumentFragment();

movies.forEach(function(movie) {
	// create elements
	var elNewLi = createElement('li', 'movies__item');

	var moviesName = createElement('h3', 'movies__name', movie.title);

	var moviesActor = createElement('div', 'movies__actor', movie.cast.join(', '));

	var moviesYear = createElement('p', 'movies__year', movie.year);

	// append new els
	fragmentBox.innerHTML = '';

	elNewLi.appendChild(moviesName);
	elNewLi.appendChild(moviesActor);
	elNewLi.appendChild(moviesYear);

	// append li element to ul
	fragmentBox.append(elNewLi);	
});

// append a ready fragmwntBox to the ul
elMoviesList.appendChild(fragmentBox);


/*******************WITH TEMPLATE********************/
