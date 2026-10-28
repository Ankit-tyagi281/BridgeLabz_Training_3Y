// Q8: Add a custom myMap() method to Array.prototype.
// The callback receives value, index, and the original array, like built-in map().

Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError("myMap expects a callback function");
    }

    const result = [];
    for (let index = 0; index < this.length; index++) {
        // Skip holes in sparse arrays, matching Array.prototype.map behavior.
        if (index in this) {
            result[index] = callback.call(thisArg, this[index], index, this);
        }
    }
    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index)); // [1, 3, 5, 7]
