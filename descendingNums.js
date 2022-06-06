//write a function that takes a non-negative integer and returns its numbers in descending order

function descendingOrder(n){
    let num = n.toString().split(''); // had to convert to string to split nums

    num.sort(function(a, b){ //function that puts them in descending order.

        return b-a;
    });

    return Number(num.join('')) //had to convert back to an int and join back into one number
    
}
//i just stumbled on this answer recently in looking at the mdn. the needed method is sort... let's see how it's used
