//LOAD DATA - Linking routes to a series of "data" sources

var animals = require('../data/friendfinder')

var path = require('path');

module.exports = function(app) {

    // API GET REQUEST (Respond with the following data when user requests it)

    app.get("/api/animals", function (req, res) {

        res.json(animals);

    });

    // API POST REQUEST - handles when a user submits data to the server

    app.post("/api/animals", function(req, res) {

        console.log(animals);

        var results = {};

        var difference = 100;

        var scores = [ parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4),
                       parseInt(req.body.q5), parseInt(req.body.q6), parseInt(req.body.q7), parseInt(req.body.q8),
                       parseInt(req.body.q9), parseInt(req.body.q10) ]

        // For looping through the animals object created in friendfinder.js
        for (var i = 0; i < animals.length; i++) {

            var differenceArray = [];

            var totalDifference = 0;

            // Pushing the difference between scores in differenceArray
            for (var j = 0; j < animals[i].scores.length; j++) {
                differenceArray.push(Math.abs(scores[j] - animals[i].scores[j]))
            }
            console.log('differenceArray: ' + differenceArray);

            //
            for (var k = 0; k < differenceArray.length; k++) {
                totalDifference += differenceArray[k];
            }

            console.log('totalDifference: ' + totalDifference);

            if (results == {}) {
                results = animals[i];
                difference = totalDifference;
            } else if (totalDifference < difference){
                results = animals[i];
                difference = totalDifference;
            }
            console.log(totalDifference);
        }

        console.log("Your results is: " + results.name);

        var data = {name: req.body.name,
                   image: req.body.image,
                  scores: scores};

        // JSON object is pushed to the appropriate JavaScript array
        animals.push(data);
        res.json(results);
    });
}
