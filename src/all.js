export function all(arr, match) {
    const newArr = arr.filter(el => {
        if (el === match)
            return true
        return false
    });
    if (newArr.length === arr.length)
        return true
    return false
}