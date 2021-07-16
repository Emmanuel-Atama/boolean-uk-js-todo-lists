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

// Prompt the user for a user id
prompt("Who's list do you want to view? (Use ID)");
let userId = 0;
//Alert user
for (let i = 0; i < todos.length; i++) {
const userIdRequest = todos[i].userId;
  // console.log(userIdRequest);
  // console.log("Index :", i)
  if (userIdRequest === userId) {
    userId = users[i].id;
  }
}
alert("Choose ID number between 1 - 10", +userId);
console.log(userId);
