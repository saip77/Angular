# Understanding Directives in Angular

## What are Directives?

*   In Angular, **Directives are instructions to the DOM (Document Object Model).**
*   They are classes that add extra behavior to elements, components, or other directives.
*   Essentially, directives allow you to manipulate the DOM by changing its appearance, behavior, or structure.
*   Every Angular component is technically a directive (a component is a directive with a template).

## Types of Directives

Angular provides three main types of directives:

1.  **Components (already covered):**
    *   Directives with a template. They are the most common type and form the building blocks of an Angular application.
    *   Example: `@Component()` decorator.

2.  **Structural Directives:**
    *   **Purpose:** Directives that **change the DOM layout by adding, removing, or manipulating elements** (and their sub-trees). They essentially restructure the DOM.
    *   **Syntax:** Always preceded by an asterisk (`*`) because they are "syntactic sugar" for `template` tags.
    *   **Examples of Built-in Structural Directives:**
        *   `*ngIf`: Conditionally adds or removes an element from the DOM based on a boolean expression.
            ```html
            <div *ngIf="isLoggedIn">Welcome back!</div>
            <div *ngIf="!isLoggedIn">Please log in.</div>
            ```
        *   `*ngFor`: Iterates over a collection (array) and renders a template for each item.
            ```html
            <ul>
              <li *ngFor="let item of items">{{ item }}</li>
            </ul>
            ```
        *   `*ngSwitch` / `*ngSwitchCase` / `*ngSwitchDefault`: Conditionally displays elements based on a switch value.
            ```html
            <div [ngSwitch]="currentValue">
              <div *ngSwitchCase="1">First option</div>
              <div *ngSwitchCase="2">Second option</div>
              <div *ngSwitchDefault>Other option</div>
            </div>
            ```
    *   **Key Insight:** Structural directives operate on the "structure" of the DOM, adding or removing entire elements, not just changing their styles or properties.

3.  **Attribute Directives:**
    *   **Purpose:** Directives that **change the appearance or behavior of an element, component, or another directive** by modifying its HTML attributes or DOM properties. They don't add or remove elements, but rather modify existing ones.
    *   **Syntax:** Used as a regular HTML attribute.
    *   **Examples of Built-in Attribute Directives:**
        *   `ngClass`: Adds or removes CSS classes conditionally.
            ```html
            <div [ngClass]="{'active': isActive, 'error': hasError}">Styled Content</div>
            ```
        *   `ngStyle`: Adds or removes inline CSS styles conditionally.
            ```html
            <p [ngStyle]="{'color': myColor, 'font-size': myFontSize + 'px'}">Styled Text</p>
            ```
        *   `ngModel`: (Used for two-way data binding on form elements, technically an attribute directive as it modifies the `value` property and listens to `input` events).
            ```html
            <input [(ngModel)]="userName">
            ```
    *   **Custom Attribute Directives:** You can create your own attribute directives to encapsulate reusable DOM manipulation logic.
        *   Example: A `HighlightDirective` that changes the background color of an element when hovered over.
            ```typescript
            // highlight.directive.ts
            import { Directive, ElementRef, HostListener, Input } from '@angular/core';

            @Directive({
              selector: '[appHighlight]', // Applied as an attribute: <p appHighlight>
              standalone: true
            })
            export class HighlightDirective {
              @Input() defaultColor = 'yellow';
              @Input('appHighlight') highlightColor = ''; // Alias for custom input

              constructor(private el: ElementRef) { }

              @HostListener('mouseenter') onMouseEnter() {
                this.highlight(this.highlightColor || this.defaultColor);
              }

              @HostListener('mouseleave') onMouseLeave() {
                this.highlight('');
              }

              private highlight(color: string) {
                this.el.nativeElement.style.backgroundColor = color;
              }
            }
            ```
            ```html
            <!-- Using the custom directive in HTML -->
            <p appHighlight>Hover over this text to highlight it!</p>
            <p [appHighlight]="'lightblue'">This text will be light blue on hover.</p>
            ```
    *   **Key Insight:** Attribute directives enhance existing elements without changing their basic structure. They modify properties, styles, or add behaviors.