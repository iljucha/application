// @ts-check
const Events = [
    // Mouse Events
    { on: "click", handler: "onClick" },
    { on: "mouseover", handler: "onMouseOver" },
    { on: "dblclick", handler: "onDoubleClick" },
    { on: "mousedown", handler: "onMouseDown" }, 
    { on: "mousemove", handler: "onMouseMove" },
    { on: "mouseout", handler: "onMouseOut" },
    { on: "mouseup", handler: "onMouseUp" },
    { on: "wheel", handler: "onWheel" },
    { on: "contextmenu", handler: "onContextMenu" },
    // Keyboard Events
    { on: "keydown", handler: "onKeyDown" },
    { on: "keypress", handler: "onKeyPress" },
    { on: "keyup", handler: "onKeyUp" },
    // Drag Events
    { on: "drag", handler: "onDrag" },
    { on: "dragend", handler: "onDragEnd" },
    { on: "dragenter", handler: "onDragEnter" },
    { on: "dragleave", handler: "onDragLeave" },
    { on: "dragover", handler: "onDragOver" },
    { on: "dragstart", handler: "onDragStart" },
    { on: "drop", handler: "onDrop" },
    { on: "scroll", handler: "onScroll" },
    // Clipboard Eventd
    { on: "copy", handler: "onCopy" },
    { on: "cut", handler: "onCut" },
    { on: "paste", handler: "onPaste" },
    // Focus
    { on: "blur", handler: "onBlur" },
    { on: "focus", handler: "onFocus" },
    // Touch Events
    { on: "touchcancel", handler: "onTouchCancel" },
    { on: "touchend", handler: "onTouchEnd" },
    { on: "touchmove", handler: "onTouchMove" },
    { on: "touchstart", handler: "onTouchStart" }
]

export default class Application extends HTMLElement {
    /**
     * Array of all used selectors 
     * @type {string[]}
     */
    static selectors = []

    /** 
     * Application querySelector
     * @type {string}
     */
    get selector() { return undefined }

    /** 
     * Application Stylesheet
     * @type {string}
     */
    get styles() { return undefined }

    /** 
     * Application HTML template
     * @type {string}
     */
    get template() { return undefined }

    /** Fires when the Application is first connected to the document's DOM */
    onConnect(){}
    /** Fires when the Application is disconnected from the document's DOM */
    onDisconnect(){}
    /** Fires when the Application is moved to a new document */
    onAdopt(){}
    /** Fires on a mouse click */
    onClick(){}
    /** Fires when the mouse pointer moves */
    onMouseOver(){}
    /** Fires on a mouse double-click */
    onDoubleClick(){}
    /** Fires when a mouse button is pressed down */
    onMouseDown(){}
    /** Fires when the mouse pointer is moving */
    onMouseMove(){}
    /** Fires when the mouse pointer moves out */
    onMouseOut(){}
    /** Fires when a mouse button is released */
    onMouseUp(){}
    /** Fires when the mouse wheel rolls up or down */
    onWheel(){}
    /** Fires when a context menu is triggered */
    onContextMenu(){}
    /** Fires when a user is pressing a key */
    onKeyDown(){}
    /** Fires when a user presses a key */
    onKeyPress(){}
    /** Fires when a user releases a key */
    onKeyUp(){}
    /** Fires when the Application is dragged */
    onDrag(){}
    /** Fires at the end of a drag operation */
    onDragEnd(){}
    /** Fires when the Application has been dragged to a valid drop target */
    onDragEnter(){}
    /** Fires when the Application leaves a valid drop target */
    onDragLeave(){}
    /** Fires when the Application is being dragged over a valid drop target */
    onDragOver(){}
    /** Fires at the start of a drag operation */
    onDragStart(){}
    /** Fires when dragged Application is being dropped */
    onDrop(){}
    /** Fires when the Application's scrollbar is being scrolled */
    onScroll(){}
    /** Fires when the user copies the content */
    onCopy(){}
    /** Fires when the user cuts the content */
    onCut(){}
    /** Fires when the user pastes some content */
    onPaste(){}
    /** Fires the moment that the Application loses focus */
    onBlur(){}
    /** Fires the moment when the Application gets focus */
    onFocus(){}
    /** Fires when the touch is interrupted */
    onTouchCancel(){}
    /** Fires when a finger is removed from a touch screen */
    onTouchEnd(){}
    /** Fires when a finger is dragged across the screen */
    onTouchMove(){}
    /** Fires when a finger is placed on a touch screen */
    onTouchStart(){}

    /**
     * Fires when one of the Application's attributes is added, removed, or changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    onAttributeChanged(name, oldValue, newValue){}

    /**
     * Fires when one of the Application is mutated.
     * @type {(mutationRecord: MutationRecord) => void}
     */
    onMutation(){}

    constructor() {
        super()
        if (this.template) {
            this.innerHTML = this.template
        }
        this.setEvents()
        if (this.onMutation && typeof this.onMutation === "function") {
            Application.observeMutations(this, this.onMutation)
        }
    }

    connectedCallback() {
        this.onConnect()
    }

    /**
     * @private
     */
    setEvents() {
        let notEmpty = /\w\W/gm
        Events.forEach(e => {
            if (notEmpty.test(this[e.handler].toString().replace(e.handler, ""))) {
                this.on(this, e.on, this[e.handler])
            }
        })
    }

    disconnectedCallback() {
        this.onDisconnect()
    }

    /**
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        this.onAttributeChanged(name, oldValue, newValue)
    }

    adoptedCallback() {
        this.onAdopt()
    }

    /**
     * Adds an event listener
     * @param {Element|window} targetElement 
     * @param {string} eventListener 
     * @param {() => void} eventHandler 
     */
    on(targetElement, eventListener, eventHandler) {
        targetElement.addEventListener(eventListener, eventHandler, true)
    }

    /**
     * Removes an event listener
     * @param {Element|window} targetElement
     * @param {string} eventListener 
     * @param {(event: Event) => void} eventHandler 
     */
    off(targetElement, eventListener, eventHandler) {
        targetElement.removeEventListener(eventListener, eventHandler, true)
    }

    /**
     * Checks if selector is available and returns it
     * @private
     * @param {object} app 
     */
    static selector(app) {
        let selector
        if (app.prototype.selector) {
            if (!/^([a-zA-Z]-[a-zA-Z0-9])/.test(app.prototype.selector)) {
                selector = app.prototype.selector
            }
            else {
                throw Error(`"${app.prototype.selector}" must include an hyphen`)
            }
        }
        else {
            throw Error("prototype.selector is missing")
        }
        if (Application.selectors.includes(selector)) {
            throw Error(`"${selector}" cannot be choosen anymore`)
        }
        else {
            Application.selectors.push(selector)
        }
        return selector
    }

    /**
     * @private
     */
    static setStyles(app, appSelector) {
        if (app.prototype.styles) {
            if (!document.querySelector(`head style[application="${appSelector}"]`)) {
                let stylesEl = document.createElement("style")
                stylesEl.setAttribute("application", appSelector)
                stylesEl.innerHTML = app.prototype.styles
                    .replace(/\s+((["\']).*?(?=\2)\2)|\s\s+/gm, "$1")
                    .replace(/:app/g, appSelector).trim()
                document.querySelector("head").append(stylesEl)
            }
        }
    }

    /**
     * Subscribes Element to mutations
     * @private
     * @param {Element} element
     * @param {(mutations: MutationRecord) => void} callback
     */
    static observeMutations(element, callback) {
        let observer = new MutationObserver(mutationRecord => {
            mutationRecord.map(mutation => callback(mutation))
        })
        observer.observe(element, {
            childList: true,
            subtree: true,
            characterDataOldValue: true,
            attributes: true,
            attributeOldValue: true,
            characterData: true
        })
    }

    static define(classExtension) {
        const selector = Application.selector(classExtension)
        customElements.define(selector, classExtension)
        Application.setStyles(classExtension, selector)
        return classExtension
    }
}