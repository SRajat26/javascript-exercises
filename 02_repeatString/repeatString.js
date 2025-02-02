const repeatString = function(string, num) {
    if(num<0)
        return "ERROR";
    a="";
    for(i=0;i<num;i++){
        a=a+string;
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;
