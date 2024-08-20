// console.log(" Jaack Maa maaslahatlari");
// const list = [
//     "yaxshi talaba boling", //8~20
//     "togri boshliq tanlang va koproq hato qiling", //20~30
//     "ozingizga ishlashni boshlang", //3-~40
//     "siz kuchli bolgan ishlarni qiling", //40~50
//     "yoshlarga investitsiya qiling", // 50~60
//     "endi dam oling", // 60~
// ];

//Callback function
// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5])
//         }, 5000);
//         };
// }


// console.log('passes here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR', error);
//     console.log('javob:', data)
// });
// console.log('passes here 1');


//Asynchronous functions
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {return list[6];
//         // setTimeout(() => {
//         //     return list[6];
//         // }, 5000);
//         };

// }

//then/catch
// console.log('passes here 0');
// maslahatBering(25).then(data => {
//     console.log("javob:", data);
// }).catch (err => {
//     console.log("ERROR:", err);
// });
// console.log('passes here 1');


//async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//Promise function(briefly)
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             // setInterval(() => {
//             //     resolve(list[5]);
//             // }, 1000);
//             // setTimeout(() => {
//             //     resolve(list[5]);
//             // }, 5000);
//         })
//         };

// }

// async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//example for setInterval
// async function run() {
//     let javob = await maslahatBering(66);
//     console.log(javob);
// }
// run();


//MITASK

/*A-TASK
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/

//Answer:
const countLetter = (a, b) => {
    let count = 0;
    for(let i = 0; i < b.length; i++){
        if(a === b[i]) {
            count++;
        }
    }
    console.log(`Count of ${a} inside ${b}  equals to =>  ${count}`)
}

countLetter("e", "engineer");