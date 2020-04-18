studentNames = ['Ron', 'Fred', 'George'];
for (let i = 0; i < 3; i++){
    const name = prompt('enter a name');
    studentNames.push(name);
}

for (let i = 0; i < studentNames.length; i++){
    const student = studentNames[i];
    console.log(student); //alert(student);<-use this instead of console.log to run it and have the names popup at the end via the html activity 3 provided
}
// for whatever reason the terminal i use (mac) to run my javascript will not allow prompts()