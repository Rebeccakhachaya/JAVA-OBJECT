  /*var fruit={
      name:"orange",
      price:30,
    quantity:2,
      fruitCost:function(price,quantity){
          totalCost=price*quantity;
         return fruitCost=totalCost;}
 }
 fruit.fruitCost(30,2);
  console.log(  fruit.quantity  + " " + fruit.name + " for KES " + totalCost);
 var child={
     name:"FAITH",
     age:5,
    class:"grade1",
    
 }
 console.log(child);
var person={
    name:"brenda",
    birthYear:2000,
    currentYear:2021,
    personAge:function(birthYear,currentYear){
        age=birthYear-currentYear;
        this.personAge=age;}
    
}
person.personAge(2000,2021);
console.log(" brenda " + person.personAge + " years old" );*/


//  var cake={
//     name:"queenCakes",
//    quantity:2,
//     price:60,
//     cakePrice:function(price,quantity){
//       price=price*quantity;
//       cakePrice=price;}
  
//  }
//  cake.cakePrice(60,2);
//  console.log(  cake.quantity  +  cake.name  +  " for "  +  cakePrice + " ksh ");
//  var person={
//  name:"roseMary",
//    age:23,
//   weight:"60 kgs",
//    sex:"female",
//    height:"1 meter",
//  }
//  console.log(person);
// function add(){
//   var a=20;
//   var b=50;
//   var sum=a+b;
//   console.log(sum);
// }
// add()
function getGrade(marks){
  if(marks>=80){
   return"A";
  }else if(marks>=70){
    return"B";

    
  } else if(marks>=60 ){
    return"C";
    
  }else if(marks>=50 && marks<59){
    return"D";
    
  }else if(marks>=0 ){
    return"E";   
    
  }else{
   return "F";
    
  }
   
  
}
console.log(getGrade(80));
console.log(getGrade(70));
console.log(getGrade(60));
console.log(getGrade(50));
console.log(getGrade(0));

