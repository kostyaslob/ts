// function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }


// type ObjectKeys<T> = keyof T;
// type UserKeys = ObjectKeys<{ id: number, name: string }>; // "id" | "name"


// function pluckArray<T, K extends keyof T>(arr: T[], key: K): T[K][] {
//     return arr.map(item => item[key])
// }

// function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
//     return arr.map(item => item[key])
// }

// function getFirstValue<T>(obj: T): T[keyof T] {
//     const firstKey = Object.keys(obj)[0] as keyof T;
//     return obj[firstKey];
// }

// function wrap<T>(value: T): T[] {
//     return [value]
// }


// function pluckMultiple<T, K extends keyof T>(arr: T[], keys: K[]): T[K][] {
//     return arr.flatMap(item => keys.map(key => item[key]))
// }

// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//     return {...obj1, ...obj2}
// }

// function pickValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][]  {
//     return keys.map(key => obj[key])
// }


function combineProps<T extends object>(arrayOfObjects: T[]): unknown[] {
    return arrayOfObjects.flatMap(item => Object.keys(item).map(key => item[key as keyof T]))
}

