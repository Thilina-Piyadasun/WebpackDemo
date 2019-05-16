import { flatArray ,doubleArray } from "./arr";

var array = [ 1,2,3,[4,5,6,[7,8,9,[10,11,12,13]]]];

window.onload = function () {

    document.getElementById('array-of-arrays').innerHTML = array.length + "  sub arrays ";
    document.getElementById('flat-arrays').innerHTML = " has " +    flatArray(array).length + " items  - [ " + flatArray(array) + " ]";
    document.getElementById('double-arrays').innerHTML = " has " +   doubleArray(flatArray(array)).length + " items - [ " + doubleArray(flatArray(array))+ " ]";
}

console.log(flatArray(array));
console.log(doubleArray(flatArray(array)));


//webpack dev server create main.js file and serves that file from memory
/***
 * i ｢wds｣: webpack output is served from /
 i ｢wdm｣: Hash: 45875bf3389f8884ced1
 Version: webpack 4.31.0
 Time: 314ms
 Built at: 05/16/2019 5:01:26 PM
 Asset     Size  Chunks             Chunk Names
 main.js  349 KiB    main  [emitted]  main
 Entrypoint main = main.js

 */

