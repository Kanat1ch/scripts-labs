let array = [0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100];

array.sort(function(a, b) { 
  return b - a;
});

console.log(array);