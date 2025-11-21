// function safeToString(value: unknown): string {
//     if (typeof value === "number") {
//         return value.toString();
//     } else if (typeof value === "boolean") {
//         return value ? "true" : "false"
//     } else if (typeof value === "string") {
//         return value
//     } else {
//         return "unsupported"
//     }
// }

// function add(a: unknown, b: unknown): number {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b
//     } else {
//         throw new Error("Error")
//     }
// }


// function logUser(user: { name: string; age: number }): void {
//     console.log(`"${user.name}" (${user.age})`)
// }
// console.log(logUser({ name: "Kostya", age: 30 }))


// const getLength = (value: string | unknown[]): number => {
//     return value.length;
// }

// function parseAndUpper(input: unknown): string {
//     return typeof input === "string" ? input.toUpperCase() : "invalid";
//


// function addSmart(a: unknown, b: unknown): unknown {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b
//     } else if (typeof a === "string" || typeof b === "string") {
//         return String(a) + String(b)
//     } else {
//         return "ERROR"
//     }
// }

// type ApiResponse = string | number | null;
// function handleResponse(value: ApiResponse): string {
//     if (typeof value === "number") {
//         return `Number: ${value}`
//     } else if (typeof value === "string") {
//         return `String: ${value}`
//     } else {
//         return "Empty"
//     }
// }


// interface Dog { bark: () => void }
// interface Cat { meow: () => void }
// function makeSound(pet: Dog | Cat): void {
//     if ("bark" in pet) {
//         pet.bark()
//     } else {
//         pet.meow()
//     }
// }


// type Input = string | number[] | null
// function getLength(value: Input): number {
//     // return typeof value === "string"
//     //     ? value.length
//     //     : Array.isArray(value)
//     //         ? value.length
//     //         : 0
    
//     if (typeof value === "string") {
//         return value.length
//     }
//     if (Array.isArray(value)) {
//         return value.length
//     }
//     return 0;
// }

// function toBoolean(value: unknown): boolean {
//     if (typeof value === "string") {
//         return value.length > 0
//     }
//     if (typeof value === "number" ) {
//         return value > 0
//     }
//     if (typeof value === "boolean") {
//         return value
//     }
//     if (value !== 0 && typeof value === "object") {
//         return true
//     }
//     return false
    
// }

// function safeLength(value: unknown): number {
//     if (typeof value === "string") {
//         return value.length
//     }
//     if (Array.isArray(value)) {
//         return value.length
//     }
//     return 0;
// }

// type Input = number | string | boolean | null | undefined;
// function describeValue(value: Input): string {
//     if (typeof value === "number") {
//         return `This is a number: ${value}`
//     }
//     if (typeof value === "string") {
//         return `This is a string: ${value}`
//     }
//     if (typeof value === "boolean") {
//         return `This is ${value}`
//     }
//     return value === null
//         ? "This is null"
//         : value === undefined
//             ? "This is undefined"
//             : "Unknown"
// }

function concatStrings(a: string, b?: string): string {
    return b ? a + b : a;
}

function power(base: number, exponent: number = 2): number {
    return base ** exponent;
}

type StringOperator = (a: string, b: string) => string;
const concat: StringOperator = (a, b) => a + b;
const interpolate: StringOperator = (a, b) => `${a}, ${b}!`


function filterNumbers(arr: number[], predicate: (n: number) => boolean): number[]  {
    return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterNumbers(numbers, n => n % 2 === 0)
console.log(evenNumbers);
const oddNumbers = filterNumbers(numbers, n => n % 2 !== 0);
console.log(oddNumbers);
const greaterThanThree = filterNumbers(numbers, n => n > 3)
console.log(greaterThanThree);

const double = (n: number): number => n * 2


