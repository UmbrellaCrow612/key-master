# KeyMaster

`KeyMaster` is a TypeScript library for managing complex keyboard shortcuts and key combinations in the browser. It allows you to register callbacks for specific key sequences, supporting all W3C/DOM-standard key values.

---

## Features

* **Multi-Key Support**: Listen to single keys or complex combinations (e.g., `Ctrl + Shift + S`).
* **Standard Compliant**: Supports all standard key types defined by the W3C UI Events spec:
* **Alphabet keys** (A-Z)
* **Control keys** (Enter, Escape, Backspace)
* **Modifier keys** (Shift, Ctrl, Alt, Meta)
* **Navigation keys** (Arrow keys, Home, End)
* **Function keys** (F1-F12)
* **Multimedia & Device keys**


* **Contextual Data**: Pass custom data or state to your callbacks automatically.
* **Memory Safe**: Simple `dispose()` method to clean up event listeners and prevent memory leaks.

---

## Installation

```bash
npm install umbr-key-master

```

---

## Usage

```typescript
import { KeyMaster, PressableKey } from "umbr-key-master";

// 1. (Optional) Define a function to provide context/data to your callbacks
const getContext = () => ({ 
  timestamp: Date.now(),
  activeEditor: "main-text-area" 
});

// 2. Initialize KeyMaster
const km = new KeyMaster(getContext);

// 3. Register a key combination (e.g., Shift + A)
// Note: Key strings match W3C "key" values
km.add(["Shift", "a"], (data) => {
  console.log("Combination triggered!", data);
});

// 4. Register a single key callback
km.add(["Enter"], () => {
  console.log("Enter key was pressed");
});

// 5. Removing a callback
const myCallback = () => console.log("Temporary shortcut");
km.add(["Control", "s"], myCallback);

// Later...
km.remove(myCallback);

// 6. Clean up when the component or page is destroyed
km.dispose();

```

---

## API Reference

### `constructor(getDataFunc?: GetDataCallback)`

Initializes the listener.

* **`getDataFunc`**: (Optional) A sync or async function. The return value of this function is passed as the first argument to every triggered callback.

### `add(targetKeys: PressableKey[], callback: KeyCallback): void`

Registers a callback to a specific combination.

* **`targetKeys`**: An array of `PressableKey` strings. The order does not matter as the library sorts them internally.
* **`callback`**: The function to run when all keys in the array (and *only* those keys) are held down.

### `remove(callback: KeyCallback): void`

Unregisters a specific callback function from all key combinations it was assigned to.

### `dispose(): void`

Removes the `keydown` and `keyup` listeners from the `document` and clears all internal maps. Use this during component unmounting or page transitions.

---

## Supported Key Categories

The library utilizes the full W3C UI Events key set. Common categories include:

| Category | Examples |
| --- | --- |
| **Modifiers** | `Shift`, `Control`, `Alt`, `Meta` |
| **Navigation** | `ArrowUp`, `ArrowDown`, `Home`, `PageUp` |
| **Editing** | `Backspace`, `Delete`, `Enter`, `Tab` |
| **UI Control** | `Escape`, `ContextMenu`, `Pause` |
| **Functions** | `F1` through `F20` |

---

## License

MIT © Yousaf Wazir


# Building 

- Change version up - push git change
- Run `npm run build`
- Run `npm run pubish`