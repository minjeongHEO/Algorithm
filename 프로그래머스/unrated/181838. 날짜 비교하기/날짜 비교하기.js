function solution(date1, date2) {
  if (new Date(date1.join('.')) < new Date(date2.join('.'))) return 1;
  return 0;
}

// 다른 풀이
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);
