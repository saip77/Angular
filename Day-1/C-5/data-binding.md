# Data Binding

## What is Data Binding?
- It is the communicaation between Typescript component and HTML template.

## Types of Data Binding
 1. String Interpolation: If you want to send data from a component to the template, you can use string interpolation.
    ```ts
    export class AppComponent {
      name = 'Angular';
    }
    ```
    ```html
    <p>Hello {{name}}!</p>
    ```
 2. Property Binding: Binding properties of a tag to a value in a component.
    ```ts
    export class AppComponent {
      disbaled = false;
    }
    ```
    ```html
    <button [disabled]="disabled">Click Me</button>
    ```
 > Note: In property binding we use square brackets to bind the property to the value.

 3. Event Binding(pass data from template to component): Binding events of a tag to a function in a component.
    ```html
    <button (click)="onClick($event)">Click Me</button>
    ```
    ```ts
    export class AppComponent {
      onClick(e) {
        console.log(e.target.innerText);
      }
    }
    ```
4. Two-Way Data Binding: Binding properties of a tag to a value in a component and vice versa.
    ```ts
    export class AppComponent {
      name = 'Angular';
    }
    ```
    ```html
    <input [(ngModel)]="name">
    ```
> Note: You must import **FormsModule** in the **app.module.ts** file to use two-way data binding.