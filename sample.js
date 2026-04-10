const fs=require('fs');
fs.writeFile('sample.txt','This is a sample text file created using Node.js', (err)=>{
    if(err) throw err;
    console.log('File has been created successfully.');


fs.appendFile('sample.txt','\nThis line is appended to the file.', (err)=>{
    if(err) throw err;
    console.log('Content appended successfully.');


fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log('File content:');
    console.log(data);
});
});
});

//program to copy text from one file to another file

const fs=require('fs');
fs.readFile('source.txt','utf8',(err,data)=>{
    if(err) throw err;      
    fs.writeFile('destination.txt',data,(err)=>{
        if(err) throw err;
        console.log('File has been copied successfully.');
    });
});

//to demonstrate the renaming and deleting of files

const fs=require('fs');
fs.rename('oldname.txt','newname.txt',(err)=>{
    if(err) throw err;
    console.log('File has been renamed successfully.');
});
fs.unlink('fileToDelete.txt',(err)=>{
    if(err) throw err;
    console.log('File has been deleted successfully.');
}); 

