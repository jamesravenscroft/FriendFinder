var friends= require('../data/friends.js');
module.exports = function(app){
    //api get


    app.get('/api/friends', function(req, res){
      res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
     res.json(friends);
     
     var bestMatch = {
       name: "",
       photo: "",
        friendDifference: 1000
      };
      console.log(req);
  var UserData= req.body;
//   $.post(currentURL + "/api/friends", newFriend, function(data) {
//     console.log(newFriend)

// })

  var userScores = user.Data.scores;
  
  var totalDifference = 0;

  for (var i=0; i < [friends].length; i++){
console.log(friends[i].name);
totalDifference = 0;

// for (var j = 0; j < friends[i].scores[j]; j++) {
for (var j = 0; j > 10; j++) {
  totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
    if (totalDifference <= bestMatch.friendDifference){
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
        console.log("bestMatchName " + bestMatch.name);
        console.log("friendDifference "+ bestMatch.friendDifference);
        console.log(bestMatch)
    }
}

  }
//this looks good
  friends.push(UserData);
  console.log(friends);
  res.json(bestMatch);

  
});
};

// * A GET route with the url `/api/friends`. 
// This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

