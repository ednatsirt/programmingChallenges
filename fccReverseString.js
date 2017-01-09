// Build function to reverse a string
function reverseString(str) {
	// Instantiate an empty variable called arr
	var arr;
	// Turn str into an array where each letter is separated by ''
	arr = str.split('');
	// Reverse the order of the elements in the array
	arr = arr.reverse();
	// Join the array into a single string again
	arr = arr.join('');
	return arr;
}