1. Interface vs Type — What's the Real Difference?

In TypeScript, both interface and type are used to define the structure of data, but they have subtle differences. Interface is ideal for describing the shape of objects and is extendable,
meaning multiple declarations of the same interface will merge. This makes it great for defining APIs and class structures. On the other hand, type is more versatile — it can represent 
unions, intersections, primitive types, and tuples, making it useful for more complex type operations.
While interface is preferred for object modeling, type shines in scenarios that require flexibility beyond just object definitions. Both are powerful and often interchangeable.
   
In many cases, interface and type in TypeScript look and behave similarly. You can use both to define the shape of an object:

interface User {
  name: string;
  age: number;
}

type Product = {
  name: string;
  price: number;
};
However, they differ in key ways:

Use interface when:
You're defining object shapes, especially for classes or API responses.

You want to extend multiple interfaces.


interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
Use type when:
You need to define unions, intersections, or complex mappings.

You're working with non-object types like strings, functions, or tuples.


type Status = "loading" | "success" | "error";
type Point = [number, number];
A Key Difference:
Interfaces are open — you can extend them even after they’re declared. Types are closed once defined.


interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Car now has both brand and model
With type, this would cause a duplicate identifier error.

 2. What is keyof and Why Should You Care?
The keyof keyword in TypeScript is used to create a union type of all the keys in a given object type. It allows developers to write generic, type-safe functions
by ensuring only valid property names are used. For example, if you have a User type with keys like name, email, and age, then keyof User becomes "name" | "email" | "age".
 This is especially useful in utility functions that need to access object properties dynamically. By leveraging keyof, TypeScript can catch errors at compile time and
 improve code reliability through strict key validation.


he keyof keyword lets you create a type that represents all keys of another type — it's a great tool for making your code more generic and flexible.

 Example:

type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; 
// Equivalent to: "id" | "name" | "email"
This is useful when writing generic functions:


function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", email: "alice@example.com" };
const name = getValue(user, "name"); // string
With keyof, TypeScript ensures you're only accessing valid keys of the object, giving you full type safety.
