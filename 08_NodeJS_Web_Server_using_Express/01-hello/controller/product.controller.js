var db = require('../db');

module.exports.index = function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var prevPage = (page > 0) ? (page - 1) :  page;
    var nextPage = (page < (100/8)) ? (page + 1) :  page;
    
    var start = (page -1) * perPage;
    var end = page * perPage

    var drop = (page -1) *perPage;

    res.render('products/index', {
        // products: db.get('products').value().slice(start, end)
        products: db.get('products').drop(drop).take(perPage).value(),
        page: page,
        prevPage: prevPage,
        nextPage: nextPage,
    });
};