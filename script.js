/*alert("you are here to signup!");
//JavaScript, the window object represents the browser window containing the DOM document and acts as the global execution context for client-side JavaScript. Any global variable or function you create automatically becomes a property or method of the window object console.log in window object
document.body.style.background="black";//also work in inspect
//sync in js */
//SYNCRONOUS MEANS SYNC ME CHALE PELA EK CODE ECULE HO PHR DOOSRA CODE EXCUTE HO *ASYNCRONOUS PROGRAMING MEANS KI HAMRE PASS PICHLE WALA CODE EXCUTE KRNE ME LATE KRTA HE TO HUM IOSE ECUTING KRN ME CHOR KE AGE WALA CHALA DON 
//callbacks 
function sum(a,b){
 console.log("a+b=" , a+b);
};
function calculator(a,b,callback){
  callback(a,b);
};
calculator(2 , 3 , sum);
const hello=( ) =>{
  console.log("helloeveryone i am tired")
};
setTimeout(hello , 1000);


//callbak hell ot  praymid of doom