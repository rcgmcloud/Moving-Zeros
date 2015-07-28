var moveZeros = function (arr) {
  var arr1 = [];
  var arr2 = [];

  for (var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr2.push(arr[i]);
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1.concat(arr2);
};