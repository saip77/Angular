 **Attribute Directives:**
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