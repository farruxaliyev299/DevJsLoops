//#region Task 1
// const A = parseInt(prompt(`Enter the value of A `));

// for (let i = 1; i < 1000; i++) {
//     if(i % A === 0){
//         console.log(i);
//     }
// }
//#endregion

//#region Task 2
// const A = parseInt(prompt(`Enter the value of A `));

// for (let i = 1; (i*i) < A; i++) {
//     console.log(i);
// }
//#endregion

//#region Task 3
// const A = parseInt(prompt(`Enter the value of A `));

// let max = 0;

// for (let i = 0; i < A; i++) {
//     if(A % i === 0){
//         max = i;
//     }
// }

// console.log(max);
//#endregion

//#region Task 4
// const A = parseInt(prompt(`Enter the value of A `));
// const B = parseInt(prompt(`Enter the value of B `));

// let sum = 0;

// if(B > A){
//     for (let i = A; i < B; i++) {
//         if(i % 7 === 0){
//             sum += i;
//         }
//     }
// }
// else{
//     for (let i = B; i < A; i++) {
//         if(i % 7 === 0){
//             sum += i;
//         }
//     }
// }

// console.log(sum);
//#endregion

//#region Task 5
// let N = 0;
// do {
//     N = parseInt(prompt(`Enter the positive value of N `));

//     if(N <= 0){
//         alert(`Value of N must be positive!`)
//     }
// } while (N <= 0);

// let previousOne = 0;
// let previousTwo = 1;

// let count = 2;

// if(N === 1){
//     console.log(previousOne);
// }
// else if(N === 2){
//     console.log(previousTwo);
// }
// else{
//     while(count < N){
//         let temp = previousOne + previousTwo;
    
//         previousOne = previousTwo;
//         previousTwo = temp;
    
//         count++;
//     }

//     console.log(previousTwo);
// }
//#endregion

//#region Task 6
// const A = parseInt(prompt(`Enter the value of A `));
// const B = parseInt(prompt(`Enter the value of B `));

// let first = 1;
// let second = 1;

// let remainder = 0;

// if(A > B){
//     first = A;
//     second = B;
// }
// else{
//     first = B;
//     second = A;
// }

// let count = 1;

// while (first !== 0 && second !== 0){
//     if(first === second){
//         console.log(`GCD = ${second}`);
//         break;
//     }

//     remainder = first % second;

//     // console.log(remainder);

//     first = second;
//     second = remainder;

//     // console.log(first);
//     // console.log(second);
//     // console.log(`<==========>`);
// }

// if(first === 0){
//     console.log(`GCD = ${second}`);
// }
// else if(second === 0){
//     console.log(`GCD = ${first}`);
// }
//#endregion

//#region Task 7
// let A = parseInt(prompt(`Enter the value of A `));

// let mirror = 0;

// do {
//     mirror = (mirror * 10) + (A % 10);
//     A = parseInt(A / 10);
// } while (A != 0);

// console.log(mirror);
//#endregion

//#region Task 8
// let A = parseInt(prompt(`Enter the value of A `));
// let B = parseInt(prompt(`Enter the value of B `));

// let tempB = B;

// let remainderA = 1;
// let remainderB = 1;

// let check = false;

// while (A !== 0) {
//     remainderA = A % 10;
//     B = tempB;
//     while (B != 0) {
//         remainderB = B % 10;

//         if(remainderA === remainderB){
//             check = true;
//         }

//         B = parseInt(B/10);
//     }
//     A = parseInt(A/10);
// }

// if(check){
//     console.log(`Yes`);
// }
// else{
//     console.log(`No`);
// }
//#endregion

