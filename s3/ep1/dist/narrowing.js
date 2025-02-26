"use strict";
function traiterValeur(params) {
    if (typeof params === "string") {
        return params.length;
    }
    else {
        return params * 1;
    }
}
console.log(traiterValeur("hello"));
console.log(traiterValeur(123));
