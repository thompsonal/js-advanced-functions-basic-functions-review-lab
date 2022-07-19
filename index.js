// Your code here

//  defines saturdayFun function declaration as specified
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//  defines mondayWork function expression as specified
let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

// defines wrapAdjective function according to the specification
let wrapAdjective = function (style = "*") {
    return function (adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}

// defines an object called Calculator
const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b;
    }
}

// Defines a function called actionApplyer
let actionApplyer = function (start, ray) {

// receives two arguments: a starting integer and an array of functions
    let a = start

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }

    return a
}