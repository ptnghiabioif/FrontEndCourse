// setTimeout
// clearTimeout
// timer
// function done(){
//     console.log('Finish');
// }
var done = function(){
    console.log('Finish');
}

console.log('Start')
var timeoutId = setTimeout(done, 1000); // milliseconds
console.log('Done')
clearTimeout(timeoutId);


