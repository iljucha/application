# Application

# Usage
## Create an application
### ./apps/example.js
Create your application.
```javascript
import Application from "../node_modules/@iljucha/application/index.js"

export default Application.define(class Example extends Application {
    // Use super() if you need the constructor
    constructor(favouriteAnimal) {
        super()
        this.favouriteAnimal = favouriteAnimal
    }

    get selector() {
        return "app-example"
    }
    
    get styles() {
        return `
            p {
                color: pink;
            }
        `
    }

    get template() {
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
    
    // Activate Mutations Observer
    onMutation(mutationRecord) {
        console.log(mutationRecord)
    }
})
```

### ./js/main.js
Let the browser know your application.
```javascript
import "./apps/example.js"
```
Or:
```javascript
import { default as Example } "./apps/example.js"
let body = document.querySelector("body")
body.append(new Example())
```

### ./index.html
Import your application into the DOM.
```html
...
<body>
    <app-example></app-example>
</body>
...
```