function filterOutOdds(...nums) {
    return nums.filter((ele) => ele % 2 === 0);
}

filterOutOdds(2, 4, 5, 6, 7, 8);
