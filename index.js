const findMatching = (arr, str) => {
    return arr.filter(f => {
        return f.toLowerCase() === str.toLowerCase();
    })
}

const fuzzyMatch = (arr, str) => {
    return arr.filter(f => {
        return f.slice(0,str.length) === str;
    })
}

const matchName = (arr, str) => {
    return arr.filter(f => {
        return f.name === str;
    })
}
