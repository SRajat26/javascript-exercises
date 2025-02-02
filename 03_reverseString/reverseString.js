const reverseString = function(word) {
    let x="";
for(let i=word.length-1;i>=0;i--){
    x= x+word[i];
}
return x;
};

// Do not edit below this line
module.exports = reverseString;
