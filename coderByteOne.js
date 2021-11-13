function checkLength(str) {
    if (str.length>4 && str.length<=24) {
        return true
    }
}

function checkLetter(str) {
     if (str[0].match(/[a-z]/i)) {
      return true   
     }
}

function checkCharacter(str) {
    if (str.match(/^\w+$/)) {
        return true
    }
}
function checkLastStart(str) {
    if (str.charAt(str.length -1)=='_') {
        return true
    }
}

let str="aşi._648hftg"
console.log("Karakter koşulu sağlanıyor"+str.checkCharacter)
console.log("Son harf koşulu sağlanıyor"+str.checkLastStart)
console.log("Kelime koşulu sağlanıyor"+str.checkLetter)
console.log("Kelime uzunluğunu kontrolü sağlıyor"+str.checkLength)

