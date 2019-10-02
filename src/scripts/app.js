/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import '../styles/main.css';

/* eslint-disable-next-line no-plusplus */
// getting data
//verbeteringen Emmeline
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
  }
}

// localstorage

const saveInStorage = (users) => {
  const storageUsers = JSON.parse(localStorage.getItem('users'));
};

localStorage.setItem('users', JSON.stringify(storageUsers.concat(users)));