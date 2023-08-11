function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every((value, index) => value === arr2[index]);
    }
}

function getUsersNamesInAgeRange(users, gender) {
    
    let userGenders = users.filter(user => user.gender === gender);
        
    if (userGenders.length === 0) {
            return 0;
    }

    let userAverageAge = userGenders.map(user => user.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
    return userAverageAge;
}