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



