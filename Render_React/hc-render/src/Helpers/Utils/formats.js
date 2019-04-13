export function getLastFifteenYears(){
    const actualYear = new Date().getFullYear();
    let arrayOfYears = []
    for(let cont = 0;  cont < 50 ; cont++){
        arrayOfYears.push(actualYear - cont)
    }
    return arrayOfYears
}

export function extractError(error) {
    let errorKeysArray = Object.keys(error)
    return typeof error === "string" ? error : error[errorKeysArray[0]][0]
}