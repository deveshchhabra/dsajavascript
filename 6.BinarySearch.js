// let arr=[10,20,30,40,50]
// let n=arr.length

// function binarySearch(arr,n,x)
// {    
//     let low = 0;
//     let high = n-1;
//     let mid;
//     while (low <=high) {
//         mid=parseInt((low+high)/2)       
//         if (arr[mid] == x){
//             return mid;
//         }
//         else if (arr[mid] > x){
//             high= mid - 1;
//         }
//         else
//         {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(arr,n,40)+":")


// function binarySearch(arr,low,high,x){
//     if (low >= high) 
//     {
//     return -1;
//     }
//         let mid = Math.floor((low+high)/2)

//         if (arr[mid] == x)
//             return mid;
 
    
//         if (arr[mid] > x)
//             return binarySearch(arr,low,mid+1,x);
 
//         // Else the element can only be present
//         // in right subarray
//         return binarySearch(arr, mid + 1,high, x);
//     }
// console.log(binarySearch(arr,0,arr.length-1,20))












//index of first occurence of 
// let arr11=[5,10,10,15,15]
// let n11=arr11.length;
// let x=15
// let first=(arr,n,x)=>{ //[5,10,10,15,15] 5 15
//     for(i=0;i<n;i++){ //0<5 1<5 2<5 3<5 
//         if(arr[i]==x){ //arr[0]==5 arr[1]==10 arr[2]==10 arr[3]==15
//             return i; //3
//         }
//     }
//     return -1
// }
// console.log(first(arr11,n11,x))

//Time complexty-O(N)
//Space Complexity -O(1)
// let arr=[10,15,20,20,20]
// let n=arr.length;
// let firstOccurence=(arr,low,high,x)=>{
//     if(low>high)
//     {
//         return -1;
//     }
//     let mid=(low+high)/2
//     if(x>arr[mid])
//     {
//     return firstOccurence(arr,mid+1,high,x)
//     }
//     else if(x<arr[mid])
//    {
//     return firstOccurence(arr,low,mid-1,x);
//    }
//    else{
//     if(mid==0 ||arr[mid-1]!=arr[mid]){
//         return mid
//     }
//     else {
//         return firstOccurence(arr,low,mid-1,x)
//     }
//    }
// }
// console.log(firstOccurence(arr,0,arr.length-1,20))
// let arr=[10,15,20,20,20]
// let n=arr.length-1;
// let firstOccurence1=(arr,n,x)=>{
//     let low = 0;
//     let high = n-1;
//     let mid;
//     while (low <=high) {
//         mid=parseInt((low+high)/2)       
//         if (arr[mid] == x){
//             return mid;
//         }
//         else if (arr[mid] > x){
//             high= mid - 1;
//         }
//         else if(arr[mid]<x)
//         {
//             low = mid + 1;
//         }
//         else{
//             if(mid==0 || arr[mid-1]!=arr[mid]){
//                 return mid
//             }
//             else {
//                 high=mid-1
//             }
//         }
//     }
//     return -1
// }

// console.log(firstOccurence1(arr,n,20))
//dry run this
// let arr=[5,10,10,10,20,20]
// let high=arr.length-1;
// let n1=arr.length-1;
 
// let lastOcc=(arr,low,high,x,n)=>{//1st [5,10,10,10,20,20] 0 5 20 5
//                                  //2nd [5,10,10,10,20,20] 3 5 20 5
//     if(low>high) //1st 0>5 
//         return -1;
    
//     let mid=Math.floor((low+high)/2) //1st 0+5/2=2 //II 3+5/2=4 
//     console.log(mid+"=mid")
//     if(arr[mid]>x){ //arr[4]>20 //1st 10>20 //II 20>20
//         console.log(mid+"o")
//         return lastOcc(arr,low,mid-1,n)
//     }
//     else if(arr[mid]<x) {//10<20 //II 20<20{}
//         console.log(mid+"o")
//         return lastOcc(arr,mid+1,high,n) //1st [5,10,10,10,20,20] 2+1 5 20 5 //
//     }
    

//     else{
//         if(mid === n-1 ||arr[mid]!=arr[mid+1]) { //ii 4==4 
//         return arr[mid+1]
//     }
        
    
//     else{
//         return lastOcc(arr,mid+1,high,n)// [5,10,10,10,20,20] 4 5 20 5
//     }
// }
// }
// console.log(lastOcc(arr,0,high,20,n1)) //[5,10,10,10,20,20] 0 5 20 5


// let countocc=(arr,n,x)=>{
//     let first=firstOccurence1(arr,n,x)
//     if(first==-1){
//         return 0;
//     }
//     else{
//         let last=lastOcc(arr,n,x)
//         return (last-first+1)
//     }
// }
// console.log(countocc(arr,n,20)+":")

// 



// let sqtRoot=(x)=>{
//     let i=1;
//     while(i*i<=x){
//         i++
//     }
//     return i-1;
// }
// console.log(sqtRoot(49))

//Time Complexity -Theta(n)


// let sqtRoot=(x)=>{
//     let low=1,high=x,ans=-1;
//     while(low<high){
//         let mid=Math.floor((low+high)/2)
//         let mSq=mid*mid;
//         if(mSq==x){
//             return mid
//         }
//         else if(mSq>x){
//             high=mid-1;
//         }
//         else{
//             low=mid+1;
//             ans=mid
//         }
//     }
//     return ans
// }
// console.log(sqtRoot(14))


// let arr=[100,200,400,1000,10,20]
// let n=arr.length;

// let Search=(arr,n,x)=>{
//     for(i=0;i<n;i++){
//         if(arr[i]===x){
//             return i
//         }
//     }
//     return -1;
// }

// console.log(Search(arr,n,20))
//
//
// Check 
//

// let arr=[10,20,30,20,10];
// let n=arr.length;
// let Search1=(arr,n,x)=>{
//     let low=0,high=n-1;
//     while(low<=high)
//     {
//         let mid=Math.floor((low+high)/2)
//         if(arr[mid]==x)
//         {
//             return mid
//         }
//         if(arr[low]<arr[mid])
//         {
//             if(x>=arr[low]&&x<arr[mid]){
//                 high=mid-1
//             }
//             else
//             {
//                 low=mid+1
//             }
//         }
//         else
//         {
//             if(x>arr[mid]&&x<arr[high])
//             {
//                 low=mid+1;
//             }
//             else
//             {
//                 high=mid-1;
//             }
//         }
//     }
//     return -1

// }
// console.log(Search1(arr,n,40))


//
// let arr1=[0,2,1,3,2,2]
// let n1=arr1.length;
// let firstrepeatingElement=(arr,n)=>{
// for(i=0;i<n-1;i++){
//     for(j=i+1;j<n;j++){
//         if(arr[i]===arr[j]){
//             return arr[i]
//         }
//     }
// }
// }
// console.log(firstrepeatingElement(arr1,n1))


// let firstrepeatingElement1=(arr,n)=>{
//     for(i=0;i<n-1;i++){
//         if(arr[i]==arr[i+1]){
//             return arr[i]
//         }
//     }
// }
// console.log(firstrepeatingElement1(arr1,n1))
// let visted=[];
// let firstrepeatingElement2=(arr,n)=>{
// for(i=0;i<n;i++){
//     visted[i]=false;
// }
// for(i=0;i<n;i++){
//     if(visted[arr[i]]){
//         return arr[i]
//     }
//     visted[arr[i]]=true;
// }
// }
// console.log(firstrepeatingElement2(arr1,n1))

// let arr=[1,3,2,4,6,5,7,3]
//     //   0 1 2 3 4 5 6 7
// let n=arr.length;
// let t=[]
// let p=[]
// let findrepeation=(arr,n)=>{
//     let slow=arr[0],fast=arr[0];
//     do{
//         slow=arr[slow] //arr[1]=3 
//                        //2nd arr[3]=4 // 3rd arr[4]=6 //4th arr[6]=7
//         fast=arr[arr[fast]]//arr[arr[arr[0]]] //arr[arr[1]] //arr[3]=4
//                        //2nd arr[arr[4]]=arr[6]=7 //3rd arr[arr[7]]=arr[3]=4
//                         //4th arr[[4]]=arr[6]=7 
       
//     }while(slow!=fast){ //3!=4   //4!=7  //6!=4  //7=7
//         slow=arr[0];//slow=1
//         while(slow!=fast){  //1!=7
//             slow=arr[slow]  //slow=arr[1]=3
//             console.log('slow',slow)
//             fast=arr[fast] //fast=arr[7]=3
//             console.log('fast',fast)
//         }
//         return slow
//     }


// }

// console.log(findrepeation(arr,n))


// let arr=[0,3,2,4,6,5,7,3]
//     //   0 1 2 3 4 5 6 7
// let n=arr.length;

// let findrepeation=(arr,n)=>{
//     let slow=arr[0]+1,fast=arr[0]+1;
//     do{
//         slow=arr[slow]+1 //arr[1]=3 
//                        //2nd arr[3]=4 // 3rd arr[4]=6 //4th arr[6]=7
//         fast=arr[arr[fast]+1]+1//arr[arr[arr[0]]] //arr[arr[1]] //arr[3]=4
//                        //2nd arr[arr[4]]=arr[6]=7 //3rd arr[arr[7]]=arr[3]=4
//                         //4th arr[[4]]=arr[6]=7 
       
//     }while(slow!=fast){ //3!=4   //4!=7  //6!=4  //7=7
//         slow=arr[0]+1;//slow=1
//         while(slow!=fast){  //1!=7
//             fast=arr[fast]+1 //fast=arr[7]=3
//             console.log('fast',fast)
//             slow=arr[slow]+1 //slow=arr[1]=3
//             console.log('slow',slow)
//         }
//         return slow-1;
//     }


// }

// console.log(findrepeation(arr,n))
// let arr1=[8,7,6,8,6,6,6,6];
// let n1=arr1.length;
// let find=(arr,n)=>{
//     for(i=0;i<n;i++){
//         let count=1;
//         for(j=i+1;j<n;j++){
//             if(arr[i]==arr[j]){
//                 count++;
//             }
//             if(count>n/2){
//                 return arr[i]
//             }
//         }
//     }
// }
// console.log(find(arr1,n1))
let arr11=[8,8,6,6,4,6];
let n11=arr11.length;

let find1=(arr,n)=>{
    let res=0,count=1;
    for(i=1;i<n;i++)
    {
        if(arr[res]==arr[i])
            count++;
        
        else 
            count--
        
        if(count==0){
            res=i;
            count=1;
        }
    }
    count=0;
    for(i=0;i<n;i++){
        if(arr[res]==arr[i])
            count++;
        
        if(count<=parseInt(n/2))
            res=-1
        
    return res
}
}
console.log(find1(arr11,n11))
//Find the median 
// let a1 = [-5, 3, 6, 12, 15];
// let a2 = [-12, -10, -6, -3, 4, 10];
// // let a1=[10,20,30]
// let n1=a1.length
// // let a2=[5,15,25,35,45]
// let n2=a2.length
// let median=(a1,a2,n1,n2)=>{
//     let begin1=0,end1=n1;
//     while(begin1<end1){
//         let i1=Math.floor((begin1+end1)/2);
//         let i2=Math.floor((n1+n2+1)/2)-i1;
//         let min1=(i1==n1)?INIT_MAX:a1[i1];
//         let max1=(i1==0)?INIT_MIN:a1[i1-1];
//         let min2=(i2==n2)?INIT_MAX:a2[i2];
//         let max2=(i2==0)?INIT_MAX:a1[i2-1];
//         if(max1<=min2&&max2<=min1)
//         {
//             if((n1+n2)%2==0){
//             return Math.floor((Math.max(max1, max2)
//                             + Math.min(min1, min2))
//                             / 2.0);
//             }
//             else{
//                 return Math.max(max1, max2);
//             }
//         }
//         else if(max1>min2){
//             end1=i1-1
//         }
//         else{
//             begin1=i1+1
//         }
//     }
// }

// console.log(median(a1,a2,n1,n2))
//-->Check Tommorow 
// let arr=[10, 20, 30, 40];
// let n=arr.length;
// let minPages=(arr,n,k)=>{
//     if(k==1){
//         return sum(arr,0,n-1)
//     }
//     if(n==1){
//         return arr[0]
//     }

//     let res=Infinity;
//     for(i=1;i<n;i++){
//         res=Math.min(res,Math.max(minPages(arr,i,k-1),sum(arr,i,n-1)));
//     }
//     return res
// }

// let sum=(arr,b,e)=>{
//     let s=0;
//     console.log(e)
//     for(i=b;i<=e;i++){
//         s+=arr[i]
//     }
//     return s;
    
// }

// console.log(minPages(arr,n,2))



//  run this 
// let arr=[10,5,20];
// let n=arr.length;
// let minPages=(arr,n,k)=>{
//     let sum=0,mx=0;
//     for(i=0;i<n;i++){
//         sum+=arr[i]
//         mx=Math.max(mx,arr[i])
//     }
//     let low=mx,high=sum,res=0;
//     while(low<=high){
//         let mid=Math.floor((high+low)/2)
//         if(isFeasible(arr,n,k,mid)){
//             res=mid;
//             high=mid-1;
//         }
//         else{
//         low=mid+1;
//     }
// }
// return res;
// }

// let isFeasible=(arr,n,k,ans)=>{
//     let req=1,sum=0;
//     for(i=0;i<n;i++){
//         if(sum+arr[i]>ans){
//             req++;
//             sum=arr[i];
//         }
//         else{
//             sum+=arr[i];
//         }
//     }
//     return(req<=k);
// }

// console.log(minPages(arr,n,2))