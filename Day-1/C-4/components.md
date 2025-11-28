# Understanding Components

## What is a Component?
- It is the basic building block of an Angular application.
- It is a reusable piece of code that encapsulates a view and its associated logic.
- It is a typescript class with a special decorator that marks it as a component.

## Creating a Component
```typescript   
ng generate component my-component
```

# What Is a Selector in Angular?

- A **selector** is the name you use in HTML to tell Angular **where to display a component**.  
It is how Angular identifies and inserts a component into the DOM.

- Example:
```ts
selector: 'app-home'
```

- Types of selectors:
  - Element selector
      - Example:
      ```ts
      selector: 'app-home'
      ```
      ```html
      <app-home></app-home>
      ```
  - Attribute selector
      - Example:
      ```ts
      selector: '[app-home]'
      ```
      ```html
      <div app-home></div>
      ```
  - Class selector
      - Example:
      ```ts
      selector: '.app-home'
      ```
      ```html
      <div class="app-home"></div>
      ```
> Note: ID selectors are not allowed in Angular.

## Why ID Selectors are not allowed in Angular?
- Since **IDs in the DOM must be unique**, Angular can't use them as component selectors.  
If a component used an ID selector, you could only place that component **once** in the entire app.

  
## Why does the content inside this element not appear when using a class selector for an Angular component?
```html
<div class="app-header">
  <h1>App Header</h1>
</div>
```
- When an Angular component uses a class selector (e.g., selector: '.app-header'), Angular treats any element matching that class as the host element of the component.

- Angular then replaces all existing inner HTML of that element with the component's own template.