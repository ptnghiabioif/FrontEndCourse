// Ternary operator

// Syntax:
// condition ? expression when true : expresion when false

function tossCoin() {
    var value = Math.random();
    var result = (value < 0.5) ? 'Mặt sấp' : 'Mặt ngửa';

    console.log(result)
}
tossCoin()