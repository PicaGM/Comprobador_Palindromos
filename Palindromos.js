function palindrome(eye) {
  const eyeP = eye.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const eyeI = eyeP.split('').reverse().join('');
  return eyeP === eyeI;
}
console.log(palindrome("racecar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("race CAR"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("hello"));
console.log(palindrome("world"));
console.log(palindrome("not a palindrome"));
