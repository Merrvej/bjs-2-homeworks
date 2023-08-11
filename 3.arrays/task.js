function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every((value, index) => value === arr2[index]);
    }
}

function getUsersNamesInAgeRange(users, gender) {
    

    const userGenders = users.filter(user => user.gender === gender);
        
    if (userGenders.length === 0) {
            return 0;
    }

    const userAges = userGenders.map(user => user.age);
    const sumAges = userAges.reduce((acc, age) => acc + age, 0);
    const userAverageAge = sumAges / userAges.length;
    return userAverageAge;
}