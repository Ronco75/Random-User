    'use strict';

     const onInit= () => {
        getUser();
    }
    
    const getUser = async (event) => {
        const res = await fetch('https://randomuser.me/api');
        const data = await res.json();
        const card = document.querySelector('#card');

        card.innerHTML = `
        <img src="${data.results[0].picture.large}" alt="" id="profile-img">
        <h1 id="name">${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h1>
        <div class="profile">
            <h3 id="email" class="grid-item"><i class="fa-solid fa-envelope"></i> ${data.results[0].email}</h3>
            <h3 id="username" class="grid-item"><i class="fa-solid fa-user"></i> ${data.results[0].login.username}</h3>
            <h3 id="location" class="grid-item"><i class="fa-solid fa-location-dot"></i> ${data.results[0].location.state} ${data.results[0].location.country} </h3>
            <h3 id="password" class="grid-item"><i class="fa-solid fa-key"></i> ${data.results[0].login.password}</h3>
        </div>
        <button class="btn" onClick="getUser(event)">Get User</button>
        `
        }
