let dataUser = [
  {
    id: Math.round(Math.random() * 1000),
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg',
    firstName: 'Tony',
    lastName: 'Nguyen',
    email: 'tony@gmail.com',
    role: 'operator',
    password: '123456',
    gender: 'Male',
  },
  {
    id: Math.round(Math.random() * 1000),
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg',
    firstName: 'Do',
    lastName: 'Duong',
    email: 'demo@gmail.com',
    role: 'operator',
    password: '123456',
    gender: 'Male',
  },
  {
    id: Math.round(Math.random() * 1000),
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg',
    firstName: 'Nguyen',
    lastName: 'Van',
    email: 'demo1@gmail.com',
    role: 'operator',
    password: '123456',
    gender: 'Female',
  },
];

let listUser = document.getElementById('list-user');
let itemUser = listUser.querySelector('tbody');

// Show list user
function renderListUser(data = []) {
  itemUser.innerHTML = '';

  data.forEach((ele) => {
    itemUser.innerHTML += `
      <tr>
        <th scope="row">${ele.id}</th>
        <td>${ele.firstName}</td>
        <td>${ele.lastName}</td>
        <td>${ele.email}</td>
        <td>${ele.gender}</td>
        <td>
          <button class="btn btn-primary delete-user" onclick="deleteUser(${ele.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

renderListUser(dataUser);

// Add new user
const getFormUser = document.querySelector('.user-form form');

getFormUser.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  const newItemUser = {
    id: Math.round(Math.random() * 1000),
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/009d272e2b496aa0758a86a17eac5f7716a99133_full.jpg',
    firstName,
    lastName,
    email,
    role: 'operator',
    password: '123456',
    gender,
  };

  const newDataUser = [...dataUser, newItemUser];
  dataUser.push(newItemUser);

  renderListUser(newDataUser);
});

// Delete user
function deleteUser(idUser) {
  const itemUserIndex = dataUser.findIndex((ele) => ele.id === idUser);
  if (itemUserIndex !== -1) {
    dataUser.splice(itemUserIndex, 1);
  }

  renderListUser(dataUser);
}
