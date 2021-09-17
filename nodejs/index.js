var { Play } = require('./lib')
var input = ["5", "2", "C", "D", "+"];

var result = Play(input).reduce((x, y) => x + y);

console.log(result);


