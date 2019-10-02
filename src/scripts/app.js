/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import '../styles/main.css';

/* eslint-disable-next-line no-plusplus */
// getting data
// verbeteringen Emmeline
const fetchfunc = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) =>  {
      console.log(data);
      UsersCreated(data.results);
    })
    .catch((err) => console.log(error.message));
};

function UsersCreated(users) {
  for (let i = 0; i < users.lengt; i++) {
    const user = users[i];

    const ul = document.createElement('ul');
    ul.id = 'user';

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navul = document.createElement('navul');

    const image = document.createElement('img');
    image.className = 'profpic';

    const profname = document.createElement('li');
    profname.id = 'name';
    const age = document.createElement('li');
    age.id = 'age';
    const residence = document.createElement('li');
    residence.id = 'residence';
    const country = document.createElement('li');
    country.id = 'country';

    // buttons
    const likebutton = document.getElementById('like');
    const dislikebutton = document.getElementById('dislike');
    const navbutton = document.getElementById('check');

    likebutton.addEventListener('click', function() {

    

    // innerHTML


    // add to our app container
    app.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(navul);
    app.appendChild(ul);
    ul.appendChild(image);
    ul.appendChild(profilename);
    ul.appendChild(age);
    ul.appendChild(residence);
    ul.appendChild(country);
    app.appendChild(likebutton);
    app.appendChild(dislikebutton);
  }
}

// localstorage

const saveInStorage = (users) => {
  const storageUsers = JSON.parse(localStorage.getItem('users'));
};

localStorage.setItem('users', JSON.stringify(storageUsers.concat(users)));
const onSwipeClick = () => {
    swipeCounter += 1;
    if (swipeCounter % 10 === 9)fetchfunct().
}