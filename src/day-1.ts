const country: string = "Ukraine";
const population: number = 40000000;
const isEU: boolean = false;
const country: string = "Ukraine";
const population: number = 40000000;
const isEU: boolean = false;

interface User {
  id: number;
  username: string;
  email?: string;
}

interface Car {
    brand: string;
    model: string;
    year: number;
    electric: boolean;
}
const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  electric: false,
};


interface Product {
    id: number;
    title: string;
    price: number;
}
const products: Product[] = [
  { id: 1, title: "Phone", price: 500 },
  { id: 2, title: "Laptop", price: 1500 }
];


function printPerson(name: string, age: number, city: string): void {
  console.log(`${name} (${age}) lives in ${city}`);
}

interface User {
    id: number;
    username: string;
    isActive?: boolean;
}

function createUser(id: number, username: string): User  {
  return { id, username, isActive: true };
}



const gameScores: number[] = [10, 20, 55, 100];
const favoriteCities: string[] = ["Kyiv", "Lviv", "Paris"];



const temperatures: number[] = [10, 20, 30];
const featureFlags: boolean[] = [true, false];

interface User1 {
  id: number;
  name: string;
}
const users: User1[] = [
  { id: 1, name: "Kostya" },
  {id: 2, name: "Roma"},
]

 
const coordination: [number, number] = [40, 45];
const response: [number, string, boolean] = [30, "ok", true];


function toStringValue(value: number | boolean): string {
  if (typeof value === "number") {
    return value.toString()
  }
  return value ? "true" : "false"
}


// type Role = "admin" | "user" | "guest";
// let currentRole: Role = "admin"


enum Role {
  Admin,
  Moderator,
  User,
  Guest,
}

let role: Role = Role.Admin;


interface Human {
  name: string;
  age: number;
}

type Employee = Human & { salary: number }
let worker: Employee = {name: "Kostya", age: 40, salary: 3000}


function logInput(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value
  } else if (typeof value === "number") {
    return value.toString()
  } else {
    return value ? "true" : "false"
  } 
}


interface Bird { fly: () => void }
interface Fish { swim: () => void }
function move(animal: Bird | Fish): void {
  if ("swim" in animal) {
    animal.swim()
  } else {
    animal.fly()
  }
}