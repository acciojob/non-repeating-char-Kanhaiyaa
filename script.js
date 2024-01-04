function firstNonRepeatedChar(str) {
 // Write your code here
	 const charFrequency = new Map();

    // Iterate through the string to count the frequency of each character
    for (const char of str) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charFrequency.get(char) === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if no non-repeated character is found
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
