let numbers = [4, 16, 19, 21, 20, 44, 14510]
let even = []
let odd = []

numbers.filter( process =>{
    if (process % 2 === 0){
        even.push(process)
    } else {
        odd.push(process)
    }
}
    )
    console.log(
            even , odd
    );
