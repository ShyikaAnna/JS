   function isString(str) {
       if (typeof str === "string" || str instanceof String) return true
       else return notStringMsg(`It is a ${typeof str}`)
     }
   
   function isPalindrome(str) {
       let re = /[^A-Za-z0-9]/g
       str = str.toLowerCase().replace(re, "")
       let len = str.length
       for (let i = 0; i < len / 2; i++) {
         if (str[i] !== str[len - 1 - i]) {
           return false
         }
       }
       return true
     }
   function printSuccessMsg(str){
       return console.log(str)
   }
   function notStringMsg (str){
       return console.log(str)
   }
   
     module.exports = {
       isString,
       isPalindrome,
       printSuccessMsg,
       notStringMsg,
     };