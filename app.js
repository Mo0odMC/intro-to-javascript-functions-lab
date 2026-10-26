function generateEmail(username, domain) {
  return `${username}@${domain}`
}

// Test the function
console.log('Exercise 1 Result:', generateEmail("sara", "company.com")) // sara@company.com
console.log('Exercise 1 Result:', generateEmail("ali", "example.com")) // ali@example.com
console.log('Exercise 1 Result:', generateEmail("notali", "ga.com")) // notali@ga.com


//greetuser
function greetUser(name,timeOfDay) {
    return `Hi ${name}, how is your ${timeOfDay}?`
}

// Test your function
console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!


//calculate VAT
function calculateVAT(price,vatPercentage) {
    return price*(vatPercentage/100)
}


// Test your function
console.log('Exercise 3 Result:', calculateVAT(50, 10)) // 5
console.log('Exercise 3 Result:', calculateVAT(100, 10)) // 10
console.log('Exercise 3 Result:', calculateVAT(200, 5)) // 10


// checkStock
function checkStock(quantity) {
    if (quantity>0) {
        return `In stock`
    } else {
        return `Out of stock`
    }
}

// Test your function
console.log('Exercise 4 Result:', checkStock(10)) // In stock
console.log('Exercise 4 Result:', checkStock(0))  // Out of stock
console.log('Exercise 4 Result:', checkStock(1))  // In stock

// maxofTwoNumbers
function maxOfTwoNumbers(numA,numB) {
    if (numA>=numB) {
        return numA
    } else if (numB>=numA) {
        return numB
    } 
    }



// Test your function
console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9)) // 9
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4)) // 15
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7)) // 7

// isCharAVowel

function isCharAVowel(char) {
    if (char === "a" ||char === "e" || char ==="i" || char ==="o" || char ==="u") {
        return true
    } else {
        return false
    }
}

// Test your function
console.log('Exercise 6 Result:', isCharAVowel("a")) // true
console.log('Exercise 6 Result:', isCharAVowel("e")) // true
console.log('Exercise 6 Result:', isCharAVowel("b")) // false
console.log('Exercise 6 Result:', isCharAVowel("y")) // false


// maxOfThree
function maxOfThree(numA,numB,numC) {
    if (numA >= numB && numA >= numC) {
        return numA
    } else if (numB >= numA && numB >= numC) {
        return numB
    } else if (numC >= numA && numC >= numB){
        return numC
    }
    
}


// Test your function
console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) // 10
console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) // 20
console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) // 15
console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) // 8


// convertTemperature
function convertTemperature(temperature,scale) {
    if (scale === "C" || scale === "c") {
        return (temperature * 9 / 5) + 32
    } else if (scale === "F" || scale === "f"){
        return (temperature - 32) * 5 / 9
    }
}



// Test your function
console.log('Exercise 8 Result:', convertTemperature(0, "C")) // 32
console.log('Exercise 8 Result:', convertTemperature(32, "C")) // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")) // 0
console.log('Exercise 8 Result:', convertTemperature(212, "F")) // 100

// basicCalculator
function basicCalculator(numA,numB,operation) {
    if (operation === "add") {
        return numA+numB
    } else if (operation === "subtract") {
        return numA-numB
    }else if (operation === "multiply") {
        return numA*numB
    }else if (operation === "divide") {
        return numA/numB
    }
}


// Test your function
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) // 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) // 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) // 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) // 2
