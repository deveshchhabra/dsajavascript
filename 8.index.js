// let str="geeksforgeeks"
// let count=[]
// for(i=0;i<26;i++){
//     count.push(0)
// }
// for(i=0;i<str.length;i++){
//     count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
// }
// for(i=0;i<26;i++){
//     if(count[i]!=0){
//        console.log(String.fromCharCode(i+"a".charCodeAt(0)),"-",count[i])
//     }
// }



//Check weither the given string is palindrom or not 

// let checkPalindrome=(str)=>{
//     let rev=[...str].reverse().join()
//     return rev==str
// }
// console.log(checkPalindrome('gfg'))

// let checkPalindromeString=(str)=>{
//     let rev=str.split('').reduce((str,ct)=>ct+str+'')
//     return rev===str
// }
// console.log(checkPalindromeString('gfg'))

// let checkPalindrome=(str)=>{
//     let start=0;
//     let end=str.length-1;
//     while(start<end){
//         console.log(str[start])
//         console.log([end-1])

//         if(str[start]!=str[end]){
//             return false
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
// console.log(checkPalindrome('gfg'))

// check for the subsequence string
// let st1="devesh";
// let n=st1.length
// let st2="dev";
// let m=st2.length
// let j=0;
// let subsequence=(st1,st2,m,n)=>{
//     for(i=0;i<n&&j<m;i++){
//         if(st1[i]===st2[j]){
//             j++;
//         }
//     }
//     return (j==m)
// }
// console.log(subsequence(st1,st2,m,n))


// //using palindrome
// let checkSubsequence=(st1,st2,m,n)=>{
//     if(m==0){
//         return true
//     }
//     if(n==0){
//         return false
//     }
//     if(st1[i-1]==st2[j-1]){
//         return checkSubsequence(st1,st2,m-1,n-1)
//     }
//     else{
//         return checkSubsequence(st1,st2,m-1,n)
//     }

// }

// console.log(checkSubsequence("devesh","dev",m,n))

// let areAnagrame=(str1,str2)=>{

//     if(str1.length!=str2.length){
//         return false
//     }
//     str1=str1.split('').sort().join('')
//     str2=str2.split('').sort().join('')
//     return (str1===str2)
// }
// console.log(areAnagrame("rup","pur"))


// let anagrameString=(string1,string2)=>{
//     let cnt=[]
//     if(string1.length!=string2.length){
//         return false
//     }
//     for(i=0;i<256;i++){
//         cnt.push(0)
//     }
//     for(i=0;i<string1.length;i++){
//         cnt[string1[i]]++;
//         cnt[string2[i]]--;
//     }
//     for(i=0;i<256;i++){
//         if(cnt[i]!=0){
//             return false;
//         }
//     }
//     return 1;
// }
// console.log(anagrameString('devesh','vedesh'))

//f
//check weither the given string is palindrome
// let checkPalindrome=(string)=>{
//     let rev=[...string].reverse().join('')
//     return rev===string
// }
// let checkPalindrome=(string)=>{
//     let rev=string.split('').reduce((acc,res)=>res+acc+'')
//     return rev
// }
// let checkPalindrome=(string)=>{
//     let start=0;
//     let end=string.length-1;
//    while(start<end){
//     if(string[start]!=string[end]){
//         return false
//     }
//     start++;
//     end--;
//    }
//    return true 
// }
// console.log(checkPalindrome('dvd'))
// let string="devesh"
// let strlength1=string.length
// let string2="dev"
// let strlength2=string2.length
// let j=0
// let checkSubSequence=(string,string2,strlength1,strlength2)=>{
//     for(i=0;i<strlength1&& j<strlength2;i++){
//         if(string[i]!=string2[i]){
//             j++
//         }
//     }
//     return strlength2==j
// }
// console.log(checkSubSequence(string,string2,strlength1,strlength2))
// let string="
// let Anagram=(string1,string2)=>{
//     if(string1.length!==string2.length){
//         return false
//     }
//     string1=string1.split('').sort().join('')
//     string2=string2.split('').sort().join('')
//     return string1
// }
// let Anagrame=(string1,string2)=>{
//     if(string1.length!==string2.length){
//         return false
//     }
//     let cnt=[]
//     for(i=0;i<256;i++){
//         cnt.push(0)
//     }
//     for(i=0;i<string1.length;i++){
//         cnt[string1[i]]++;
//         cnt[string2[i]]--;
//     }
//     for(i=0;i<256;i++){
//         if(cnt[i]!=0){
//             return false
//         }
//     }
//     return true
// }
// console.log(Anagram('DEVESH','HSEVED'))
// console.log(Anagrame('DEVESH','HSEVED'))
