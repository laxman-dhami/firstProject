const person={
    firstName:'Laxman',
    lastName:'dhami',
    age:30,
    hobbies:['music','movie','cricket'],
    address:{
        street:"bhagwanpur",
        city:'haldwani',
        state:'uk',
    }
}
const {firstName, lastName,address:{city}}=person
console.log(city)