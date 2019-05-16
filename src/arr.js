export function flatArray(array){
    return array.flat(Infinity)
}

export function doubleArray(array){
    return array.flatMap( a => [a ,2*a])
}
