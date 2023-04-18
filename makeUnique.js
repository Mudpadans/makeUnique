// Write your solution below:
const makeUnique = (str) => {
    let splitStr = str.split('');
    let newArray = [...new Set(splitStr)];
    let newStr = newArray.join('');
    return newStr;
}

console.log(makeUnique('iwanttoclimbamountain'));