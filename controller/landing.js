var get_from_db = require('../db');

exports.get_landing = function(req, res, next) {
    res.render('index', { text: get_from_db
                          });
  };

