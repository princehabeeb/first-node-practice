const fs = require('fs');

//read files
// fs.readFile('./blogs/blog1.txt', (err, data) => {
//    if (err) {
//     console.log(err);
//    }
//    console.log(data.toString());
// } );


//write file
// fs.writeFile('./blogs/blog2.txt', 'Hello Mal. Abbas', (err) => {
//    if (err) {
//     console.log(err);
//    }

//    console.log('text written succesfully');
// })

//creating folder


if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
           console.log(err);
        }
        console.log('folder created successfully');
       });
}else{
    fs.rmdir('./assets', (err) => {
        if (err) {
           console.log(err);
        }
        console.log('folder removed successfully');
       });  
}





