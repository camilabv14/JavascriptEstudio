function solution(sequence) {
  const s = sequence;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] <= s[i - 1]) {
      return false;
    } else if (s[i] < s[i + 1]) {
      return true;
    }
  }
}

console.log(solution([1,2,3,4,5]))