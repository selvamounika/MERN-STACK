// const fs=require("fs")
// fs.writeFile("sample.txt","created a file using fs",(err)=>{})
// fs.appendFile("sample.txt","\nThis is a new file",(err)=>{})
// fs.readFile("sample.txt","utf8",(err,data)=>{
//     console.log(data);
// })
//fs.unlink("sample.txt",(err)=>{});
//read error handling
// try{
// fs.readFile("sample.tt","utf8",(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })
// }
// catch(err)
// {
//     console.log(err.message);
// }
// process.on("uncaughtException",(err)=>
// {
//     console.log(err.message);
    
// })
// fs.mkdir("folder",(err)=>{})
// fs.rmdir("folder",(err)=>{})
// fs.readFile("file.txt","utf8",(err,data)=>{
//     console.log(data)
// })
// console.log("WELCOME TO THE WORLD")
//fs.writeFile("firstfile.txt","FIRSTFILE DATA",()=>{})
//fs.appendFile("firstfile.txt","\nfirst appended",()=>{})
//fs.readFile("firstfile.txt","utf8",(err,data)=>{ console.log(data)})
//handling asynchonous behaviour
// fs.writeFile("firstfile.txt","FIRSTFILE DATA",()=>{
// fs.appendFile("firstfile.txt","\nfirst appended",()=>{
//     fs.readFile("firstfile.txt","utf8",(err,data)=>{ 
//         console.log(data)
//     })
// })
// })
// fs.writeFileSync("firstfile.txt","firstfile")
// fs.appendFileSync("firstfile.txt","first appended")
// const read=fs.readFileSync("firstfile.txt","utf8")
// console.log(read);
// const fs = require('fs');

// const currentDateTime = new Date().toLocaleString();

//  fs.writeFileSync("task.txt","",()=>{})

// fs.appendFileSync("task.txt",  (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log(    `Appended current date and time: ${currentDateTime}`);
//     }
// });

