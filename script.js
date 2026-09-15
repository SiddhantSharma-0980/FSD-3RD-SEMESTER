const fs = require('fs');
// Create/Write
fs.writeFileSync('student.txt' , 'B.Tech Node.js Lab');
// Read
const data = fs.readFileSync('student.txt', 'utf8');
console.log(data);

//write
fs.writerFileSync('student.txt', 'Name: Siddhant\nSubject: Full Stack Development');

console.log('File cretaed Succesfully');



