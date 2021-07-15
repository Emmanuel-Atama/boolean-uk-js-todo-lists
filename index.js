// Create an alert that lists all users, with their ids, names and what city they're from
console.log(users);
let userInfo = "";

for (let i = 0; i < users.length; i++) {
  const id = users[i].id;
  const name = users[i].name;
  const city = users[i].address.city;

  const row = `${id} | ${name} | ${city}\n`;

  userInfo = userInfo + row;

  console.log(userInfo);
}
alert(userInfo);

