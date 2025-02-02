const removeFromArray = function(arr,...arg) {
    let newarr=[];
    for(item of arr){
        if(arg.includes(item))
            continue;
        else
            newarr.push(item);
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
