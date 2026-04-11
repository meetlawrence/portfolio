// 1) Implicit any
function greet(name: string) {
  return `Hello, ${name.toUpperCase()}`;
}

// 2) Wrong return type (return the proper type using the reduce function using the items array)
function total(items: number[]): number {
  return 42;
}

// 3) Property does not exist on type
type Product = { id: number; title: string };
const p: Product = { id: 1, title: "Notebook" };
console.log(p.title);

// 4) Unsafe union usage
function printId(id: string | number) {
  console.log(id.toString());
}

// 5) Optional property used without a check
type User = { name: string; email?: string };
function emailDomain(user: User) {
  if (!user.email) {
    throw new Error("User does not have an email address");
  }
  return user.email.split("@")[1];
}