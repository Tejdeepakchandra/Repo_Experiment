const fs =require('fs');

fs.readFile('text.txt','utf8',(err, data) =>{
    if(err){
        console.log('error reading file : ',err);
    }
    else{
        console.log('File content: ',data);
    }
});