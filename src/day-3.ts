function getLength(value: number | string): number {
    if (typeof value === "number") {
        return String(value).length
    }
    return value.length;
}

function sum(input: number | number[]): number {
    if (Array.isArray(input)) {
       return input.reduce((total, n) => total + n, 0)
        
    }
    return input; 
}


type Admin = { role: "admin"; privileges: string[] }
type User = { role: "user"; email: string }
function describe(person: Admin | User): string {
    if (person.role === "admin") {
        return `Admin with ${person.privileges.join(", ")}`
    }
    return `User with ${person.email}`    
}


function move(dir: "up" | "down", value: number): number {
    if (dir === "up") {
        return value + 1
    }
        return value - 1   
}


function normalize(value: string | null): string {
    if (value !== null) {
        return value.toUpperCase();
    }
    return "empty"
}



type Size = "small" | "medium" | "large";
function setSize(size: Size): string {
    return `Selected size: ${size}`
}


type Status = "loading" | "success" | "error";
function isSuccess(status: Status): boolean {
    return status === "success" ? true : false
}


type ButtonType = "primary" | "secondary" | "danger";
function renderButton(type: ButtonType): string {
    return `Button type: ${type}`
}

