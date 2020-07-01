// @ts-check

/**
 * @typedef {(event: Event) => void} DOMEvent
 * @typedef {{
 *      onClick?: DOMEvent
 *      onMouseOver?: DOMEvent
 *      onDoubleClick?: DOMEvent
 *      onMouseDown?: DOMEvent
 *      onMouseMove?: DOMEvent
 *      onMouseOut?: DOMEvent
 *      onMouseUp?: DOMEvent
 *      onWheel?: DOMEvent
 *      onContextMenu?: DOMEvent
 *      onKeyDown?: DOMEvent
 *      onKeyPress?: DOMEvent
 *      onKeyUp?: DOMEvent
 *      onDrag?: DOMEvent
 *      onDragEnd?: DOMEvent
 *      onDragEnter?: DOMEvent
 *      onDragOver?: DOMEvent
 *      onDragStart?: DOMEvent
 *      onDrop?: DOMEvent
 *      onScroll?: DOMEvent
 *      onCopy?: DOMEvent
 *      onCut?: DOMEvent
 *      onPaste?: DOMEvent
 *      onBlur?: DOMEvent
 *      onFocus?: DOMEvent
 *      onTouchCancel?: DOMEvent
 *      onTouchEnd?: DOMEvent
 *      onTouchMove?: DOMEvent
 *      onTouchStart?: DOMEvent
 *      onConnect?: () => void
 *      onDisconnect?: () => void
 *      onAdopt?: () => void
 *      onMutation?: (mutationRecord: MutationRecord) => void
 *      onFuck: () => void
 * }} ApplicationEvents
 */

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

    /** Fires when the Application is first connected to the document's DOM. */
    onConnect() {}

    /** Fires when the Application is disconnected from the document's DOM. */
    onDisconnect() {}

    /** Fires when the Application is moved to a new document. */
    onAdopt() {}

    /**
     * Fires on a mouse click
     * @param {Event} event
     */
    onClick(event) {}

    /**
     * Fires when the mouse pointer moves
     * @param {Event} event
     */
    onMouseOver(event) {}

    /**
     * Fires on a mouse double-click
     * @param {Event} event
     */
    onDoubleClick(event) {}

    /**
     * Fires when a mouse button is pressed down
     * @param {Event} event
     */
    onMouseDown(event) {}

    /**
     * Fires when the mouse pointer is moving
     * @param {Event} event
     */
    onMouseMove(event) {}

    /**
     * Fires when the mouse pointer moves out
     * @param {Event} event
     */
    onMouseOut(event) {}

    /**
     * Fires when a mouse button is released
     * @param {Event} event
     */
    onMouseUp(event) {}

    /**
     * Fires when the mouse wheel rolls up or down
     * @param {Event} event
     */
    onWheel(event) {}

    /**
     * Fires when a context menu is triggered
     * @param {Event} event
     */
    onContextMenu(event) {}

    /**
     * Fires when a user is pressing a key
     * @param {Event} event
     */
    onKeyDown(event) {}

    /**
     * Fires when a user presses a key
     * @param {Event} event
     */
    onKeyPress(event) {}

    /**
     * Fires when a user releases a key
     * @param {Event} event
     */
    onKeyUp(event) {}

    /**
     * Fires when the Application is dragged
     * @param {Event} event
     */
    onDrag(event) {}

    /**
     * Fires at the end of a drag operation
     * @param {Event} event
     */
    onDragEnd(event) {}

    /**
     * Fires when the Application has been dragged to a valid drop target
     * @param {Event} event
     */
    onDragEnter(event) {}

    /**
     * Fires when the Application leaves a valid drop target
     * @param {Event} event
     */
    onDragLeave(event) {}

    /**
     * Fires when the Application is being dragged over a valid drop target
     * @param {Event} event
     */
    onDragOver(event) {}

    /**
     * Fires at the start of a drag operation
     * @param {Event} event
     */
    onDragStart(event) {}

    /**
     * Fires when dragged Application is being dropped
     * @param {Event} event
     */
    onDrop(event) {}

    /**
     * Fires when the Application's scrollbar is being scrolled
     * @param {Event} event
     */
    onScroll(event) {}

    /**
     * Fires when the user copies the content
     * @param {Event} event
     */
    onCopy(event) {}

    /**
     * Fires when the user cuts the content
     * @param {Event} event
     */
    onCut(event) {}

    /**
     * Fires when the user pastes some content
     * @param {Event} event
     */
    onPaste(event) {}

    /**
     * Fires the moment that the Application loses focus
     * @param {Event} event
     */
    onBlur(event) {}

    /**
     * Fires the moment when the Application gets focus
     * @param {Event} event
     */
    onFocus(event) {}

    /**
     * Fires when the touch is interrupted
     * @param {Event} event
     */
    onTouchCancel(event) {}

    /**
     * Fires when a finger is removed from a touch screen
     * @param {Event} event
     */
    onTouchEnd(event) {}

    /**
     * Fires when a finger is dragged across the screen
     * @param {Event} event
     */
    onTouchMove(event) {}

    /**
     * Fires when a finger is placed on a touch screen
     * @param {Event} event
     */
    onTouchStart(event) {}

    /**
     * Fires when one of the Application's attributes is added, removed, or changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     */
    onAttributeChanged(name, oldValue, newValue) {}

    /**
     * Fires when one of the Application is mutated.
     * @param {MutationRecord} mutationRecord
     */
    onMutation(mutationRecord) {}

    /**
     * @param {string} query - document query
     * @returns {Element}
     */
    select(query) {
        return this.querySelector(query)
    }

    /**
     * @param {string} query - document query
     * @returns {NodeListOf<Element>}
     */
    selectAll(query) {
        return this.querySelectorAll(query)
    }

    /**
     * Tells if Application is currently on screen
     * @type {boolean}
     */
    get isOnScreen() {
        const rect = this.getBoundingClientRect()
        return rect.top < window.innerHeight && rect.bottom >= 0
    }

    constructor() {
        super()
        this.render()
    }

    /**
     * @type {() => void}
     */
    connectedCallback() {
        this._setEvents()
        if (this.onMutation) {
            Application._observeMutations(this, this.onMutation)
        }
        this.onConnect()
    }

    /**
     * If template is set, it will render its content
     */
    render() {
        if (this.template) {
            this.innerHTML = this.template
        }
    }

    /**
     * @type {() => void}
     */
    _setEvents() {
        const events = Application.events
        const eventsLength = events.length
        let i = 0
        for (i; i < eventsLength; i++) {
            if (this[events[i].handler]) {
                if (this[events[i].handler].toString() !== events[i].empty) {
                    this.on(events[i].on, this[events[i].handler])
                }
            }
        }
    }

    /**
     * @type {() => void}
     */
    disconnectedCallback() {
        this.onDisconnect()
    }

    /**
     * @type {(name: string, oldValue: string, newValue: string) => void}
     */
    attributeChangedCallback(name, oldValue, newValue) {
        this.onAttributeChanged(name, oldValue, newValue)
    }

    /**
     * @type {() => void}
     */
    adoptedCallback() {
        this.onAdopt()
    }

    /**
     * Adds an event listener
     * @param {Element|window} targetElement 
     * @param {string} eventListener 
     * @param {() => void} eventHandler 
     */
    targetOn(targetElement, eventListener, eventHandler) {
        assert(typeof eventListener === "string", "eventListener must be string")
        assert(typeof eventHandler === "function", "eventHandler must be function")
        targetElement.addEventListener(eventListener, eventHandler, true)
    }

    /**
     * Removes an event listener
     * @param {Element|window} targetElement 
     * @param {string} eventListener 
     * @param {() => void} eventHandler 
     */
    targetOff(targetElement, eventListener, eventHandler) {
        assert(typeof eventListener === "string", "eventListener must be string")
        assert(typeof eventHandler === "function", "eventHandler must be function")
        targetElement.removeEventListener(eventListener, eventHandler, true)
    }

    /**
     * Adds an event listener
     * @param {string} eventListener 
     * @param {() => void} eventHandler 
     */
    on(eventListener, eventHandler) {
        assert(typeof eventListener === "string", "eventListener must be string")
        assert(typeof eventHandler === "function", "eventHandler must be function")
        this.addEventListener(eventListener, eventHandler, true)
    }

    /**
     * Removes an event listener
     * @param {string} eventListener 
     * @param {(event: Event) => void} eventHandler 
     */
    off(eventListener, eventHandler) {
        assert(typeof eventListener === "string", "eventListener must be string")
        assert(typeof eventHandler === "function", "eventHandler must be function")
        this.removeEventListener(eventListener, eventHandler, true)
    }

    /**
     * Adds an read only property to given object
     * @param {object} object 
     * @param {string} name 
     * @param {any} value 
     * @param {object} [options] 
     */
    static _proto(object, name, value, options) {
        if (!options) {
            options = {}
        }
        Object.defineProperty(object.prototype, name, {
            ...options,
            value,
            writable: false,
            enumerable: false
        })
    }

    /**
     * Checks if class name is given and correct and returns
     * @param {object} object 
     * @param {string} object.name
     */
    static _name(object) {
        assert(object.name, "Class must have a name")
        assert(/^[(a-zA-Z)]+Application$/g.test(object.name), "Class name must include the word 'Application' at the end")
        return "app-" + object.name.replace("Application", "").toLowerCase()
    }

    /**
     * Defines a custom element
     * @param {string} name 
     * @param {object} object 
     */
    static _define(name, object) {
        customElements.define(name, object)
    }

    /**
     * Checks if selector is available and returns it
     * @param {object} app 
     */
    static _selector(app) {
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
            selector = Application._name(app)
        }
        if (Application.selectors.includes(selector)) {
            throw Error(`"${selector}" cannot be choosen anymore`)
        }
        else {
            Application.selectors.push(selector)
        }
        return selector
    }

    static get events() {
        return [
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
        ].map(event => {
            event.empty = event.handler + "(event) {}"
            return event
        })
    }

    /**
     * Minimizes CSS string 
     * @param {string} prefix - CSS Rule prefix
     * @param {string} styleText - CSS String with rules
     */
    static _getStyles(prefix, styleText) {
        assert(typeof prefix === "string", "prefix must be string")
        assert(typeof styleText === "string", "styleText must be string")
        const unnecessary = /\s+((["\']).*?(?=\2)\2)|\s\s+/gm
        const replaceApplication = /:app/g
        return styleText
            .replace(unnecessary, "$1")
            .replace(replaceApplication, prefix)
            .trim()
    }

    static _setStyles(app, appSelector) {
        assert(typeof appSelector === "string", "appSelector must be string")
        if (app.prototype.styles) {
            assert(typeof app.prototype.styles == "string", "styles must be string")
            if (!document.querySelector(`head style[application="${appSelector}"]`)) {
                let stylesEl = document.createElement("style")
                stylesEl.setAttribute("application", appSelector)
                stylesEl.innerHTML = Application._getStyles(appSelector, app.prototype.styles)
                document.querySelector("head").append(stylesEl)
            }
        }
    }

    /**
     * Subscribes Element to mutations
     * @param {Element} element
     * @param {(mutations: MutationRecord) => void} callback
     */
    static _observeMutations(element, callback) {
        assert(typeof callback === "function", "callback must be a function")
        let observer = new MutationObserver(mutationRecord => {
            mutationRecord.forEach(mutation => callback(mutation))
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

    /**
     * Takes Application extended classes as argument and defines them
     */
    static import() {
        [ ...arguments ].forEach(app => {
            const appSelector = Application._selector(app)
            Application._setStyles(app, appSelector)
            Application._define(appSelector, app)
        })
    }
}

/**
 * @param {any} condition 
 * @param {string} message 
 */
export function assert(condition, message) {
    if (!condition) {
        throw Error(message)
    }
}