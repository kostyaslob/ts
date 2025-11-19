const country: string = "Ukraine";
const population: number = 40000000;
const isEU: boolean = false;
console.log(country, population, isEU);


interface User {
  readonly id: number;
  username: string;
  email?: string;
}
const user: User = {
  id: 10,
  username: "kostya",
  email: "kostya@example.com",
};

interface UserItem {
  id: number;
  name: string;
}
const tags: string[] = ["js", "ts", "node"];
const numbers: number[] = [100, 200, 300];
const users: UserItem[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];


function greet(name: string, message: string): void {
  console.log(`${message}, ${name}!`);
}


function handleOrderStatus(status: "pending" | "shipped" | "delivered"): void {
  if (status === "pending") console.log("Order pending...");
  else if (status === "shipped") console.log("Order on the way");
  else if (status === "delivered") console.log("Order delivered!");
}


function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}


function loadData(): Promise<number> {
  return new Promise((resolve) => {
    resolve(123);
  });
}


import axios from "axios";
interface ApiUser {
  id: number;
  name: string;
  email: string;
}
async function fetchUsers(): Promise<ApiUser[]> {
  const response = await axios.get<ApiUser[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
}