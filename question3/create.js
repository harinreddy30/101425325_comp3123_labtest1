//importing modules
const fs = require('fs');
const path = require('path');

//setting the path for logs
const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir); //create the directory if it doesn't exists
}

process.chdir(logsDir); //points the created directory
for (let i = 1; i <= 10; i++) { //For loop to create 10 files 
    const file = `log${i}.txt`;
    fs.writeFileSync(file, `Log file ${i}`);
    console.log(`Created file: ${file}`);
}
