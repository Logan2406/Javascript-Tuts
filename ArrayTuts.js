//All the fucntions and demo related array is present here

const print = (arr)=>
{
    console.log(arr);
}

const tostr = (arr)=>
{
    console.log(arr.toString());
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



//=============================Array Concat==================================================================
const arrConcat =  () =>
{
    const a = [1,2,3,4,5,6,7];
    const b = [8,9,10,11];

    const newArr =  a.concat(b)

    //print(newArr) //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10,11]

    //a and b array have not changed. 
    
    
    // We can add multiple array.
    const c = [12,14,15,16,17,18]
    const d = [19,20,21,22]

    const demoArr = a.concat(b,c,d);
    print(demoArr); //[ 1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22]
}

//arrConcat()
//================================================================================================================

//=====================================Array Fill=================================================================

const arrFill = () =>
{
    const arr = [1, 2, 3, 4, 5, 6, 7];
    arr.fill(0, 3, arr.length);   //fill(element, start index, endIndex+1)  --> endIndex is default arr.length  

    //print(arr); //[1, 2, 3, 0, 0, 0, 0]

    //It manipulates the original array
}

//arrFill()
//================================================================================================================

//=======================================Reversing an Array======================================================

const arrayRev =  () =>
{
    const arr = [1,2,3,4,5,6,7];
    arr.reverse();
    //print(arr);  //[7, 6, 5, 4, 3, 2, 1]
}

//arrayRev() 

//=======================================================================================================================

//===========================================Some and every ==============================================================

const arrayEvery = () =>
{
    const abc = [1,2,3,4,5,6,7,8]

    const val = abc.every(ele=>ele%2);
    console.log(val)  // false ---->  every element is not divided by 2, if one of the element also unsatisfies the condition then the result will be false

}

const arraySome = () =>
{
    const abc = [1,2,3,4,5,6,7,8]

    const val = abc.some(ele=>ele%2);
    console.log(val)  // true ---->  some elements are not divided by 2 , if one of the element also satisfies the condition then the result will be true

}

//arrayEvery()
//arraySome()
//================================================================================================================\

//==============================================Sorting Array========================================================
const arrSort =  ()=>
{
    const abc = [5,8,1,3,9,0,2,4,7,6];
    //abc.sort();
    print(abc);  //[0, 1, 2, 3, 4,5, 6, 7, 8, 9]


    //sorting with condtion

    abc.sort((a,b)=>b-a);
    print(abc) //[9, 8, 7, 6, 5,4, 3, 2, 1, 0]

    tostr(abc) //9,8,7,6,5,4,3,2,1,0    -> as a string

}
//arrSort()
//=====================================================================================================================

//===============================================Array Joining========================================================
const arrayJoin = () =>
{
    const a = [1,2,3,4,5,6,7,9]
    const val = a.join("-");
    console.log(val);  //1-2-3-4-5-6-7-9   -> string 
}
//arrayJoin()
//=====================================================================================================================

//============================= Filter==============================================================================

const arrayFilter = () =>
{
    const abc = [1,2,3,4,5,6,7,8,9,10];
    const newArr = abc.filter(ele=>ele%2==1);
    print(newArr); //[ 1, 3, 5, 7, 9 ]
}

//arrayFilter();
//======================================================================================================================

//==================================== Map =========================================================================
const arrayMap = () =>
{
    const abc = [1,2,3,4,5,6,7,8,9,10]
    const newArr = abc.map(ele=>{return ele*2});
    print(newArr); //[ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
}

//arrayMap()
//=====================================================================================================================


//=====================================Array find====================================================================

const arrayFind = () =>
{

    const abc = [1,2,3,4,5,6,7,8,9,10]
    const val= abc.find(ele=>ele%2==0); //according to the condition it will find the first another way is use filter
    console.log(val); //2


    const index = abc.findIndex(ele=>ele%2==0)  //get the first index which satisfies the condition
    console.log(index) //1
}

//arrayFind()
//====================================================================================================================

//====================================Array indexOf===================================================================

const arrayIndex = () =>
{
    const abc = [1,2,3,4,5,6,7,8,9,1,2,3,4,5]
    const firstIndex = abc.indexOf(1);  //Searches for the element and returns the index that first matches
    console.log(firstIndex) //0

    const lastIndex = abc.lastIndexOf(1);  //Searches for the element and returns the index of the last matches
    console.log(lastIndex) 
}

//arrayIndex()

//=====================================================================================================================

//================================ Checking if the element is present or not==========================================
const arrayInclude = () =>
{
    const abc = [1,2,3,4,5,6,7,8,9,1,2,3,4,5]
    const val = abc.includes(4);
    console.log(val) //true

    const val2 = abc.includes(56);
    console.log(val2)//false
}
arrayInclude()
//=====================================================================================================================