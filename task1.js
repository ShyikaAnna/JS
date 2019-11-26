const { isPalindrome, isString, printSuccessMsg } = require('./utils')

function checkString(str) {
  if (isString(str)) {
    if (isPalindrome(str)) return printSuccessMsg('It is Palindrom')
    else return console.log('it is just a string')
  }
}
checkString('radar')