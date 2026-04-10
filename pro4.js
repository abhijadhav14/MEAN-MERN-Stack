// Demonstrate file operations (Read/write/append) using Node.js file system module.
const fs = require('fs');

// Write to a file
fs.writeFile('Sample.txt', 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;
    console.log('File has been written.');
   
    // append to the file
    fs.appendFile('Sample.txt', '\nThis line is appended to the file.', (err) => {
        if (err) throw err;
        console.log('Content has been appended to the file.');
        
        // Read from the file
        fs.readFile('Sample.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content:\n' + data);
            
            // to copy the contents of one file to another file 
            fs.writeFile('CopyOfSample.txt', data, (err) => {
                if (err) throw err;
                console.log('File has been copied.');
                
                // to demonstrate rename a file and delete a file
                // Rename the file
                fs.rename('CopyOfSample.txt', 'RenamedSample.txt', (err) => {
                    if (err) throw err;
                    console.log('File has been renamed.');
                    
                    // Delete the original file 
                    fs.unlink('Sample.txt', (err) => {
                        if (err) throw err;
                        console.log('Original file has been deleted.');
                    });
                });
            });
        });
    });
});
