const fs=require('fs');

fs.writeFileSync('student.txt','Name : Siddhant\nRoll No : 1153\nBranch : CSE\nSemester : 3rd');
console.log('File created successfully');
const data=fs.readFileSync('student.txt','utf-8');
console.log(data);

fs.appendFileSync('student.txt','Subject : Full Stack Development\nMarks : 92\nAttendance : 85%');
console.log('File updated successfully');
const data1=fs.readFileSync('student.txt','utf-8');
console.log(data1);