

var a = [1.7, 3.8, 3.3, 7.9, 15.2]

function highestNumber(a) {
  var max = 0

    a.forEach(function(element){
      if (max < element){
      max = element
      }
});
return max;

}


function lowestNumber(a) {
var min = 1

a.forEach(function(element){
if (min > element) {
  min = element
}
});
return min;
}


function smallestNumber(a) {
  var min = 600000;

  a.forEach(function(element){
  if  (Math.abs(min) > Math.abs(element)) {
    min = element
  }
  });
  return min;
}

var a = [1.7, 3.8, 3.3, 7.9, 15.2]

function sum(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total = element + total;
  })
  console.log(total)
}


function mean(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total = element + total;
  })

  var c = total / arr.length;
  console.log(c);
}

function indexHighestNumber(a) {
  var max = -9999999999;
    a.forEach(function(element){
      if (max < element){
      max = element
      }
});

return a.indexOf(max);

}


a = ["Brian", "Alin", "Andrew"];
b = ["Joe", "Mary"];

a.sort()
b.reverseOrder()

function reverse () {
var c = b.sort()
return c.reverse()

}

var x = a.concat(b)

x.sort()

function reverse () {
var z = x.sort()
return z.reverse()

}

// function namechecker (x.lastindexof("y")){
//
//
//   }
// }

function nameChecker(name){
  var x = ["Mary", "Joe", "Brian", "Andrew", "Alin"]
  var result = ""
  x.forEach(function(element){

    if(x.includes(name)) {
      result = true ;
    } else {
      result = false ;
    }
  });
  console.log(result)
};






// var sum = [1, 2, 3].reduce(add, 0);
//
//   function add(a, b , c) {
//     return a + b + c
//   }
//   console.log(sum);

//Purpose: Find a name from a list of names
// Signature: (String) --> Boolean
//Examples:
  // nameChecker("Brian") --> true
  //nameChecker("Steve") --> false
