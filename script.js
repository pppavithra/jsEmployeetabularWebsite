//Arra of employee
let employees = [
    {
      id: 1,
      first_name: "Suresh",
      last_name: "Kumar",
      email: "suresh@gmail.com",
      gender: "male",
      ip_address: "160.192.178.23",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      last_name: "Das",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.168.23",
    },
  
    {
      id: 3,
      first_name: "Jhansi",
      last_name: "Das",
      email: "jhansi@gmail.com",
      gender: "female",
      ip_address: "160.192.128.23",
    },
  
    {
      id: 4,
      first_name: "John",
      last_name: "Paul",
      email: "john@gmail.com",
      gender: "male",
      ip_address: "160.192.198.23",
    },
    {
      id: 5,
      first_name: "Lavish",
      last_name: "paul",
      email: "lavish@gmail.com",
      gender: "male",
      ip_address: "160.192.148.23",
    },
  
    {
      id: 6,
      first_name: "Sourav",
      last_name: "Paul",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.128.23",
    },
    {
      id: 7,
      first_name: "Sangeetha",
      last_name: "Paul",
      email: "sangeetha@gmail.com",
      gender: "female",
      ip_address: "160.193.178.23",
    },
  
    {
      id: 8,
      first_name: "Pavan",
      last_name: "Sai",
      email: "pavan@gmail.com",
      gender: "male",
      ip_address: "160.172.178.23",
    },
    {
      id: 9,
      first_name: "Pavni",
      last_name: "Das",
      email: "pavni@gmail.com",
      gender: "female",
      ip_address: "160.162.178.23",
    },
    {
      id: 10,
      first_name: "Jenny",
      last_name: "Paul",
      email: "jenny@gmail.com",
      gender: "female",
      ip_address: "160.182.178.23",
    },
  ];
   //logical stuff to print the data in DOM using 
//   1.All Employee Data 
let allempbutton=document.querySelector("#all-emp-btn");
// console.log(allempbutton)
allempbutton.addEventListener("click",function(){
    //display the data 
    displayEmployees(employees);
    console.log(employees);
})
//   2.If user click on Male->Male Employee Data 

let maleempbutton=document.querySelector("#male-emp-btn");

maleempbutton.addEventListener("click",function(){
    //return ->filtered data of male whose gender is male
    let maleEmployee=employees.filter(function(emp){
        return emp.gender==="male";
    });
    console.log(maleEmployee);
    displayEmployees(maleEmployee);

})

// '10'->String
// 10->Number

//   3.If user click on Female->Female Employee Data 

let femaleempbutton=document.querySelector("#female-emp-btn");

femaleempbutton.addEventListener("click",function(){
    //return ->filtered data of male whose gender is male
    let femaleEmployee=employees.filter(function(emp){
        return emp.gender==="female";
    });
    console.log(femaleEmployee);
    displayEmployees(femaleEmployee);

})

//   4.if user type in Search box->Populate the data of respective of on top

//logic for search functionality 
let searchboxelement=document.querySelector("#search-box");
searchboxelement.addEventListener("keyup",function(){

    let textEntered=searchboxelement.value;
    console.log(textEntered);
    let filterEmployees=[]; //empty array object
    if(textEntered!=""){
        //populate the data at top
        filterEmployees=employees.filter(function(emp){
            return emp.first_name.toLowerCase().includes(textEntered.toLowerCase())||
                   emp.email.toLowerCase().includes(textEntered.toLowerCase())||
                   emp.last_name.toLowerCase().includes(textEntered.toLowerCase())

        })
        //display the filtered data //call display function
        displayEmployees(filterEmployees);

    }
   
})

//   5.Display Data based on selection of button 

let displayEmployees=(employees)=>{
     //select the tbody using id-> table-body
    let tableBodyelement=document.querySelector("#table-body");
    //clear the body 
    let tableRow="";
    //use loop mechanism p>for ,foreach,for in ,for of 

    for(let employee of employees){
        tableRow +=`
        <tr>
            <td>${employee.id}</td>
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.email}</td>
            <td>${employee.gender}</td>
            <td>${employee.ip_address}</td>
        </tr>
        `;
        tableBodyelement.innerHTML=tableRow;
    }

}
  