# Application
Front End Application

# What is this?
**Application** is an extended **HTMLElement** with many useful features for building interactive Pages.

# Usage
## JavaScript Module
```javascript
import Application from "../node_modules/@iljucha/application/index.js"

export default class ExampleApplication extends Application {
    get selector() { return "app-example" }
    
    get styles() {
      return `
        My favourite animal is ${this.favouriteAnimal}.
        <p>The End</p>
      `
    }
    
    get paragraph() {
        return this.select("p")
    }
    
    set favouriteAnimal(value) {
        this._favouriteAnimal = value
        this.render()
    }
    
    get favouriteAnimal() {
        return this._favouriteAnimal
    }
    
    onConnect() {
        console.log("app-exampe spawned")
    }
    
    onDisconnect() {
        console.log("app-example removed from the DOM")
    }
    
    // Example Event, there are many more predefined for usage like this
    onClick(event) {
        console.log("app-examle clicked", event)
    }
    
    onMutation(mutationRecord) {
        console.log(mutationRecord)
    }
}

Application.import(ExampleApplication, ...) // In your main.js or so
```
## HTML
Put this anywhere in your html to use your Application
```html
<app-example></app-example>
```

# Object
## Basics
* static **selectors** = [ *string[]* ]
* get **selector()** { *string* }
* get **styleUrls()** { *string[]* }
* get **styles()** { *string* }
* get **template()** { *string* }
* get **isOnScreen()** { *boolean* }
* **render()** { *writes template to innerHTML* }
* static **import(** *...ExtendedApplication* **)** { *imports, adds css to the header etc.* }

## Query Selector
* **select(** *query* **)** { *Element* }
* **selectAll(** *query* **)** { *NodeListOf Element* } 

## Lifecycle methods
* **onConnect()** { *Fires when the Application is first connected to the document's DOM.* }
* **onDisconnect()** { *Fires when the Application is disconnected from the document's DOM.* }
* **onAdopt()** { *Fires when the Application is moved to a new document.* }
* **onAttributeChanged(** *name*, *oldValue*, *newValue* ) { *Fires when one of the Application's attributes is added, removed, or changed.* }
* **onMutation(** *mutationRecord* **)** { *Fires when one of the Application is mutated.* }

## Events
* **onClick(** *event* **)** { *Fires on a mouse click* }
* **onMouseOver(** *event* **)** { *Fires when the mouse pointer moves* }
* **onDoubleClick(** *event* **)** { *Fires on a mouse double-click* }
* **onMouseDown(** *event* **)** { *Fires when a mouse button is pressed down* }
* **onMouseMove(** *event* **)** { *Fires when the mouse pointer is moving* }
* **onMouseOut(** *event* **)** { *Fires when the mouse pointer moves out* }
* **onMouseUp(** *event* **)** { *Fires when a mouse button is released* }
* **onWheel(** *event* **)** { *Fires when the mouse wheel rolls up or down* }
* **onContextMenu(** *event* **)** { *Fires when a context menu is triggered* }
* **onKeyDown(** *event* **)** { *Fires when a user is pressing a key* }
* **onKeyPress(** *event* **)** { *Fires when a user presses a key* }
* **onKeyUp(** *event* **)** { *Fires when a user releases a key* }
* **onDrag(** *event* **)** { *Fires when the Application is dragged* }
* **onDragEnd(** *event* **)** { *Fires at the end of a drag operation* }
* **onDragEnter(** *event* **)** { *Fires when the Application has been dragged to a valid drop target* }
* **onDragLeave(** *event* **)** { *Fires when the Application leaves a valid drop target* }
* **onDragOver(** *event* **)** { *Fires when the Application is being dragged over a valid drop target* }
* **onDragStart(** *event* **)** { *Fires at the start of a drag operation* }
* **onDrop(** *event* **)** { *Fires when dragged Application is being dropped* }
* **onScroll(** *event* **)** { *Fires when the Application's scrollbar is being scrolled* }
* **onCopy(** *event* **)** { *Fires when the user copies the content* }
* **onCut(** *event* **)** { *Fires when the user cuts the content* }
* **onPaste(** *event* **)** { *Fires when the user pastes some content* }
* **onBlur(** *event* **)** { *Fires the moment that the Application loses focus* }
* **onFocus(** *event* **)** { *Fires the moment when the Application gets focus* }
* **onTouchCancel(** *event* **)** { *Fires when the touch is interrupted* }
* **onTouchEnd(** *event* **)** { *Fires when a finger is removed from a touch screen* }
* **onTouchMove(** *event* **)** { *Fires when a finger is dragged across the screen* }
* **onTouchStart(** *event* **)** { *Fires when a finger is placed on a touch screen* }
* **targetOn(** *Element|window*, *eventListener*, *eventHandler* **)** { *Adds an event listener to an Element* }
* **targetOff(** *Element|window*, *eventListener*, *eventHandler* **)** { *Removes an event listener from an Element* }
* **on(** *eventListener*, *eventHandler* **)** { *Adds an event listener* }
* **off(** *eventListener*, *eventHandler* **)** { *Removes an event listener* }
