const filterRange = (arr, a, b) => {
    return arr.filter((element) => {
        if (a > b) {
            return element < a && element > b;
        } else {
            return element > a && element < b;
        }
    });
};

filterRange([4, 2, 5, 7, 8, 9, 6, 4, 3, 1, 4], 1, 6);
