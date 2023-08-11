function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every((value, index) => value === arr2[index]);
    }
}

function getUsersNamesInAgeRange(users, gender) {
    users.filter(element => element.gender === gender).map(element => element.age).reduce((acc, item, index, arr) => {
        acc+=item;
        if (index === arr.length - 1) {
            return acc / arr.length;
        } else {
            return acc;
        }
    }, 0)
}