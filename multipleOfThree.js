/**
 * This function takes the last digit off of a number until it finds 
 * a multiple of three, if no multiple is found it returns null
 * @param {int} n 
 * @returns null, int
 */
const prevMultOfThree = n => {
    while(n >= 1){
      if(n % 3 == 0)
        return n
      n = Math.floor(n / 10)
    }
    return null
  }