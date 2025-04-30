// Question 1
function casee(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
// Question 2
function long(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
// Question 3
function sortAlpha(str) {
    return str.split('').sort().join('');
  }
  
// Question 4
function common(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
// Question 5
function remove(arr) {
    return [...new Set(arr)];
  }
  