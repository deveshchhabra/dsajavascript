// let arr=[50,20,40,10]
// console.log(arr.sort())
// console.log(arr)
// console.log(arr.reverse())



// //---> try to implement in c++ style //

// //
// console.log("I am the bestie")

// let arr1 = [[3, 10], [2, 8], [5, 4]];

// console.log(arr1.sort((a, b) => b[1] - a[1]));


// let swap=(arr,i,j)=>{
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp
// }
// let arr2=[1,5,7,4]
// let n=arr2.length;
// let bubbleSort=(arr,n)=>{
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-1;j++){
//             if(arr[j]>arr[j+1]){
//                 // temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp;
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     console.log(arr2)
    
//     return arr
// }
// console.log(bubbleSort(arr2,n))

// //OPtimized 

// let OP1bubbleSort=(arr,n)=>{
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 // temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp;
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     console.log(arr2)
    
//     return arr
// }
// console.log(OP1bubbleSort(arr2,n))


// let OP2bubbleSort=(arr,n)=>{
//     for(i=0;i<n-1;i++){
//         let swap=false
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 // temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp;
//                 swap(arr,j,j+1)
//                 swap=true
//             }
//         }
//         if(swap==false){
//             break;
//         }
//     }
//     console.log(arr2)
    
//     return arr
// }
// console.log(OP2bubbleSort(arr2,n))

//See this tommorow
// let arr=[10,5,8,20,2,18];
// let n=arr.length;

// let SelectSort=(arr,n)=>{
//     let temp=[];
//     for(i=0;i<n;i++)
//     {
//         let min_id=0;
//         for(j=1;j<n;j++)
//             if(arr[j]<arr[min_id])
//                 min_id=j;
//                 // console.log(j)
            
//             // console.log(temp[i])
//             temp[i]=arr[min_id]
//             arr[min_id]=Infinity;
        
        
//         for(k=0;k<n;k++)
//             // console.log(temp[i])
//             arr[k]=temp[k]
        
        
//             return arr
//     }
//     }

// // console.log(arr)
// console.log(SelectSort(arr,n))
// let arr=[10,5,8,20,2,18]
// let swap=(arr,i,j)=>{
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp
//     }
// let SelectSort1=(arr,n)=>{
//     for(i=0;i<n-1;i++){ //i=0 i<5
//         min_id=i //mid_id=0
//         for(j=i+1;j<n;j++) //j=1 j<6
//             if(arr[j]<arr[min_id]){ //5<10
//                 min_id=j //mid_id=1
//             }
//             swap(arr,min_id,i)
        
//         }
//         return arr
// }

// console.log(SelectSort1(arr,n))


//Insertion sort 
// let arr=[20,5,40,60,10,30]
// let n=arr.length;
// console.log(n)
// let insertionSort=(arr,n)=>{//arr,n
//    for(i=1;i<n;i++) //i=1 1<6 
//    {
//     let key=arr[i]; //key=arr[1] key=20
//     let j=i-1;//1-1=0
//     while(j>=0 && arr[j]>key) //arr[0]>key 20>5
//         {
//         arr[j+1]=arr[j]; //arr[1]=arr[0] arr[1]=20
//         j--; //j=-1
//         console.log(arr)
//         }
//         arr[j+1]=key   //arr[-1+1]=5
//     }
// return arr;

// }

// console.log(insertionSort(arr,n))


// //merge sort 
// let a=[10,15,20,20]
// let b=[1,12]

// let merge=(a,b)=>{
//     let c=[];
//     for(i=0;i<a.length;i++){
//         c[i]=a[i]
//     }
//     for(j=0;j<b.length;j++){
//         c[i+j]=b[j]
//     }
//     c.sort()
   
//     return c
// }

// console.log(merge(a,b))



// let a1=[10,20,50];
// let m1=a1.length;
// let b1=[5,50,50]
// let n1=b1.length;


// let merge1=(a,b,m,n)=>{
//     let i=0,j=0;
//     let temp=[]
//     while(i<m&& j<n){
//         console.log(a[i]+"k")
//         if(a[i]<b[j]){
//             temp.push(a[i])
//             i++
//         }
//         else{
//             temp.push(b[i]);
//             j++;
//         }
    
//     while(i<m){
//         temp.push(a[i])
//         i++
//     }
//     while(j<n){
//         temp.push(b[j])
//         j++
    
//     }
//     console.log(temp)
// }
// }
// merge1(a1,b1,m1,n1)
// //merge sort function


// let merge=(arr,low,mid,high)=>{
//     console.log(arr+"L")
//     let n1=mid-low+1;
//     let n2=high-mid;

//     let left=[]
//     let right=[]

//     for(i=0;i<n1;i++){left[i]=arr[low+i]}console.log(left)
//     for(j=0;j<n2;j++){right[j]=arr[n1+j]}console.log(right)
//      i=0,j=0,k=0;
//     while(i<n1 && j<n2){
//         if(left[i]<=right[i]){arr[k]=left[i];i++;k++}
//         else{arr[k]=right[j];j++;k++}
        
//     }
//     while(i<n1){arr[k]=left[i];i++;k++}
//     while(j<n2){arr[k]=right[i];i++;k++}

//     console.log(arr)
// }



// let arr=[10,20,40,20,30]
// let low=0;
// let mid=parseInt(arr.length/2)
// let high=arr.length-1;

// merge(arr,low,mid,high)



 // JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
// function merge(arr, l, m, r)
// {
// 	var n1 = m - l + 1;
// 	var n2 = r - m;

// 	// Create temp arrays
// 	var L = new Array(n1); 
// 	var R = new Array(n2);

// 	// Copy data to temp arrays L[] and R[]
// 	for (var i = 0; i < n1; i++)
// 		L[i] = arr[l + i];
// 	for (var j = 0; j < n2; j++)
// 		R[j] = arr[m + 1 + j];

// 	// Merge the temp arrays back into arr[l..r]

// 	// Initial index of first subarray
// 	var i = 0;

// 	// Initial index of second subarray
// 	var j = 0;

// 	// Initial index of merged subarray
// 	var k = l;

// 	while (i < n1 && j < n2) {
// 		if (L[i] <= R[j]) {
// 			arr[k] = L[i];
// 			i++;
// 		}
// 		else {
// 			arr[k] = R[j];
// 			j++;
// 		}
// 		k++;
// 	}

// 	// Copy the remaining elements of
// 	// L[], if there are any
// 	while (i < n1) {
// 		arr[k] = L[i];
// 		i++;
// 		k++;
// 	}

// 	// Copy the remaining elements of
// 	// R[], if there are any
// 	while (j < n2) {
// 		arr[k] = R[j];
// 		j++;
// 		k++;
// 	}
// }

// // l is for left index and r is
// // right index of the sub-array
// // of arr to be sorted
// function mergeSort(arr,l, r){
// 	if(l>=r){
// 		return;
// 	}
// 	var m =l+ parseInt((r-l)/2);
// 	mergeSort(arr,l,m);
// 	mergeSort(arr,m+1,r);
// 	merge(arr,l,m,r);
// }

// // Function to print an array
// function printArray( A, size)
// {
// 	for (var i = 0; i < size; i++)
// 	console.log( A[i] + " ");
// }


// var arr = [ 12, 11, 13, 5, 6, 7 ];
// 	var arr_size = arr.length;

// 	console.log( "Given array is ");
// 	printArray(arr, arr_size);

// 	mergeSort(arr, 0, arr_size - 1);

// 	console.log( "Sorted array is ");
// 	printArray(arr, arr_size);

// This code is contributed by SoumikMondal


// let a=[10,20,20,40,60]
// // let n=a.length;
// let b=[2,20,20,20,40]
// let m=b.length;
// let temp=[]
// let intersection=(a,b)=>{
//     for(i=0;i<m;i++){
//         if(i>0&&a[i]===a[i+1]){
//             continue
//         }
//         for(j=0;j<n;j++){
//             if(a[i]==b[j])
//             {
//                 temp.push(a[i])
//                 break
//             }
//         }
//     }
//     console.log(temp)

// }

// intersection(a,b)
// let temp11=[];

// let intersection1=(a,b)=>{
//     let i=0,j=0;
//     while(i<a.length && j<b.length){
//         if(i>0 && a[i]==a[i-1]){ i++; continue;}
//         if(a[i]<b[i]){i++;}
//         else if(a[i]>b[i]){j++;}
//         else {
//             temp11.push(i)
//              i++;
//              j++;
//             }
//     }

//     return temp11
// }

// nums1 =[1,2,2,1]
// nums2 =[2,2]
// console.log(intersection1(a,b))




//  let temp1=[]
// var intersection = function(nums1, nums2) {
//     let i=0,j=0;
//     while(i<nums1.length && j<nums2.length){
//         if(i>0 && nums1[i]==nums1[i-1]){ i++; continue;}
//         if(nums1[i]<nums2[i]){i++;}
//         else if(nums1[i]>nums2[i]){j++;}
//         else {
//             temp1.push(i)
//              i++;
//              j++;
//             }
//     }

//     return temp1
    
// };
// console.log(intersection(nums1,nums2)+"l")
// let a=[10,20,30]
// let m=a.length;
// console.log(m)
// let b=[5,20,40,40]
// let n=b.length;
// console.log(n)


// let printUnion=(a,b,m,n)=>{
//     let c=[];
//     for(i=0;i<m;i++){
//         c=a[i]
//     }
//     for(j=0;j<n;j++){
//         c=b[j]
//     }
//     console.log(c)
//     c.sort()
//     // for(i=0;i<m+n;i++){
//     //     if(i==0 ||c[i] != c[i-1]){
//     //         c.push(a[i])
//     //     }
//     // }
//     // return c
// }

// console.log(printUnion(a,b,m,n))

//Naive Partion 

// arr=[5,13,6,9,12,11,8]
// let partion=(arr,l,h,p)=>{
//     console.log(arr)

//     let temp=[],index=0;
//     for(i=l;i<=h;i++){
//         if(arr[i]<=arr[p]){
//             console.log(arr[i])
//             // temp.push(arr[i])
//             temp[index]=arr[i];
//             index++;
//         }
//     }
//         for(i=l;i<=h;i++){
//             if(arr[i]>arr[p]){
//                 // temp.push(arr[i])
//                 temp[index]=arr[i];
//                 index++;
//         }
//     }
//     return temp
//     for(i=l;i<=h;i++){
//         arr[i]=temp[i-l]
//     }
//     return arr;
// }
// console.log(partion(arr,0,6,6))


// Lamoute Pa'rtion
let Swap=(arr,i,j)=>{
	    let temp=arr[i];
	    arr[i]=arr[j];
	    arr[j]=temp
	}

// let arr=[70,80,30,90,40,50,10]
    //    ^                 ^    
    //    |l                |h    

//Coner Case
// let arr=[70,60,80,40,30]
// let arr=[30,60,80,40,80]

// let low=0;
// let high=arr.length-1; //
// Swap(arr,0,high)
// console.log(arr)
let lpartion=(arr,l,h)=>{ //arr 1 6 
	let pivot=arr[h]; //arr[6]=70
	let i=l-1; //0-1=-1
	for(j=l;j<=h-1;j++){ //j=1 j<5
		if(arr[j]<=pivot){ //80<70 //false
			i++; // i = 0
			Swap(arr,i,j) //swap(arr,0,0)
		}
	}
	Swap(arr,i+1,h) //arr ,1,6
	console.log(arr)
	return i+1
}



// console.log(partition(arr,low,high))

// console.log(lpartion(arr,low,high))



//Hoare's partion
// let arr = [ 10, 7, 8, 9, 1, 5 ]; 
// let n=arr.length
let partion=(arr,l,h)=>{
	
	let pivot=arr[l]; //10
	let i=l-1,j=h+1; //i=-1 j=5
	while(true){ 
		do{
			i++; //j=1
		}while(arr[i] < pivot); //7<10
		
		do{
			j--; //j=4
		}while(arr[j] > pivot) //1>10
		
		if(i>=j) //1>4
		return j; //f
		
		let temp = arr[i]; 
		arr[i] = arr[j]; 
		arr[j] = temp; 
		return arr	
	}
}
// console.log(partion(arr,0,n-1))




//QuickSort
let arr=[8,4,7,9,3,10,4]
let l=0;
let h=arr.length-1;
let QuickSort=(arr,l,h)=>{
	if(l<h){
		let p=partion(arr,l,h);
		QuickSort(arr,l,p-1);
		QuickSort(arr,p+1,h);
	}
	return arr;
}
console.log(QuickSort(arr,l,h))


let arr1=[10,20,50,40,30]
let n1=arr1.length;
let cycleSort=(arr,n)=>{
	// console.log(arr)
	for(cs=0;cs<n-1;cs++)
	{ //cs=0
		let item=arr[cs]; //item=10
		let pos=cs; // pos=0
		for(i=cs+1;i<n;i++)
		{ //i=1
			if(arr[i]<item)
			{ //arr[1]<item 20<10 
				pos++; //pos=1
			}
		}
		let temp = item;
		item = arr[pos];
		arr[pos] = temp;
		while(pos!=cs){
		
		pos=cs;
		for(i=cs+1;i<n;i++)
		{
			if(arr[i]<item)
			{
				pos++;
			}
		}
		
		let temp = item;
		item = arr[pos];
		arr[pos] = temp;
	}

}
return arr
}
console.log(cycleSort(arr1,n1))

