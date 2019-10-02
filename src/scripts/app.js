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
    };
  .catch((err) => colnsole.log(error.message));
};

for (let i = 0; i < users.length; i++) {
  const users = () => {

  };

    const show = () => {
        // show users
    };
}

users();

// localstorage