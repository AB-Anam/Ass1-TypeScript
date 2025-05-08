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

