var db = require('../db');

module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if (!sessionId) {
        res.redirect('/products');
        return
    }

    var count = db
                .get('sessions')
                .find({ id: sessionId })
                .get('cart.' + productId, 0)
                .value();

    db.get('sessions')
    .find({ id: sessionId })
    .set('cart.' + productId, count + 1)
    .write();

    var obj = db.get('session')
        .find({ id: id })
        .get('cart')
        .value();
    var totalProducts = 0;
    for (let [key, value] of Object.entries(obj)) {
        totalProducts += value;
    }

    res.redirect('/products')
};