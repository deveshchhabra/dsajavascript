

// Inset the element 


// let arr=[1,2,5,6,]
// let sizeofarr=arr.length
// console.log(sizeofarr)
// //Capacity Doesnot Matter a Lot 
// //Because it's Dynamic Size Arr
// let insertitem=15;
// let position=3;
// let capacity=5;
// const insertArray=(arr,n,x,pos,cap)=>{
//     console.log(arr);
//     if(n==cap){
//         return n
//     }
//     let idx=pos-1
//     for(i=n-1;i>idx;i--){
//      arr[i+1]=arr[i]
//     }
//     arr[idx]=x
//     return arr;
// }
// console.log(insertArray(arr,sizeofarr,insertitem,position,capacity))



// Delete the element 
// let arr=[1,2,3,4,12]
// let deleteElement=1
// let sizearr=arr.length

// let deleteArray=(arr,sizearr,deleteElement)=>{
//     for(i=0;i<sizearr;i++){
//         if(arr[i]==deleteElement){
//             break;
//         }
//         if(i==sizearr){
//             return i
//         }
//     }
//     for(j=i;j<sizearr;j++){
//         arr[j]=arr[j+1]
//         arr[sizearr]=NaN;
//     }
//     return arr;


// }
// console.log(deleteArray(arr,sizearr,deleteElement));



//Largest Among all these 

// let arr=[1,2,4,5,3]
// let n=arr.length;
// let largest=(arr,n)=>{
//     for(i=0;i<n;i++){
//         let flag=true;
//         for(j=0;j<n;j++){ 
//             if(arr[j]>arr[i]){
//             flag=false
//             break;
//         }
//     }
//     if(flag==true){
//         return arr[i]

//     }
//     }

//     console.log(arr)

// }
// console.log(largest(arr,n))


//Effcient solution

// let arr=[5,4,5,10,40,50] 
// let n=arr.length;
// let largest=(arr,n)=>{
//     let res=0;
//     for(i=1;i<n;i++){
//         if(arr[i]>arr[res])
//         res=i
//     }
//     return res
// }

// console.log(arr[largest(arr,n)])

// let secondlargest=(arr,n)=>{
//     let largest1=largest(arr,n);
//     let res=-1;
//     for(i=0;i<n;i++){
//         if(arr[i]!=arr[largest1])
//         {
//             if(res==-1){
//                 res=i 
//             }
//             // console.log(arr[i])
            
//             if(arr[i]>arr[res])
//             {
//                 // console.log(arr[i])
//                 res=i
//             }
//         }
        
//     }
//     return res;
// }
// console.log(arr[secondlargest(arr,arr.length)])


// //effecient solution

// let secondlargest2=(arr,n)=>{
//     let res=-1,largest=0;
//     for(i=1;i<n;i++){
//         if(arr[i]>arr[largest]){
//             res=largest;
//             largest=i;
//         }
//         else if(arr[i]!=arr[largest]){
//             if(res==-1||arr[i]>arr[res]){
//                 res=i;
//             }

//         }
//     }
//     return arr[res];

// }
// console.log(secondlargest2(arr,n))

// let isSorted=(arr,n)=>{
//     for(i=0;i<n;i++){
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[i]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// // Time complexity o(n^2)
// console.log(isSorted(arr,n))


// let sorted=(arr)=>{
//     for(i=1;i<n;i++){
//         if(arr[i]<arr[i+1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(sorted(arr))


// //Time Complexity O(n)


// let reverse=(arr,n)=>{
//     let low=0,high=n-1;
//     while(low<high){
//         let temp=arr[low];
//         arr[low]=arr[high];
//         arr[high]=temp;
//         high--;
//         low++;
//     }
//     return arr
// }



// console.log(reverse(arr,n))



// // Remove from Sorted Array
// let arr1=[4,5,5,10,40,50] 

// let remDuplicates=(arr,n)=>{
//     let temp=[];
//     temp[0]=arr[0];
//     let res=1;
//     for(i=1;i<n;i++){
//         if(temp[res-1]!=arr[i]){
//             temp[res]=arr[i]
//             res++;
//         }
//     }
//     console.log(temp)
//     for(i=0;i<res;i++){
//         arr[i]=temp[i]
//     }
//     return arr;
// }

// console.log(remDuplicates(arr1,n))



// 10,5,0,0,8,0,9,0
//  Remove Non Zeros Element
// let i=10;

// let arr1=[10,5,0,0,8,9,0,1,3,0]
// let n1=arr1.length
// //Time Complexity
// //O(n^2)  --->Think $&improve
// //

// let swap=(arr,i,j)=>{
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp
// }
// let moveToEnd=(arr,n)=>
// {
//     // console.log(arr)
//     for(i=0;i<n;i++)
//     {
//         if(arr[i]===0){
//         // console.log(arr[i])
//          for(j=i+1;j<n;j++)
//          {
//             if(arr[j]!=0)
//             {
                
//                 swap(arr,i,j)                
//             }
//         }
//     }
// }
// return arr
// }

// console.log(moveToEnd(arr1,n1))



// //Effecient solution
// // Time Complexity - 


// let movieZero=(arr,n)=>{
//     let count=0;
//     for(i=0;i<n;i++){
//         if(arr[i]!=0){
//             swap(arr[i],arr[count])
//             count++;
//         }
//     }
//     return arr
// }

// console.log(movieZero(arr1,n1))


// //Rotate by d
// let arr=[1,2,3,4,5] 
// let n=arr.length;
// let leftRotate=(arr,n)=>{
//     console.log(arr)
//     let temp=arr[0]
//     for(i=1;i<n;i++){
//         arr[i-1]=arr[i]
//     }
//     arr[n-1]=temp
//     return arr
// }
// console.log(leftRotate(arr,n))

// let leftRotate1=(arr,n,d)=>{
//     for(i=0;i<d;i++){
//         leftRotate(arr,n)
//     }
//     return arr
// }
// console.log(leftRotate1(arr,n,3))

// // let leftRotateI=(arr,n)=>{
// //     console.log(arr)
// //     let temp=arr[0]
// //     for(i=0;i<n;i++){
// //         arr[i-1]=arr[i]
// //     }
// //     arr[n-1]=temp
// //     return arr
// // }

// // console.log(leftRotate2(leftRotateI(arr),n))



// let leftRotate2=(arr,n,d)=>{
//     console.log(arr)
//     let temp=[];
//     for(i=0;i<d;i++){
//         temp[i]=arr[i];
//     }
//     for(i=d;i<n;i++){
//         arr[i-d]=arr[i]
//     }

//     for(i=0;i<d;i++){
//         arr[n-d+i]=temp[i]
//     }
//     return arr
// }

// console.log(leftRotate2(arr,n,2))
// let temp=[];
// let arr=[7,10,4,10,6,5,2]
// let leader=(arr,n)=>{
//     for(i=0;i<n;i++){

//         let flag=false;
//         for(j=i+1;j<n;j++){
//             if(arr[i]<arr[j]){
//                 flag=true;
//                 break;
//             }
//         }
//         if(flag==false){
//             temp.push(arr[i])
//         }
//     }
//     console.log(temp)
// }

// leader(arr,arr.length)


// let leader1=(arr,n)=>{
//     let current_ldr=arr[n-1]
//     for(i=0;i<n;i++){
//         if(current_ldr<arr[i]){
//             current_ldr=arr[i];
//             console.log(current_ldr)
//         }
//     }
// }

// leader1(arr,arr.length)


// //Naive Method 
// let arr1=[2,3,10,6,4,8,1]
// n=arr1.length;//7
// let maxDiff=(arr,n)=>{
//     let res=arr[1]-arr[0]; //3-2 = 1
//     let minVal=arr[0];// 3
//     for(j=1;j<n;j++){ j=2
//         res=Math.max(res,arr[j]-minVal); //Max(8,6-2) //Max(8,4) =8
//         minVal=Math.min(minVal,arr[j]); //(2,10)
//     }
//     return res;
// }

// console.log(maxDiff(arr,n)+"::")

// let arr11=[40,50,50,50]//
// let n11=arr11.length;//4
// let printFreq=(arr,n)=>{//
//     let freq=1,i=1;
//     while(i<n){//2<4 
//         while(i<n &&arr[i]==arr[i-1]){// 4<4 50==50
//             freq++; // f-3
//             i++; //i=4
//         }
//         console.log(arr[i-1]+"-"+freq)// 40->1 
//         i++; //i=5
//         freq=1;// ,
//     }
//         if(n==1 ||arr[n-1]!=arr[n-2]){
//             console.log(arr[n-1]+"-"+1);
//         }
    

// }

// printFreq(arr11,n11)


//

//Window Sliding technique
//Time Complexity --O((n-k)Xk)
// arr=[1,8,30,-5,20,7]
// n=arr.length;
// k=3;
// let maxsum=(arr,n,k)=>{// arr n=6 k=3 
//     let max_sum=0; //max_sum=39
//     for(i=0;i+k-1<n;i++){//i=1 1+3-1<6 0+1
//         let sum=0; // sum=39
//         for(j=0;j<k;j++){//j=1 j<3 0+1
//             sum+=arr[i+j] //8+30-5=32
//         }
//         max_sum=Math.max(sum,max_sum) //32
//     }
//     return max_sum
// }

// console.log(maxsum(arr,n,k))
// arr=[1,8,30,-5,20,7]
// n=arr.length;
// k=3;

// let curr_sum=0;
// for(i=0;i<k;i++){ //i=1 1<3
//         curr_sum+=arr[i] //1+8+30=39 8+30+-5=33 30-5+20=45
// }
// let maxsum=curr_sum
// for(i=k;i<n;i++){//i=5 5<6 
//     curr_sum+=(arr[i]-arr[i-k]); // 30-1=29  -5-8=-13  20-30=-10 
//     maxsum=Math.max(maxsum,curr_sum)
// }
// console.log(maxsum)


//stocks by and sell 

// let price=[100, 180, 260, 310, 40, 535, 695 ]
// let price=[1,5,3,8,12];
// let start=0;
// let end=price.length-1;
// let profit=0;
// let maxProfit=(price,start,end)=>{                         //\\//\\ maxProfit(price,2,4)
//     if(end<=start){ //4<=0
//         return  0;
//     }
//     for(i=start;i<end;i++){ //i=0 0<4                        //\\//\\i=2 i<4
//         for(j=i+1;j<=end;j++){ //j=1 0<=4 j=2 2<=4           //\\ //\\ j=3  j<=4 j=4 j<=4
//             if(price[j]>price[i]){ //5>1                     //\\//\\3>2  4>2
//                 let curr_profit=price[j]-price[i]+maxProfit(price,start,i-1)+maxProfit(price,j+1,end);
//                 //\\//\\ 8-3+max(price,2,1)+max(price,4,4)
//                 //\\//\\5+return 0 +return 0
//                 //\\//\\5+ 12-3+max(price,2,)

//                 // 5 - 1 +maxprofit(price,0,-1)+maxProfit(price,2,4)   //     
//                              //   
//                              //            4+return 0+ return 9 =13   
//                 profit=Math.max(profit,curr_profit); //13
//             }
//         }
//     }
//     return profit;
// }
// console.log(maxProfit(price,start,end))


// let maxProfit9=(price,end)=>{
//     let maxprofit=0;
//     for(i=1;i<=end;i++)
//         if(price[i]>price[i-1])
//             maxprofit+=price[i]-price[i-1];
//     return maxprofit
// }
// document.write(maxProfit9(price,end))
// console.log(maxProfit9(price,end))



// Driver code 
// let arr=[1,4,20,3,10,5];
// let n=arr.length;
// let sum=33;

// let isSum=(arr,n,sum)=>{ //arr 6 33
//     let curr_sum=arr[0],s=0; //curr_sum=42 s=0
//     for(e=1;e<n;e++){ //e=1 1<6
//         while(curr_sum>sum&& s<e-1){ //47>33 s<0 
//             curr_sum-=arr[s]; //20,3,10,5
//             s++;//s=2
//         }
//         if(curr_sum==sum){//33==33
//             return true;
//         }
//         if(e<n){//1<6
//             curr_sum+=arr[e] //20+3+10=33
//         }
//     }
//     return curr_sum==sum;

// }
// console.log(isSum(arr,n,sum))

let arr=[3,0,1,2,5,1,5,4,5,3,2]
let n=arr.length;
let getWater=(arr,n)=>{ //3,0,1,2,5 //n=4
    let res=0; //res=0
    for(i=1;i<n-1;i++){ //i=1 1<4
        let lmax=arr[i];//imax=0
        for(j=0;j<i;j++){ //j=2
            lmax=Math.max(lmax,arr[j])//3,0 =3
        }
        // console.log(lmax)
        let rmax=arr[i];//rmax=0 
        for(j=i+1;j<n;j++){
            rmax=Math.max(rmax,arr[j])//5
        }
        console.log(rmax)
        res=res+(Math.min(lmax,rmax)-arr[i]) //0+3-0=3 3+3-1=5 5+3-2=6
    }
    return res   
}

console.log(getWater(arr,n))

let arr1=[5,0,6,2,3]
let n1=arr1.length;
let getWater1=(arr,n)=>{
    let res=0;
    let leftMax=[]
    let rightMax=[]
    leftMax[0]=arr[0];
    for(i=1;i<n;i++){
        leftMax[i]=Math.max(arr[i],leftMax[i-1])
    }
    rightMax[n-1]=arr[n-1]
    
    for(i=n-2;i>=0;i--){
        rightMax[i]=Math.max(arr[i],rightMax[i+1])
    }
    console.log(leftMax)
    console.log(rightMax)

    for(i=1;i<n-1;i++)
    {
        res=res+(Math.min(leftMax[i],rightMax[i])-arr[i]) 
    }
        return res   
    
}
console.log(getWater1(arr1,n1))

let arr11=[0,1,1,1,1,0]
let n11=arr11.length;
let maxConsecutive=(arr,n)=>{
    let res=0;
    for(i=0;i<n;i++){
        let curr=0;
        for(j=i;j<n;j++){
            if(arr[j]==1)curr++
            else break;
        }
        res=Math.max(res,curr)
    }
    return res
}
console.log(maxConsecutive(arr11,n11))