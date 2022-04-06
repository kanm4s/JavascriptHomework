function power(array1) {
    let array = [...array1];
    console.log(array);
    let result = array1.map((ele, index) => {
        if (index === 3) {
            return ele ** 2;
        } else {
            return ele;
        }
    });
    return result;
}

power([4, 4, 4, 4, 4, 3, 5, 6, 7, 8, 8]);
