// grab the nerd model we just created
var Member = require('./models/member');

module.exports = function(app) {

    /************************************************************************************/
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    //Member routes
    // sample api route
    app.get('/api/members', function(req, res) {
        console.log('members is called');
        // use mongoose to get all nerds in the database
        Member.find(function(err, members) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err){
                console.log(err)
                res.send(err);
            }

            res.json(members); // return all nerds in JSON format
        });
    });

    app.post('/api/members', function(req, res) {
        var m = new Member(req.body);
        // MongoDB will create the _id when inserted
        m.save(function (err) {
            if (err) return handleError(err);
            Member.findById(m, function (err, doc) {
                if (err) return handleError(err);
                console.log(doc); // { name: 'mongodb.org', _id: '50341373e894ad16347efe12' }
            })
        })

    });

    app.put('/api/members/:id', function(req, res) {
        query = { _id: req.params.id};
        Member.update(query, req.body, function (err) {
            if (err) return handleError(err);
            Member.findById(m, function (err, doc) {
                if (err) return handleError(err);
                console.log(doc); // { name: 'mongodb.org', _id: '50341373e894ad16347efe12' }
            })
        });
    });

    app.delete('/api/members/:id', function(req, res) {
        query = { _id: req.params.id};

        Member.remove(query, req.body, function (err) {
            if (err) return handleError(err);
            console.log("record removed");
        });
    });

    /************************************************************************************/

	app.all('/*', function(req, res, next) {
		var arbitraryUrls = ['partials', 'api'];
		if (arbitraryUrls.indexOf(req.url.split('/')[1]) > -1) {
			next();
		} else {
			res.render('index');
		}
	});

	app.get('/partials/*', function(req, res, next) {
		res.render('.' + req.path);
	});


};