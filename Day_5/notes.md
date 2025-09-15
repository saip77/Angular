# Data Binding in Angular

## What is Data Binding?

*   Data binding is defined as the communication between TypeScript components and HTML elements in an Angular application.
*   Based on the direction of data flow, data binding can be divided into three main categories:
    *   **One-Way Data Binding (Component to View):**
        *   String Interpolation (`{{ }}`)
        *   Property Binding (`[ ]`)
    *   **One-Way Data Binding (View to Component):**
        *   Event Binding (`( )`)
    *   **Two-Way Data Binding:**
        *   Combines property and event binding for simultaneous updates (`[( )]`)

## String Interpolation (Component to View)

*   **Purpose:** A one-way data binding technique to display component property values directly within the HTML template.
*   **Syntax:** Uses double curly braces `{{ }}`.
*   **Usage:** `{{ expression }}` where `expression` can be a component property, a method call, or a simple JavaScript expression.

```typescript
// In your component.ts
export class MyComponent {
  title = 'My Angular App';
  currentYear = 2023;
  greeting(name: string) {
    return `Hello, ${name}!`;
  }
}
```

```html
<!-- In your component.html -->
<h1>{{ title }}</h1>
<p>Current Year: {{ currentYear }}</p>
<p>{{ greeting('World') }}</p>
```
*   **Correct Note:** Used for displaying string values, numbers, or results of simple expressions. The data flows only from the component to the view.

## Property Binding (Component to View)

*   **Purpose:** A one-way data binding technique to bind a component property's value to an HTML element's *property* (e.g., `src`, `disabled`, `value`, `aria-label`).
*   **Syntax:** Uses square brackets `[ ]` around the target HTML property.
*   **Usage:** `[targetProperty]="componentProperty"`

```typescript
// In your component.ts
export class MyComponent {
  imageUrl = 'assets/logo.png';
  isButtonDisabled = true;
  colspanValue = 2;
}
```
```html
<!-- In your component.html -->
<img [src]="imageUrl" alt="Angular Logo">
<button [disabled]="isButtonDisabled">Click Me</button>
<table>
  <tr>
    <td [attr.colspan]="colspanValue">Merged Cell</td>
  </tr>
</table>
```
*   **Correct Note:** Useful for setting element properties, attributes, or CSS classes/styles dynamically based on component state. Data flows from the component to the view. Note the use of `[attr.colspan]` for binding to HTML attributes that don't have corresponding DOM properties.

## Event Binding (View to Component)

*   **Purpose:** A one-way data binding technique to listen for events raised by HTML elements (e.g., `click`, `input`, `change`) and execute a method in the component when that event occurs.
*   **Syntax:** Uses parentheses `( )` around the target event name.
*   **Usage:** `(eventName)="componentMethod($event)"`

```typescript
// In your component.ts
export class MyComponent {
  message = '';

  handleClick() {
    console.log('Button clicked!');
  }

  onInput(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
    console.log('Input value:', this.message);
  }
}
```
```html
<!-- In your component.html -->
<button (click)="handleClick()">Log Click</button>
<input type="text" (input)="onInput($event)" placeholder="Type something...">
<p>Current message: {{ message }}</p>
```
*   **Correct Note:** Allows the component to react to user interactions or other DOM events. The `$event` object contains information about the triggered event and can be passed to the component method. Data flows from the view to the component.

## Two-Way Data Binding

*   **Purpose:** Provides a way for data to flow simultaneously from the component to the view and from the view to the component. When the component's model changes, the view updates, and when the user changes the view (e.g., types in an input), the component's model automatically updates.
*   **Syntax:** Uses a combination of square brackets and parentheses `[( )]`, often referred to as "banana in a box."
*   **Usage:** `[(ngModel)]="componentProperty"` (requires `FormsModule` to be imported in the module/standalone component where `ngModel` is used).

```typescript
// In your component.ts
export class MyComponent {
  nameDefault = 'React'; // Initial value from component
}
```

```html
<!-- In your component.html -->
<!-- For [(ngModel)] to work, you must import FormsModule in your relevant NgModule
     or import FormsModule in your standalone component's imports array. -->
<input type="text" [(ngModel)]="nameDefault" placeholder="Enter your name">
<p>Hello, {{ nameDefault }}!</p>
```
*   **Correct Note:** This is essentially syntactic sugar for combining property binding `[ngModel]="nameDefault"` and event binding `(ngModelChange)="nameDefault = $event"`. It's commonly used with form elements like `<input>`, `<select>`, and `<textarea>`. Requires `FormsModule` for `ngModel`.