// setInterval
// clearInterval
// var i = 0;
// var intervalId = setInterval(function() {
//     ++i;
//     console.log(i);
//     if (i === 5) {
//         clearInterval(intervalId);
//     }
// }, 1000);

async function countFrom(a, b) {
    var i = a;
    return await new Promise(resolve => {
        const interval = setInterval(() => {
            console.log(i);
            if (i === b) {
            resolve();
            clearInterval(interval);
            };
            ++i;
        }, 500);
    });
}

console.log('Start')
countFrom(1,3).then(function() {
    console.log('Done');
})

// function count(a, b) {
//     return new Promise(function (resolve, reject) {
//         var intervalID = setInterval(function () {
//             console.log(a);
//             a++
//             if (a === b + 1) {
//                 clearInterval(intervalID);
//                 resolve();
//             }
//         }, 100)
//     })
// }

// console.log('Start')
// count(1, 10)
//     .then(function () {
//         console.log("Done");
//     })
