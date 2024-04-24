function narcissistic(value) {
    // Code me to return true or false
    let number = value.toString()
    let length = number.length
    let result = 0
    for(let i = 0; i<length;i++){
        result+= Math.pow(parseInt(number[i], 10), length)
    }
    if( result === value){
        return true
    } else{
        return false
    }
  }
  