//importing modules
const fs = require('fs'); 
const path = require('path'); 

// Setting the path for the 'Logs' directory to search later
const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    try {
        // Reads all files in the directory
        fs.readdirSync(logsDir).forEach(file => {
            console.log(`Deleting file: ${file}`);
            // Deletess the file
            fs.unlinkSync(path.join(logsDir, file));
        });

        fs.rmdirSync(logsDir); //Deletes the directory
        console.log(`Logs directory deleted.`);
    } catch (error) {
        console.error(`Error while deleting files or directory: ${error.message}`);
    }
} else {
    console.log(`Logs directory does not exist.`);
}
