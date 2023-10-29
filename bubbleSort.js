const data=[ -10,-20,90,100,30,120,70, -90,45,999,-890];

function bubbleSort(arr)
{
     for(var i=0;i<arr.length;i++){  
        for(var j=0;j<arr.length-i-1;j++){  
            if(arr[j]>arr[j+1]){  
                var tempValue= arr[j];  
                arr[j]=arr[j+1];  
                arr[j+1]=tempValue;  
            }  
        }  
    }  
    console.log("array is sorted using bubble sort algorithm and the sorted array is ");  
    console.log(arr);  
}
bubbleSort(data)