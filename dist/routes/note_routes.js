var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.post('/notes', function (req, res) {
        var note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/notes/:id', function (req, res) {
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, function (err, item) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                res.send(item);
            }
        });
    });
    app.delete('/notes/:id', function (req, res) {
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, function (err, item) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
    app.put('/notes/:id', function (req, res) {
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        var note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                res.send(note);
            }
        });
    });
};
//# sourceMappingURL=note_routes.js.map