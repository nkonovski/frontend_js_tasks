/*task 1*/
function max(a,b){

	if(a > b){
		return a;
	}

	return b;
}

/*task 2*/
function maxOfThree(a, b, c){

	var max = c;
	if(a > max){
		max = a;
	}
	if(b > max){
		max = b
	}

	return max;
}

/*task 3*/
function isVowel(a){

	// skip numbers
	if( !isNaN(Number(a)) ){
		return false;
	}

	a = a.toLowerCase();

	if (a == 'a' || a == 'e' || a == 'o' || a == 'i' || a == 'u' ){
		return true;
	}

	return false;
}

/*task 4*/
function translate(str){

	var result = '';

	for (var i = 0, len = str.length; i < len; i++) {
		
		if (!isVowel(str[i])){
			result += str[i] + 'o' + str[i];
		} else {
			result += str[i];
		}
	}

	return result;
}

/*Task 5*/
function sum(arr){

	var sum = 0;
	var len = arr.length;
	for (var i = 0; i < len; i++) {
	    sum += parseFloat(arr[i]);
	}

	return sum;
}

function multiply(arr){

	var res = 1;
	var len = arr.length;
	for (var i = 0; i < len; i++) {
	    res = res * parseFloat(arr[i]);
	}

	return res;
}

/*task 6*/
function reverse(str){

	var result = '';

	for(var i = str.length; i--;){
		result += str[i];
	}

	return result;
}

/*Task 7*/

/* ?? */

/*Task 8*/
function findLongestWord(arr){

	var pos = 0;
	for (var i = 0; i < arr.length; i++) {
	    
	    if (arr[i].length > arr[pos].length){
	    	pos = i;
	    }
	}

	return arr[pos];
}


/*task 9*/
function filterLongWords(arr, limit){

	var result = [];
	for (var i = 0; i < arr.length; i++) {
	    
	    if (arr[i].length <= limit){
	    	result.push(arr[i]);
	    }
	}

	return result;
}

/*task 10*/
function charFreq(str){

	var result = {};
	for (var i = 0; i < str.length; i++) {
	    
	    if (result[str[i]]){
	    	result[str[i]] = result[str[i]] + 1;
	    } else {
	    	result[str[i]] = 1;
	    }
	}

	return result;
}

/*task 11*/
function chekValue(sum){

	var result = '';
	if (sum != 1000000){
		result = sum + ' leva';
	} else{
		result = sum + ' dollars ($$$)';
	}

	return result;
}

/*task 12*/
function mixUp(str1, str2){

	return str2.substr(0, 2) + str1.substr(2) + ' ' + str1.substr(0,2) + str2.substr(2);
}

/*task 13*/
function fixStart(str){

	return str[0] + str.substr(1).replace(str[0], '*');
}

/*task 14*/
function verbing(str){

	if (str.length > 3){

		if (str.substr(-3) == 'ing'){
			str = str + 'ly';
		} else {
			str = str + 'ing';
		}

	}

	return str;
}

/*task 15*/
function notBad(str){

	var not_pos = str.indexOf('not');
	var bad_pos = str.indexOf('bad');
	var diff = bad_pos - not_pos + 3;

	if (diff > 1){
		str = str.replace( str.substr(not_pos, diff), 'good');
	}

	return str;
}

/*task 16*/
function getRandomPossition(arr){

	return Math.floor(Math.random()*arr.length);
}

function removeRandomItem(arr){

	if (arr.length == 0){
		return 'null leaving []';
	}

	var pos = getRandomPossition(arr);
	var item = arr[pos];
	arr.splice(pos, 1);

	return item + ' leaving [' + arr + ']';

}

/*tasl 17*/
function randomizeOrder(arr){

	var result = [];

	while (result.length < arr.length){

		var pos = getRandomPossition(arr);
		// if element not found
		if (result.indexOf(arr[pos]) == -1){
			result.push(arr[pos]);
		}
	}

	return result;
}