// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// function updateUser(user: User, updates: Partial<User>): Readonly<User> {
//   return { ...user, ...updates };
// }

// const original: User = { id: 1, name: "Alice", email: "a@mail.com" };
// const newUser = updateUser(original, { name: "Alicia" });

// console.log(original); // { id: 1, name: "Alice", email: "a@mail.com" }
// console.log(newUser);  // { id: 1, name: "Alicia", email: "a@mail.com" }
// newUser.name = "Bob";
// console.log(newUser);



// interface Settings {
//   theme: string;
//   notifications: boolean;
//   language: string;
// }
// function updateSettings(current: Settings, changes: Partial<Settings>): Readonly<Settings> {
//   return { ...current, ...changes };
// }

// const defaultSettings: Settings = {
//   theme: "light",
//   notifications: true,
//   language: "en",
// };

// const newTheme = {
//   theme: "dark"
// };

// const newSettings = updateSettings(defaultSettings, newTheme);

// console.log(defaultSettings)
// console.log(newSettings)
// newSettings.theme = "light";


// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   inStock: boolean;
// }

// function updateProduct(current: Product, updates: Partial<Product>): Readonly<Product> {
//   return { ...current, ...updates };
// };

// const oldProduct: Product = {
//   id: 1,
//   title: "Apple",
//   price: 20,
//   inStock: true,
// }

// const newProduct = updateProduct(oldProduct, { inStock: false });

// console.log(oldProduct);
// console.log(newProduct);

// interface Address {
//   city: string;
//   street: string;
//   zip: string;
// }

// interface UserProfile {
//   id: number;
//   name: string;
//   age: number;
//   address: Address;
// }

// function updateProfile(
//   current: UserProfile,
//   updates: Partial<Omit<UserProfile, "address">> & {address?: Partial<Address>}):
//   Readonly<UserProfile> {
//   return {
//     ...current,
//     ...updates,
//     address: updates.address ? { ...current.address, ...updates.address } : current.address
//   };
// }

// const profile: UserProfile = {
//   id: 2,
//   name: "Kostya",
//   age: 38,
//     address: {
//     city: "Kyiv",
//     street: "Kyivska",
//     zip: "03186",
//   },
// }

// const updated = updateProfile(profile, {
//   name: "Bob",
//   address: { city: "Lviv" }
// });

// console.log(profile)
// console.log(updated)

interface Shipping {
  city: string;
  street: string;
  zip: string;
  phone?: string; // номер телефону може бути відсутнім
}

interface OrderProfile {
  id: number;
  customer: string;
  total: number;
  shipping: Shipping;
}


function updateOrder(
  current: OrderProfile,
  updates: Partial<Omit<OrderProfile, "shipping">> & { shipping?: Partial<Shipping> }):
  Readonly<OrderProfile> {
  return {
    ...current,
    ...updates,
    shipping: updates.shipping ? { ...current.shipping, ...updates.shipping } : current.shipping
  }    
}

const currentProfile: OrderProfile = {
  id: 2,
  customer: "Kostya",
  total: 40,
  shipping: 
  {
     city: "Kyiv",
    street: "Mart",
    zip: "03186",
    phone: "063850",
   },
}

const updatedProfile = updateOrder(currentProfile, {
  customer: "Vova",
  shipping: {
    city: "Lviv"
  }
})
 
console.log(currentProfile);
console.log(updatedProfile);