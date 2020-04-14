var fs = require('fs');


function readLines(input, isInvalidLine) {
  var remaining = '';
  var lineArray = [];
  var isInvalidInput = false;
  var zero = " _ | ||_|";
  var one = "     |  |";
  var two = " _  _||_ ";
  var three = " _  _| _|";
  var four = "   |_|  |";
  var five = " _ |_  _|";
  var six = " _ |_ |_|";
  var seven = " _   |  |";
  var eight = " _ |_||_|";
  var nine = " _ |_| _|";

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      lineArray.push(line);
	  if(isInvalidLine(line)){
		isInvalidInput = true;
	  }
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
	  if("                           " !== remaining){
		console.log("Invalid: input.txt");
	  } 
	  else if(isInvalidInput){
		console.log("Invalid: input.txt");
	  }
	  else if(lineArray.length !== 3){
		console.log("Invalid: input.txt");
	  }
	  else{
		let number = "";
		for(let i = 0; i < 10; i++){ // Because there could be only ten numbers
			let row = lineArray[0].substring(i*3, i*3+3) + lineArray[1].substring(i*3, i*3+3) + lineArray[2].substring(i*3, i*3+3);
			switch(row) {
			  case zero:
				number += 0;
				break;
			  case one:
				number += 1;
				break;
			  case two:
				number += 2;
				break;
			  case three:
				number += 3;
				break;
			  case four:
				number += 4;
				break;
			  case five:
				number += 5;
				break;
			  case six:
				number += 6;
				break;
			  case seven:
				number += 7;
				break;
			  case eight:
				number += 8;
				break;
			  case nine:
				number += 9;
				break;
			  default:
				// code block
			}
		}
		console.log(number);
	  }
	  
    }
  });
}

function isInvalidLine(line){
	if(line.length !== 28){
		return true;
	}
	for(let i = 0; i < line.length-1; i++){
		if(line.charAt(i) !== " " && line.charAt(i) !== "|" && line.charAt(i) !== "_"){
			return true;
		}
	}
}

var input = fs.createReadStream('input.txt');
readLines(input, isInvalidLine);