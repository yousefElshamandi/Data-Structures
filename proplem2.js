// Function to calculate dot product of two vectors
function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// Function to check if two vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

// Example usage:
const vector1 = [1, 2, 3];
const vector2 = [4, -2, 1];

console.log(dotProduct(vector1, vector2)); 
console.log(areVectorsOrthogonal(vector1, vector2));