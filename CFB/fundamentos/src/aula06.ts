let exemplo:Array<number|string> = ['abcde', 123,456,"ewrew"]
let ex:(number|string)[] = [123,"ewrew"]

console.log(typeof exemplo, exemplo)

console.log(typeof ex, ex)

exemplo.unshift("milson")
exemplo.push("aoki")
console.log(typeof exemplo, exemplo)
exemplo.pop()
exemplo.shift()


console.log(typeof ex, ex)

let ex_ro: ReadonlyArray<number> =[1,2,42]
