var sqlite = require('sqlite3'),
    _ = require('underscore'),
    Promise = require('promise'),
    p,
    db;

function get_db(cb) { 
    if( !p ) {
        p = new Promise(function(resolve, reject) {
            var db = new sqlite.Database('./kuyabot.sqlite', function(err) {
                if( err ) reject(db);
                resolve(db);
            });
        });
    }
    p.then(cb, function(err) { throw err; });
}

module.exports = function(client) {
    client.db = get_db;
};
