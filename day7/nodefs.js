// const fs=require('fs')
// fs.readFile("commands.txt","utf-8",(err,data)=>{
//     if(err)return console.log(err);
//     else console.log(data);
// })

const fs=require('fs')
fs.unlink("./day7/one",(err)=>{
    if(err)return console.log(err);
    else console.log("deleted");
})

