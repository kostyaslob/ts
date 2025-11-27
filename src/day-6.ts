// type Car = { brand: string; year: number; model: string }
// type PartialCar = Partial<Car>

// type Product = { id?: number; price?: number; title?: string }
// type RequiredProduct = Required<Product>

// type Movie = { title: string; rating: number }
// type ReadonlyMovie = Readonly<Movie>

// type User = {
//   id: number
//   name: string
//   email: string
//   password: string
// }
// type PickUser = Pick<User, "id" | "name" >

// type User2 = {
//   id: number
//   name: string
//   email: string
//   password: string
// }

// type OmitUser = Omit<User, "password">


// type Car = {
//   brand: string;
//   model: string;
//   mileage: number;
// };

// const update: Partial<Car> = {mileage: 40}
// function applyUpdate(car: Car, update: Partial<Car>): Car {
//     return {...car, ...update}
// }


// type User = {
//   id: number;
//   name?: string;
//   email?: string;
// };

// type FullUser = Required<User>
// const newUser: FullUser = {
//     id: 40,
//     name: "Kostya",
//     email: "kkk@k.ua"
// }

// type Point = {
//   x: number;
//   y: number;
// };
// type ReadonlyPoint = Readonly<Point>
// function freezePoint(p: Point): Readonly<Point> {
//     return {...p}
// }


// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
// };
// type ProductPreview = Pick<Product, "id" | "title">

// type ProductList = Pick<Product, "id" | "price">[]
// const productList: ProductList = [
//     { id: 40, price: 40 },
//     { id: 21, price: 50 },
//     { id: 1, price: 100 },
// ]


// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   author: string;
// };
// type WithoutBody = Omit<Post, "body">

// function getPostPreview(post: Post): WithoutBody {
//     const { body, ...rest } = post;
//     return rest;
// }

// type Settings = {
//   theme: string;
//   layout: {
//     header: boolean;
//     footer: boolean;
//   };
// };

// type DeepReadonly<T> = {
//     readonly [K in keyof T]:
//     T[K] extends object
//     ? DeepReadonly<T[K]>
//     : T[K]
// };

// const settings: DeepReadonly<Settings> = {
//     theme: "dark",
//     layout: {
//         header: true,
//         footer: false,
//     }
// }

// settings.theme = "light";
// settings.layout.footer = false;

type User = {
  id: number;
  name?: string;
  email?: string;
  age: number;
};


type OptionalKey<T> = {
    [K in typeof T]: {} extends Pick<T, K> ? K : never
} [keyof T]