let obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
};

for (let key in obj){
    console.log(`${key}: ${obj[key]}`);
}