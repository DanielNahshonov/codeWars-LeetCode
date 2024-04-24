function comp(array1, array2) {
    if( array1 == null || array2 == null){
        return false
    }else{
    let arraySquared = array1.map(element => element ** 2);
    arraySquared.sort((a, b) => a - b);  // Sorting the squared array in ascending order
    array2.sort((a, b) => a - b);  // Sorting the second array in ascending order
    
    return arraySquared.join() === array2.join();
  }
}
  