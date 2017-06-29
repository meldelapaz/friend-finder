//LOAD DATA - Linking routes to a series of "data" sources

var animals = require('../data/friendfinder')

module.exports = function(app) {

    //API GET REQUESTS (Respond with the following data when user requests it)

    app.get("/api/animals", function (req, res) {

        res.json(friendfinder);

    });

    app.post("/api/animals", function(req, res) {

        console.log('req.body.name: ' + req.body.name);
        console.log('req.body.scores: ' + req.body.scores);


        //PSEUDO CODE
        // Convert each user's results into a simple array of numbers.
        // Compare the difference between current user's scores against those from other users, question by question
        // Add up the differences to calculate the `totalDifference`.
        // Example:
            // User 1: `[5, 1, 4]`
            // User 2: `[3, 2, 6]`
            // Total Difference: **2 + 1 + 2 =** **_5_**
        // Use the absolute value of the differences.
        // The closest match will be the user with the least amount of difference.
        // Display the result as a modal pop-up.

    });
}
