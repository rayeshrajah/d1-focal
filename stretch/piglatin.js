const piglatin = function(arr) {
  for (let i = 2; i < arr.length; i++) {
    let temp = arr[i].charAt(0);
    let str = arr[i].substring(1);
    str += temp + "ay";
    console.log(str);
  }
};
piglatin(process.argv);
