const reverse = function(arr) {
  for (let i = 2; i < arr.length; i++) {
    let str = "";
    for (let j = arr[i].length; j >= 0; j--) {
      str += arr[i].charAt(j);
    }
    console.log(str);
  }
};
reverse(process.argv);
