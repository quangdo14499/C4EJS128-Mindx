function migratoryBirds(arr) {
    let max = 1;
    let counter = max;
    let id = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        max = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        if (max > counter) {
            counter = max;
            id = arr[i];
        }
    }
return id;
}