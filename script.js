// complete the given function
function palindrome(str){
let start=0,end=str.length-1,ans;
str=str.toLowerCase().replace(/[^A-Za-z0-9]/g,"");
while(start<=end){
    if(str.charAt(start++)!=str.charAt(end--)){
       return false;
    }
}
	return true;
	/*var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
 str = str.toLowerCase().replace(re, '');

 // Step 2. Create the FOR loop
 var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
 
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
       return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
   }
	 }
 return true; // Both parts are strictly equal, it returns true => The string is a palindrome
*/
}
module.exports = palindrome
