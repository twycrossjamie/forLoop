var scores = [24, 32, 17]; //Array of scores
var arrayLength = scores.length; // items in array
var roundNumber = 0; //current round
var msg = ''; // message 
var i;
//loop through the items in the array 
for (i = 0; i < arrayLength; i++) {
//array are zero based (so 0 is round 1)
//add 1 to the current round 
    roundNumber = (i + 1);

//write the current round to the message 
    msg += 'Round ' + roundNumber + ': ';

//get the score from the score array
    msg += scores[i] + '<br />';
}
document.getElementById('answer').innerHTML = msg;