//--------------- object--------------------//

let person = {
    first_name : "Aminul Islam",
    last_name : "Arnob",
    age : 23,
    city : "Dhaka",

   getName:()=>{
    return `Name : ${person.first_name} ${person.last_name}`
   }
}


//-----------------instance-----------------//
let person1 = Object();

person1.first_name='New User'
person1.gender = "Male"
person1.getName = () => {
    return `Name : ${person1.first_name}`
}


//--------------constructor----------------//
function person3(){
    this.first_name = "Old user"
    this.last_name = "nickname"
    this.age = 23

    this.getName = () => {
        return `Name : ${this.first_name}`
    }
}

let person3Instance = new person3();
console.log(person3Instance.getName())