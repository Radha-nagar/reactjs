// import{createServer} from 'http';
// import'dotenv/config';
// createServer((request,response)=>{
//     var x=4;
//     var y=6;    
//     var z=x+y;
//     response.write(`product of ${x} and ${y} is ${z}`);
//     response.end();
// }).listen(process.env.SERVER_PORT,()=>{
//    console.log(`sever is running of ${process.env.SERVER_PORT}`);
// });

// -----------------------------sum and product---------------------------------------
// import{createServer}from'http';
// import'dotenv/config';
// import {sum,product}from'./src/numberOperation.js';
// createServer((request,response)=>{
//         var x=4;
//         var y=6;    
//         var result1 =sum(x,y)
//         var result2 =product(x,y);
//         response.write(`multiplcation of ${x} and ${y} is ${result2} and addition of ${x} and ${y} is ${result1}`);
//         response.end();
// }).listen(process.env.SERVER_PORT,()=>{
//     console.log(`server is running at ${process.env.SERVER_PORT}`);
// });

// -------------------------------WRITEfIlesync------------------------------------------
// import{createServer}from'http';
// import 'dotenv/config';
// import {writeFileSync} from'fs';
// createServer((request,response)=>{
//     writeFileSync('file.txt','this is another file');
//     response.write('hello world');
// }).listen(process.env.SERVER_PORT,()=>{
//     console.log(`server is running at port ${process.env.SERVER_PORT}`);
// })

// -----------------------------------------WRITE FILE-----------------------------
// import { createServer } from 'http';
// import 'dotenv/config';
// import { writeFile } from 'fs';

// createServer((request, reponse) => {
//     writeFile('notes.txt', 'this is nodejs', () => {
//         console.log('writing into file completed');
//     });
//     console.log('after writing into file');

//     response.write("helo world");
//     response.end();
// }).listen(process.env.SERVER_PORT, () => {
//     console.log(`server is running at port ${process.env.SERVER_PORT}`);
// });

// ----------------------------------------readFile=----------------------------------------

// import{createServer} from 'http'
// import 'dotenv/config';
// import { readFile } from 'fs';

// createServer((request,response)=>{
//     readFile('notes.txt',(error,data)=>{
//         if(error){
//             console.log(error);
//         }else{
//             console.log(data.toString());
//         }
//     });
//     console.log('after reading a file');
//     response.write("hello world")
//     response.end()
// }).listen(process.env.SERVER_PORT,()=>{
//       console.log(`server is running at port ${process.env.SERVER_PORT}`);
// })

// let num=78029
// let max=0
// let remainder
// while(num>0)
// {
//     remainder=num % 10
//     if(max<remainder) 
//     {
//         max=parseInt(remainder);
//     }
//     num=num/10
// }
// console.log("maximum value of a number is",max);

// let num = 89
//  var n=num;
// let largest = 0
//  let smallest=9
// let sum = 0
// let a=0
// let b=0
// while (n> 0) {
//   var  remainder = n % 10;
//     if (largest < remainder) {
//         largest = parseInt(remainder);
//         a = largest
//     }
//      if (smallest > remainder) {
//         smallest= parseInt(remainder)
//         b = smallest
//     }
//      n = n / 10
//      n=parseInt(n)
// }
// sum = a + b

// console.log("largest amd smallest number is", sum);

