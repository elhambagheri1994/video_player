# Project Structure

we have to separate all meaningful part of our application. these meaningful part could be a standalone application. but now we just put theme in its folder.

in this structure currently we have only 2 main directories and each of these directories have specific responsibility. our directories are:

- [shared]
- [components]

4. We have shared things in the whole project that aren't related to a specific component, we store themes in the **shared** directory.
5. We put our main components in **components** directory.

this structure was inspired by [featured-slice.design](https://featured-slice.design) and [bulletproof-react](https://github.com/alan2207/bulletproof-react)

Check the structure below:

```tsx
interface Props {
  className?: string;
  //...
}

function ComponentName({}: /*...*/ Props) {
  return <div>//...</div>;
}
export { ComponentName };
```

Folder structure of components be like:
src/\*\*/ComponentName

```text
-component-name
    -sub-component-name
        index.tsx
        sub-component-name.module.scss
    -sub-component-name
        index.tsx
    index.tsx
    component-name.module.scss
```

With .sass.module:

```text
-component-name
    index.tsx
    styles.sass.module
```
