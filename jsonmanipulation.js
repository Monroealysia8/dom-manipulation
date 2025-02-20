"use strict";

const user = '{"name": "Bob", "age": "23", "email": "bob@email.com"}';

const parsedUser = JSON.parse(user);

console.log(parsedUser);

const stringData = JSON.stringify(parsedUser);

console.log(stringData);







