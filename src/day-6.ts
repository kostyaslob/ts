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

// type User = {
//   id: number;
//   name?: string;
//   email?: string;
//   age: number;
// };


// type OptionalKey<T> = {
//     [K in keyof T]: {} extends Pick<T, K> ? K : never
// }[keyof T]



// type User2 = {
//   id: number;
//   name: string;
//   email: string;
// };

// function updateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
//     return {...obj, [key]: value}
// }

// const user: User2 = { id: 1, name: "Kostya", email: "kkk@k.ua" };
// const updatedUser = updateObject(user, "name", "Ivan");
// console.log(updatedUser);
// console.log(user);

// type Model = {
//   id: number;
//   title: string;
//   published: boolean;
//   views: number;
// };

// type PickByType<T, U> = Pick<
//     T,
//     {
//     [K in keyof T]: T[K] extends U ? K : never
// }[keyof T]>;

// type NumberFields = PickByType<Model, number>;


// function safeGet<T extends object, K extends keyof T>(obj: T, key: K): T[K] | undefined {
//     if (key in obj) {
//         return obj[key];
//     }
//     return undefined
// }

// type User = {
//   id: number;
//   name?: string;
//   email?: string;
// };

// const user: User = { id: 1, name: "Kostya" };

// // безпечне отримання існуючого ключа
// const name = safeGet(user, "name"); // string | undefined

// // безпечне отримання обов'язкового ключа
// const id = safeGet(user, "id"); // number

// // ❌ TypeScript не дозволить такого
// // const wrong = safeGet(user, "age"); // помилка, бо ключа "age" немає


// function safeGet22<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
//   if (obj && typeof obj === "object" && key in obj) {
//     return (obj as any)[key];
//   }
//   return undefined;
// }

type Config = {
  host?: string;
  port?: number;
  protocol?: "http" | "https";
};

type RequiredConfig = Required<Config>;
type ConfigWithoutProtocol = Omit<Config, "protocol">
type RequiredConfigWithoutProtocol = Required<Omit<Config, "protocol">>