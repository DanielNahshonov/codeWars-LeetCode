function getMiddle(word){
    // console.log(word.length)
    let length = word.length 
    let answer = ''
    if(length%2===0){
        answer = word.charAt((length/2)-1)+word.charAt(length/2)
    }else{

        answer = word.charAt(length/2)
    }
    return answer

}

getMiddle('testing')