/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  console.log("map -> These employee objects have the profession of a developer: ");

  arr.map((x)=>{
    if(x.profession=='developer'){
      // console.log(x.name);
      console.log(x);
    }
  });

  console.log("- - - - - - - - -");
}

function PrintDeveloperbyForEach() {
  //Write your code here
  console.log("forEach -> These employee objects have the profession of a developer: ");

  arr.forEach((x) => {
    if(x.profession=="developer") {
      // console.log(x.name);
      console.log(x);
    }
  });

  console.log("- - - - - - - - -");
}

function addData() {
  //Write your code here
  console.log("Appended employee object with id=4 to the array: ");

  let x={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(x);
  console.log(arr);

  console.log("- - - - - - - - -");
}

function removeAdmin() {
  //Write your code here
  console.log("removed all employee objects with profession as 'admin' from original array & printed on console: ");

  for(let i=0;i<arr.length;i++){
    if(arr[i].profession=="admin"){
      arr.splice(i,1);
      i=i-1;
    }
  }
  console.log(arr);

  // let fun=(x)=>{
  //   if(x.profession!='admin'){
  //     return x;
  //   }
  // }
  // let arr1=arr.filter(fun);
  // console.log(arr1);

  console.log("- - - - - - - - -");
}

function concatenateArray() {
  //Write your code here
  console.log("created array1, concatenated it with the original array, stored it in array3 & printed array3 on console: ");

  let arr1 = [
    { id: 10, name: "wijdan", age: "30", profession: "SDE" },
    { id: 20, name: "akmal", age: "20", profession: "tester" },
    { id: 30, name: "bishal", age: "30", profession: "analyst"},
  ];
  let arr3=arr.concat(arr1);
  console.log(arr3);

  console.log("- - - - - - - - -");
}
