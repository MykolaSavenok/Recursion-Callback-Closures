// Closures
function createCalc(n) {
   return function (num) {
      return n + num;
   }
};

const calcFive = createCalc(5);
const calcTen = createCalc(10);

console.log(calcFive(23));
console.log(calcTen(45));


function urlGenerator(domain) {
   return function (url) {
      return `https//${url}.${domain}`
   };
};

const comUrl = urlGenerator('com');
console.log(comUrl('google'));


// Recursion
let i = 0;
let out = '';

function Recursion() {
   i++;
   out = out + i + ', ';
   if (i >= 20) return;
   Recursion();
};

Recursion();

console.log(out);



// Callback
const array = [1, 4, 2, 7, 15];

function mutFuncion(arr, myFunc) {
   arr[3] = arr[3] * 2;
   myFunc(arr);
};

function callback(arr) {
   let outs = '';
   for (let i = 0; i < arr.length; i++) {
      outs = outs + arr[i] + '-';
   }
   console.log(outs);
};

mutFuncion(array, callback);
/////////////////////////


document.querySelector('.btn').addEventListener('click', () => {
   getUserName(fixUserName);
});


function getUserName(fixFunc) {
   const UserName = document.querySelector('.input').value;
   console.log(fixFunc(UserName));
};

function fixUserName(str) {
   return str.trim().toLowerCase();
};
/////////////////////////////////////////

