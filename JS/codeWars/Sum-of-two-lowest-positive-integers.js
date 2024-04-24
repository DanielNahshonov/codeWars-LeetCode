function sumTwoSmallestNumbers(numbers) {  
    let newNumbers = numbers.sort((a, b) => a - b)
    let result = newNumbers[0]+newNumbers[1]
    
    return result

  }

  sumTwoSmallestNumbers([5, 8, 12, 19, 22])