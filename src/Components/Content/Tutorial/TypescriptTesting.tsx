import React from 'react'

export const TypescriptTesting = () => {

  let str: string = "mua";
  str = "12"
  console.log(str);

  var numb: number = 13;
  let anyValue: any = "true"

  function toCheck(name: string): void {
    console.log("nichego ne vozvrawaet no eto :", name);

  }

  let userId: string | number;

  userId = 23;
  userId = "dede"
  // userId = false //vot tak nelziya
  function printSmth(smth: string | boolean) {
    console.log("printedsmth:", smth);

  }
  function getUserInfo(user: string | number) {
    console.log(`user: ${user}`);
  }

  getUserInfo("42")
  printSmth("45")
  toCheck("21")
  toCheck("true");
  printSmth(true);

  let user: { name: string, age: number } = { name: "Miras", age: 13 };
  let numbers: number[] = [13, 43, 89, 87]

  let string: boolean[] = []

  console.log("userAge:", user.age);


  let au: string = "Miras"
  let miau: number = 34
  let isStudent: boolean = true

  let car: { brand: string, year: number } = { brand: "Toyota", year: 2018 }

  let numbs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function greeting(argument: string): string {
    return `we have to return ${argument}`
  }

  let msg = greeting("Marat");
  console.log(greeting("ars"));

  function multiply(a: number, b: number): number {
    return a * b
  }

  console.log(multiply(2, 8));

  function getFullName(name: string, surname: string): string {
    return `User's name is ${name} surname is ${surname}`
  }

  let sui = getFullName("Ulan", "Qonys")
  console.log(sui);


  function logResult(urNumb: number): number {
    return urNumb
  }

  let numbe = logResult(32)

  console.log(numbe);

  interface Person {
    name: string; age: number,

  }

  const person: Person = {
    name: "Bula",
    age: 24
  }

  console.log("person object is", person);
  interface Employee extends Person {
    position: string
  }

  const employee: Employee = {
    name: "Artur",
    age: 34,
    position: "backend"

  }
  console.log("employee is", employee);
  type mustang = "LV7" | "XV6" | "V6"

  let mustang: mustang = "XV6";

  type likeInterface = {
    hair: string,
    shirt: boolean
  }

  let newOnce: likeInterface = {
    hair: "brown",
    shirt: false
  }

  console.log("janaMen:", newOnce);

  type san = number;

  let id:san = 34;

  type first = {
    eyes:number 
    say:string
  }


  type second = {
    can:boolean;
    watch:string
  }

  type joined = first & second;

  let newObj:joined = {
    watch:"really?",
    eyes: 2,
    say:"yes",
    can:true
  }

  console.log("newObj=",newObj);
  
type massiv = [number,string,boolean]

const readMassiv:massiv = [23,"232",true]

console.log("massiv types:",readMassiv);

interface Book  {
  title: string,
   author: string,
   year: number
}

const objec:Book = {
  title:'Path',
  author:"Auezov",
  year:1949
}

type Product = {name: string, price: number, inStock: boolean}
const product:Product = {name:"Apple",price:999, inStock:false}
type PersonDetails = Person & {
  address:string
}
const erson:PersonDetails = {
  name:"Mura",
  age:39,
  address:"Uakh 9"
}

console.log("erson data are",erson);

  return (
    <div>TypescriptTesting</div>
  )
}
