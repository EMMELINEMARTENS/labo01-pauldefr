/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import '../styles/main.css';

/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < 10; i++) {
    const users = () => {
      // getting data
      fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((err) => err.message);
    };
  
    const show = () => {
      // show users
    };
  }
  
  users();
  
  // localstorage