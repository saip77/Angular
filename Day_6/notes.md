# Directives in Angular

## What are Directives?

*   Directives are a way to extend the functionality of HTML elements by adding new attributes, properties, or behaviors to existing elements.
*   They are defined using the `@Directive` decorator and can be used in templates using the `[directiveName]` syntax.
*   Directives can be used to add functionality to existing HTML elements, or to create new elements with custom behaviors.

## Structural Directives

*   Structural directives are used to define the structure of the DOM.      
*   They are used to create new elements, add classes, or modify the layout of existing elements.
*   Structural directives are defined using the `@Directive` decorator and can be used in templates using the `[directiveName]` syntax.

## Attribute Directives

*   Attribute directives are used to add new attributes to existing elements.
*   They are defined using the `@Directive` decorator and can be used in templates using the `[directiveName]` syntax.

## Example of Directive

```typescript
// In your component.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    element.style.backgroundColor = this.appHighlight;
    element.style.color = 'white';
    element.style.padding = '10px';
    element.style.borderRadius = '5px';
  }
}
```

```html
<!-- In your component.html -->
<p appHighlight="blue">This text will be highlighted in blue.</p>
```

