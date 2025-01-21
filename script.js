function toCase(text) {
  // write your code here
	let s = text.toLowerCase();
	let t = text.toUpperCase();
	let ans = s+"-"+t;
	return ans
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
