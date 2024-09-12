
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // Flatten the matrix and sort it in reverse order

    if (matrix === undefined) {
        return [];
    } else if(matrix.length === 0) {
        return [];
    } else {
        const result = [];
        matrix.forEach((value, index) => {
            if (index % 2 !== 0) {
                result.push(...value.reverse());
            } else {
                result.push(...value);
            }
        });
        return result;
    }
};
