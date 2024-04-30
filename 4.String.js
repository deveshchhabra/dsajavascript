//Number of Occurence in Sorted Order

// let str="geeksforgeeks"
// char="abcdefghijklmnopqrstuvwxyz"
// let count=[]
// for(i=0;i<26;i++){
//     count.push(0)
// }

// // console.log('g'.charCodeAt(0)-'a'.charCodeAt(0))

// for(i=0;i<str.length;i++){
//     count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
//     //str[4] pai joho character code hai 
//     //e
// }
// for(i=0;i<26;i++){
//     if(count[i]!=0){
//        console.log(String.fromCharCode(i+"a".charCodeAt(0)),"-",count[i])
//     }
// }
// console.log(count)
// console.log(str[count])


//Time Complexity is -O(n)

// let str1="gfg"
// let str2=['g','f','g','\0']
// console.log(str1.length)
// console.log(str2.length)







// const str3="gfg"




// //Check the palindrome string or not
// st="aa"
// const palindrome=(st)=>{
//     const rev=[...st].reverse().join('')
//     console.log(rev)
    
//     return (rev==st)
// }

// console.log(palindrome('aa'))



// let palindrome2=(str)=>{
//     let begin=0;
//     let end=str.length;
//     while(begin<end){
//         if(str.charAt(begin)!=str.charAt(end)){
//             return false
//         }
//     begin++;
//     end--;
// }
// return true

// }

// console.log(palindrome2(st))

//Check if A string is subsequence of  other


// s1="ABCDEF"
// n=s1.length
// s2="AD"
// m=s2.length


// let isSub=(s1,s2,n,m)=>{
//     let j=0;
//     for(i=0;i<n&&j<m;i++){
//         if(s1[i]==s2[j]){
//             j++;
//         }
//     }
//     return j==m
// }

// console.log(isSub(s1,s2,n,m)+"j")


// let isSub2=(s1,s2,n,m)=>{
//     if(m==0)return true
//     if(n==0)return false
//     if(s1[n-1]==s2[m-1])return isSub2(s1,s2,n-1,m-1)
//     else return isSub2(s1,s2,n-1,m)

// }

// console.log(isSub2(s1,s2,n,m)+"k")















// let s1="thisisme"
// let s2="thisisme"


// let areAnagram=(s1,s2)=>{
//     if(s1.length!=s2.length){
//         return false;
//     }
   
//     s1=s1.split('').sort().join('')
//     s2=s2.split('').sort().join('')

//     return (s1===s2)
// }

// console.log(areAnagram(s1,s2))

// console.log(areAnagram(s1,s2))

// // let char=256
// let areAnagram2=(s1,s2)=>{
//     if(s1.length!=s2.length){
//         return false
//     }
//     for(i=0;i<256;i++){
//         char[i]
//     }
//     for(i=0;i<s1.length;i++){
//         count[s1[i]]++;
//         count[s2[i]]--;
//     }
//     for(i=0;i<char;i++){
//         if(count[i]!=0){
//             return false
//         }
//    }
//    return true;
// }

// console.log(areAnagram2("this","isth"))


// //
let txt="ABCABCD"
let pat="ABCD"
// let txt = "AABAACAADAABAAABAA";
// let pat = "AABA";
let patSearching=(txt,pat)=>{
    let m=pat.length
    let n=txt.length
    
    for(i=0;i<=n-m;i++){
        for(j=0;j<m;j++){
            if(txt[i+j] != pat[j])break;
        }
            if(j==m)console.log("",i)
          
        
}
}
patSearching(txt,pat)
let txt1="ABCABCD"
let pat1="ABCD"

let patternSearch=(txt,dis)=>{
    let n=txt.length;
    let m=dis.length;
    for(i=0;i<=n-m;){
        let j;
        for(j=0;j<m;j++){
            if(dis[j]!=txt[i+j]){
                break;
            }
        }
            if(j==m)                console.log("j="+i+"=j")
 
            if(j==0) i++
            
            else i=(i+j);
            
        }

    }



patternSearch(txt1,pat1)
// console.log("j")

let m = pat.length; 
let n = txt.length;
let d=256;
let q=101;

let RRBSearch=(pat,txt,m,n)=>{
    let h=1;
    for(i=1;i<m-1;i++){
        h=(h*d)%q
    }
    let p=0,t=0;
    for(i=0;i<m;i++){
        p=(p*d+pat[i])%q;
        t=(p*d+txt[i])%q;
    }
    for(i=0;i<=m-n;i++){
        if(p==t){
            let flag=true;
            for(j=0;j<m;j++){
                if(txt[i+j]!=pat[j]){
                    flag=false;
                    break;
                }
                if(flag==true){
                    document.write(i)
                    console.log(i+"k")        
                        }
                if(i<n-m){
                    t=((d*(t-txt[i]*h))+txt[i+m]%q);
                }
            if(t<0){
                t=t+q;
            }
            }
        }
    }
    }


RRBSearch(pat,txt,m,n)