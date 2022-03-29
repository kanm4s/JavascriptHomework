let truncate = (str, length) => {
    if (str.length > length) {
        return str.substr(0, length - 1) + "...";
    } else {
        return str;
    }
};
