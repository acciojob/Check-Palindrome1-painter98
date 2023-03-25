// complete the given function

function palindrome(str){
let start=0,end=str.length-1,ans;

while(start<end){
    if(str.charAt(start++)!=str.charAt(end--)){
       return false;
    }
}
	return true;
}
module.exports = palindrome
