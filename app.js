/*
Name: 		  Note app
Date Created: Feb 11, 2018
Date Updated: Feb 
Description : 
*/

console.log('Starting app.js');
// 1. require
// to login module fs and os, and import a file
const fs = require('fs');
// const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
	console.log('Adding new note');
} else if (command === 'list') {
	console.log('Listing all notes');
	} else if (command === 'read') {
	console.log('Reading note');
} else if(command === 'remove'){
	console.log('Removing note');
} else {
	console.log('Command not recognized');
}
// console.log(process.argv);
// fs.appendFileSync('greetings.txt', 'Hello world!');
// console.log(_.isString(true));
// console.log(_.isString('Sojin'));
// var filteredArray = _.uniq(['Jenny']);
// console.log(filteredArray);
// var res = notes.addNote();
// console.log(res);
// console.log(notes.add(2,5));
// var user = os.userInfo();
// fs.appendFile('greetings.txt', 'Hello' + user.username + '!');
// ES6
// fs.appendFile('greetings.txt', `Hello ${notes.age}!`);


