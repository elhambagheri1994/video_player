We are using typescript for the project and strictly following its rules
and best practices.
The most important rules to know for everybody who works on this project are:

### `Interface and Type`

For functions, components, and objects, we use `interface` to declare the
type of props and objects.
Otherwise, for other data types such as primitives, we use the `type`
keyword.

For example:

```ts
interface SomeInterface {
  key1: number;
  key2: string;
}

// for typing props of a component
interface Props {
  prop1: number;
  prop2: string;
}

type SomeType = string;
type SomeType2 = number;
```

### `Naming interfaces`

For Naming interfaces, we are following this pattern:<br />

- `Props` for component props<br />
- `FunctionNameProps` for other functions such as utils, hooks and so on<br />

- Prefer `unknown` over `any`
  When we are not sure about the type of data, we have to use unknown over any. It is a safer solution.
  For more information, please see [this link](https://stackoverflow.com/questions/51439843/unknown-vs-any)

- `Array` type
  For arrays, we use this pattern to declare types:

```
string[]
number[]
(string | number)[]
```
