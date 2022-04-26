function snapCrackle(maxValue){
    let str = ''
    for(i = 1; i <= maxValue; i++){
        if(i % 2 === 1 && i % 5 === 0){
            str = str + `SnapCrackle, `
        }
        else if(i % 2 === 1){
            str = str + `Snap, `
        }
        else if(i % 5 === 0){
            str = str + `Crackle, `
        }
        else{
            str = str + `${i}, `
        }
    }
    return str
}

function snapCracklePrime(maxValue){
    let str = ''
    for(i = 1; i <= maxValue; i++){
        if(i % 2 === 1 && i % 5 === 0 && primos(i).includes(i)){
            str = str + `SnapCracklePrime, `
        }
        else if(i % 2 === 1 && primos(i).includes(i)){
            str = str + `SnapPrime, `
        }
        else if(i % 5 === 0 && primos(i).includes(i)){
            str = str + `CracklePrime, `
        }
        else if(primos(i).includes(i)){
            str = str + `Prime, `
        }
        else if(i % 2 === 1 && i % 5 === 0){
            str = str + `SnapCrackle, `
        }
        else if(i % 2 === 1){
            str = str + `Snap, `
        }
        else if(i % 5 === 0){
            str = str + `Crackle, `
        }
        else{
            str = str + `${i}, `
        }
    }
    return str
}

function primos(numero){
    let primos = []
    for(i = 0; i <= numero; i++){
        if(geradorDePrimos(i)){
            primos.push(i)
        }
    }
    return primos
}
function geradorDePrimos(numer){
    for(i = 1; i < numer; i++){
        if(numer % i === 0){
            return false
        }
        return numer > 1
    }
}

console.log(snapCrackle(15))