const array = [123,[23,46],4,5,[5,6,7,[87,6]]]
// Create a flat array and find the lowest amount

function createFlat(array){
    if(array.length===undefined)
    {
        return array;
    }
    let arr=[];
    for(let i=0;i<array.length;i++)
    {
        let curr=array[i];
        if(curr.length===undefined)
        {
            arr.push(curr);
            
        }
        else{
            // IF IT IS STILL NESTED ARRAY CALL RECURSION
             const resArr=createFlat(curr);
             for(let k=0;k<resArr.length;k++)
             {
                 arr.push(resArr[k]);
             }
        }
    }
   
    
    return arr;
    
}
function findMin(arr)
{
     let minAns=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<minAns)
        {
            minAns=arr[i];
        }
        
    }
    return minAns;
    
}

function createFlatAndFindMin(array)
{
    let flatArr=createFlat(array)
    let minEl=findMin(flatArr);
    return minEl;
}
let minEl=createFlatAndFindMin(array);
console.log("min el is ", minEl)