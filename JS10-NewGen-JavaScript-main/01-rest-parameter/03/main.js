function mergeObjects(...obj) {
    let result = obj.reduce((acc, ele) => {
        return { ...ele, ...acc };
    }, {});
    return result;
}

mergeObjects({ a: 1, b: 2, c: 3 }, { a: 5, e: 4, f: 3 }, { g: 5, h: 1, f: 4 });
