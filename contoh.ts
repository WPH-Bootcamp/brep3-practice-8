let count: number = 5;
let naming: any = "Alice";

type UserType = { name: string; age: number };
interface UserInterface {
  name: string;
  age: number;
}

const u1: UserType = { name: "Alice", age: 25 };
const u2: UserInterface = { name: "Bob", age: 30 };

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

function add(a: number, b: number = 0): number {
  return a + b;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;

const biodata = {
  name: "Charlie",
  age: 28,
  address: "123 Main St",
};

const numbers = (...number: number[]): number[] => {
  return number;
};

type User = { name: string; age: number };

type AgeType = User["age"]; // number

const roles = ["admin", "user"] as const;
type Role = (typeof roles)[number]; // "admin" | "user"

const dataRole: Role = "user";

function identity<T>(value: T): T {
  return value;
}

let nomor = identity<number>(42);
// nomor = 'hello';

console.log(typeof identity<number>(42));
console.log(typeof identity("Hello"));
console.log(typeof identity(["Hello"]));

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hi" };
const numberBox: Box<number> = { value: 99 };

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello")); // 5

type User2 = { name: string; age: number };

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = Optional<User2>;

const partialUser: PartialUser = { age: 30 };