// Create an alert that lists all users, with their ids, names and what city they're from
console.log(users)
let userInfo = ""

for (let i = 0; i < users.length; i++) {
  const id = users[i].id
  const name = users[i].name
  const city = users[i].address.city

  const row = `${id} | ${name} | ${city}\n`;

  userInfo = userInfo + row

  console.log(userInfo)
}
alert(userInfo);
// Prompt user for a username using users
const selectedUserId = prompt("Who's ID number do you want to view?")
let usernames =""
for (let i = 0; i < users.length; i++) {
const username = users[i].username
const rowUsername = username + `\n`
usernames = usernames + rowUsername
}


// Prompt user for a user title using todos

let userIdentity = ""
for (let i = 0; i < todos.length; i++) {
const title = todos[i]
if (parseInt(title.id===selectedUserId.id)){
  userIdentity.push(title)
}
}


// \link both thr username and title together
const usernameAndTitle = usernames + userIdentity;
alert (usernameAndTitle);
