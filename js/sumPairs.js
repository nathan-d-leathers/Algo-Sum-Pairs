exports.sumPairs = function(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    if (result.length === 0) return 'unable to find pairs';
    else return result;


};
