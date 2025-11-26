function getFirstElement<T>(arr: T[]): T {
  return arr[0]
}

function getLastElement<T>(arr: T[]): T {
    return arr[arr.length - 1]
}

function wrapInArray<T>(value: T): T[] {
    let array = []
    return [value]
}