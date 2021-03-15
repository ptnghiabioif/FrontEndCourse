// switch case
/**
 * Syntax
 * Switch (expression) {
 * case value1:
 *      do something;
 *  break;
 * case value2
 *      do something;
 *  break;
 * default;
 *      do something;
 *  break;
 * }
 */
// bronze, silver, gold, diamond
// 2%, 5%, 8%, 10%

var memberCard = {
    tier: 'silver'
};

function getTotal(price, card) {
    var discountRate;
    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        case 'diamond':
            discountRate = 0.1;
            break;
        default:
            discountRate = 0
            break
    };

    return price * (1 - discountRate)

}

var total = getTotal(500000, memberCard);
console.log(total)

var trafficLight = 'green';

function goOrNot(lightValue){
    switch (lightValue) {
        case 'green':
        case 'orange':
            console.log('go')
            break;
        default:
            console.log('stop')
            break;
    }
}
goOrNot(trafficLight)
