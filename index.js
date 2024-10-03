console.log('Hello, world!');
 a=10
 var a=10
 //let a=10

 let b=20
 b=100
 b='Hello'

 


 var student ={
    100:'Hundreds',
    "student Id":1,
    studentName: "John",
    studentAge:'23',
    city:'New York'
 }

 console.log(student)
console.log(student.studentName)
console.log(student[100])
console.log(student["student Id"])
 console.log(typeof student)

//  for(let key in student){
//     console.log(key)    
//     console.log(student[key])
//  }

 for(let key in student){
    console.log(`${key} -> ${student[key]}`)
 }


 var emp ={
    empId:1,
    empName:"John",
    empAge: 20,
    empCity:"New York"
 }


 var {empId,empName,empAge, empCity} = emp
 var result = "pass"
 console.log(empId)

 var newEmp = {
    empId,
    empName,
    empAge,
    empCity,
    result
 }

 console.log(newEmp)


 var emp1 ={
    ...emp,
    result
 }

 console.log(emp1)