let checkPermission = (role, isAddmin, isnotAddmin) => {
    if (role === "admin") {
        isAddmin();
    } else {
        isnotAddmin();
    }
}

let givePermission = () => {
    alert("ACCESS GRANTED");
}

let deniedPermission = () => {
    alert("ACCESS DENIED");
}

checkPermission("admin",givePermission,deniedPermission)