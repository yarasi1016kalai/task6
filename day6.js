//Fix the code to get the largest of three.
aa = (f, s, t) => {
    console.log(f, s, t);
    if (f > s && f > t) {
      console.log(f)
    }
    else if (s > f && s > t) {
      console.log(s)
    }
    else {
      console.log(t)
    }
  }
  aa(1, 2, 3);
  
  //Fix the code to Sum of the digits present in the number
  let n = [1, 2, 3];
  
  console.log(add(n));
  function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
      sum += n[i];
    }
    return sum;
  }
  //Fix the code to Sum of all numbers using IIFE function
  let arr = [9, 8, 5, 6, 4, 3, 2, 1];
  (function () {
    let sum = 0;
    for (var j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    console.log(sum);
    return sum;
  })();
  
  //Fix the code to gen Title caps.
  var arr1 = ['guvi', 'geek', 'zen', 'fullstack'];
  var ano = function (arro) {
    for (var i = 0; i < arr1.length; i++) {
      console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
    }
  }
  ano();
  
  //Fix the code to return the Prime numbers
  
  const newArray = [1, 3, 2, 5, 10];
  const myPrime = newArray.filter(num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return num == 1;
      }
    }
    return true;
  });
  console.log(myPrime);
  
  //Fix the code to sum the number in that array
  const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const sum = (a, b) => {
    return a + b;
  }
  console.log(num.reduce(sum));
  
  //Fix the code to rotate an array by k times and return rotated array using IIFE function
  var arr3 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
  var k = 3;
  k = arr3.length % k;
  (function () {
    arr3 = {};
    out = arr3.slice(k + 1, arr3.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
      out[count] = arr3[i];
      count += 1;
    }
    console.log(out);
  })();
  
  //Fix the code to gen Title caps.
  
  var arrr = ['guvi', 'geek', 'zen', 'fullstack'];
  (function () {
    for (var i = 0; i < arrr.length; i++) {
      console.log(arrr[i][0].toUpperCase() + arrr[i].substr(1));
    }
  })();
  
  //print all odd numbers in an array using IIFE function
  
  var arrrr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
  (function () {
    for (var i = 0; i < arrrr.length; i++) {
      if (arrrr[i] % 2 === 1) {
        console.log(arrrr[i]);
      }
    }
  })();
  
  //Fix the code to reverse.
  
  (function (str) {
    str1 = str.split('').reverse().join('');
    console.log(str1);
  })('abcd');
  
  //Fix the code to remove duplicates.
  
  var res = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      newArr = [];
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  }
  res(['guvi', 'geek', 'guvi', 'duplicate', 'geeK'])
  
  
  