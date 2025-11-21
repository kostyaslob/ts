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


function addSmart(a: unknown, b: unknown): unknown {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else if (typeof a === "string" || typeof b === "string") {
        return a + b
    } else {
        return "ERROR"
    }
}

type ApiResponse = string | number | null;
function handleResponse(value: ApiResponse): string {
    if (typeof value === "number") {
        return `Number: ${value}`
    } else if (typeof value === "string") {
        return `String: ${value}`
    } else {
        return "Empty"
    }
}


interface Dog { bark: () => void }
interface Cat { meow: () => void }
function makeSound(pet: Dog | Cat): void {
    if ("bark" in pet) {
        pet.bark() 
    } else {
        pet.meow()
    }
}


type Input = string | number[] | null
function getLength(value: Input): number {
    return typeof value === "string" && "array" ? value.length : 0;
}

function toBoolean(value: unknown): boolean {
    if (typeof value === "string" && value.length !== 0) {
        return true
    } else if (typeof value === "number" && value > 0) {
        return true
    } else if (value) {
        return true
    } else if (typeof value === "object") {
        return true
    } else {
        return false 
    }
}