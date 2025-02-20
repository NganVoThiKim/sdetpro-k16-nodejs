function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
    
}
new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]).forEach(logMapElements);

// Given a value, please find the key 
const targetValue = 4;
let foundKey = undefined;
new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]).forEach(function(value, key, map){
    if(value === targetValue){
        foundKey = key;
        return;
    }
});

if (!foundKey){
    console.log(`..${targetValue}`);
    
} else{
    console.log(`${targetValue} : ${foundKey}`);
    
}