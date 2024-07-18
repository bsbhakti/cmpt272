age = 0;
age = window.prompt('What is your age',0)
console.log(age)
console.log(typeof(age))
console.log(age === 9)

// for loop
/*
for (i=0; i<10; i++){
    console.log(i)
}

console.log('done!')
*/

// functions

// console.log(myfunc(2,3,5))

// function myfunc(a,b,c){
//     return a+b+c;
// }

// scope

// function myfunc2(){
//     var a = 10
//     b = 20
    
//     for (let i=0; i<a; i++){
//         console.log(a,i)
//     }
//     // console.log(a)
//     // console.log(i)
// }
// myfunc2()
// console.log(b)

// callbacks

let a = 0
let inter

let counter = () => {
    console.log(a)
    a++
}

let start = () => {
    inter = window.setInterval(counter, 500)
}

let stop = () => {
    window.clearInterval(inter)
}

// Obj

person = {
    name: 'bobby',
    age: 41,
    address: {
        street: '7th ave',
        number: '123',
        city: 'new westminster'
    },
    desc: function(){
        return this.name + " : " + this.age
    }
}

person.weight = 55

// class
class Person {
    constructor(n, a){
        this.name = n
        this.age = a
    }
    fullname(){
        return this.name + " : " + this.age
    }
    happiness(){
        return Math.floor(Math.random()*100) + " / 100"
    }
}

let p = new Person("bobby", 41)

// 1. create a new Person obj 
// 2. set the prototype fns to the obj
// 3. executes constructor code
// 4. returns a ref to the obj