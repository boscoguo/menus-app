const getRootListKey = (data: any) => {
    return Object.keys(data);
}

const getRootListValue = (data: any) => {
    return Object.values(data);
}

export { getRootListKey, getRootListValue };