function polidro(word) {

    let a = word.split('').reverse()
    let c = 0
  
    for (let i = 0; i < word.length; i++) {
  
      if (a[i] == word[i]) {
        c++
      }
    }
  
  
    if (c == word.length) {
      return true
    } else {
      return false
    }
  }
  
  export default polidro;

  



  