var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
  var guess;
  var i = 1;
  
	while(min <= max) {
		guess = Math.floor((max+min)/2);//truncate decimal
		if (array[guess] === targetValue) {
			console.log("Total guesses" +i);
			return guess;
		}
		else if (array[guess] < targetValue) {
			min = guess - 1;
		}
		else {
			max = guess - 1;
		}
		i++; //this is the same as i=i+1;
		console.log("Guess " + guess);
	}
	
		return -1;

}
//main (this is where the functions get called)
var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
var values = [100,400,200,1000,4,2,3,4,1, 5,7,9,123,67,78];
primes.sort();
values.sort();
var thePrime = 73;
var result = doSearch(primes, thePrime);
var result2 = doSearch(values, 67);
 console.log("Found prime " +thePrime+" at index " + result);
 console.log(values);
 values.sort(function(a, b){return a-b});
  console.log(values);
  console.log("Found value 200 at index " + result2);
