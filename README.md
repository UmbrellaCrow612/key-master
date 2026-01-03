# KeyMaster

`KeyMaster` is a TypeScript library for managing complex keyboard shortcuts and key combinations in the browser. It allows you to register callbacks for specific key sequences, supporting all W3C/DOM-standard key types.

---

## Features

* Listen to single keys or combinations of multiple keys.
* Supports all standard key types, including:

  * Alphabet keys (A-Z)
  * Control characters (Enter, Escape, etc.)
  * Modifier keys (Shift, Ctrl, Alt, Meta)
  * Navigation keys (Arrow keys, Home, End, etc.)
  * Function keys (F1-F12)
  * Multimedia and Audio keys
  * And more…
* Optional callback data via a custom function.
* Easy registration and removal of callbacks.
* Handles multiple key presses simultaneously.
* Safe cleanup of event listeners.

---

## Installation

```bash
npm i umbr-key-master
```

---

## Usage

```ts
import { KeyMaster } from "umbr-key-master";
import { Alphabet, ModifierKey } from "umbr-key-master/w3";

// Optional function to provide custom data to callbacks
const getData = () => ({ user: "Alice" });

// Initialize KeyMaster
const km = new KeyMaster(getData);

// Register a key combination (Shift + A)
km.add([ModifierKey.Shift, Alphabet.A], (data) => {
  console.log("Shift + A pressed!", data);
});

// Register another combination (Ctrl + B)
km.add([ModifierKey.Control, Alphabet.B], () => {
  console.log("Ctrl + B pressed!");
});

// Remove a callback
const callback = (data: any) => console.log("This will be removed", data);
km.add([Alphabet.C], callback);
km.remove(callback);

// Dispose when done to clean up event listeners
km.dispose();
```

---

## API

### `constructor(getDataFunc?: () => any | Promise<any>)`

* `getDataFunc` (optional): Function that returns custom data passed to callbacks.

### `add(targetKeys: PressableKey[], callback: KeyCallback)`

* Registers a callback for a specific key combination.
* `targetKeys`: Array of keys to listen for.
* `callback`: Function to execute when the keys are pressed.

### `remove(callback: KeyCallback)`

* Removes a previously registered callback.

### `dispose()`

* Cleans up all event listeners and callbacks. Call this before destroying KeyMaster.

---

## Key Types

The library supports all keys defined in the W3C UI Events/DOM specification. Examples include:

* `Alphabet` → A-Z
* `ControlCharacter` → Enter, Escape, Backspace, etc.
* `ModifierKey` → Shift, Control, Alt, Meta
* `NavigationKey` → ArrowUp, ArrowDown, Home, End
* `FunctionKey` → F1-F12
* `MultimediaKey` → VolumeUp, Play, Pause
* `AudioKey` → Mute, VolumeDown
* `WhitespaceKey` → Space, Tab
* And many more…

## License

MIT © Yousaf Wazir


