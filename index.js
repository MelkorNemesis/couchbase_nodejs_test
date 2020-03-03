const couchbase = require('couchbase')
var N1qlQuery = couchbase.N1qlQuery;

var cluster = new couchbase.Cluster('couchbase://127.0.0.1/?detailed_errcodes=1');
cluster.authenticate('admin', '123456');
var bucket = cluster.openBucket('travel-sample');

// -------------------------------
// DOES NOT WORK
// -------------------------------

bucket.insert('_a', { 'k': 'v' }, function (err, res) {
    console.log('insert err', err);
    console.log('insert res', res);
});
//
// bucket.get('_a', function (err, res) {
//     console.log({ err, res });
// });


// -------------------------------
// WORKS
// -------------------------------

// bucket.query(
//     N1qlQuery.fromString('INSERT INTO `travel-sample` (KEY, VALUE) VALUES ("_abcd", { "key": "val" })'),
//     undefined,
//     function (err, rows) {
//         console.log({
//             err,
//             rows
//         });
//     }
// )

// bucket.query(
//     N1qlQuery.fromString('SELECT * FROM `travel-sample` LIMIT 4'),
//     undefined,
//     function (err, rows) {
//         console.log(err)
//         console.log("Got rows: %j", rows);
//     });
//
