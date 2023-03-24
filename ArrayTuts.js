//All the fucntions and demo related array is present here

const print = (arr)=>
{
    console.log(arr);
}
//=========================================Printing==========================================================
const printArr =() =>
{
    const arr = [1,2,3,4,5];
    
    arr.forEach(ele=>{console.log(ele)});  // polyfills forEarch

    for(let a of arr)    // for of will take the element and for in will take the index
    {
        console.log(a);
    }

    for(let i=0;i<arr.length;i++) 
    {
        console.log(arr[i]);
    }
}

//printArr()
//===========================================================================================================


//===========================================Adding Element===================================================
const addInArray = () =>
{
    const arr = [1,2,3,4,5];
    arr.push(6);  // in the rear 
    //print(arr) // [ 1, 2, 3, 4, 5, 6 ]

    arr.unshift(0); // in the front
    //print(arr); //[0, 1, 2, 3, 4, 5, 6]

    arr.splice(3,0,99);    //adding with the position --> splice(index,0,item)    --> 0 for addition and 1 for removing
    //print(arr); //[0, 1, 2, 99,3, 4, 5,  6]

    let abc = [-1,...arr];   // split operation --> adding at the front
    //print(abc); //[-1, 0, 1, 2, 99, 3, 4, 5, 6]     // Assignment is not possible in const variable but the operation can be implemented

    abc = [...arr,100]; //adding at the end
    print(abc); //[0, 1, 2,  99, 3, 4, 5, 6, 100]
}


//addInArray();

//================================================================================================================


//===========================================Removing Arr============================================================
const removeFromArr = () =>
{
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    arr.pop();  // removing from the rear
    //print(arr) //  [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15]

    arr.shift()  // removing from the front
    //print(arr) //[2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15]

    arr.splice(2,1)  // spilce(index,1)  -> remove the 2nd index element
    print(arr);  //[2,  3,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15]

    //const varibales assignment are not possible else you can use the functions to manipylate

}

//removeFromArr();
//=========================================================================================================


//=======================================Updating Array====================================================
const updatingArr =  () =>
{
    const arr = [1,2,3,4,5,6];
    arr.splice(3,1,-4)    // splice(index,1,element)   
    print(arr);  //[ 1, 2, 3, -4, 5, 6 ]
}

//updatingArr()
//==========================================================================================================



