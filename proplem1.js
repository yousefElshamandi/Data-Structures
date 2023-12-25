function findDistinctSum(set1, set2) {
    let distinctSum = 0;

    // Function to check if an element is present in the array
    function isElementPresent(element, array) {
        return array.indexOf(element) !== -1;
    }

    // Loop through elements of set1
    for (let i = 0; i < set1.length; i++) {
        if (!isElementPresent(set1[i], set2)) {
            distinctSum += set1[i];
        }
    }

    // Loop through elements of set2
    for (let i = 0; i < set2.length; i++) {
        if (!isElementPresent(set2[i], set1)) {
            distinctSum += set2[i];
        }
    }

    return distinctSum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log(result); 
