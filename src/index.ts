import {
  DeviceKey,
  EditingKey,
  FunctionKey,
  GlyphModifierKey,
  ModifierKey,
  NavigationKey,
  SpecialKey,
  UIEventUnicodeKey,
  UIKey,
  UnicodeControlKey,
  WhitespaceKey,
} from "./w3ckeyAttributeValues";

/**
 * A function used to retrieve custom data passed to callbacks when conditions are met.
 * Supports both synchronous and asynchronous execution.
 */
export type GetDataCallback = (() => any | Promise<any>) | null;

/**
 * Union type of valid key values mapped from the W3C UI Events / DOM specification.
 * These represent the possible values of `KeyboardEvent.key`.
 */
export type PressableKey =
  | UIEventUnicodeKey
  | UnicodeControlKey
  | GlyphModifierKey
  | SpecialKey
  | ModifierKey
  | WhitespaceKey
  | NavigationKey
  | EditingKey
  | UIKey
  | DeviceKey
  | FunctionKey;

/**
 * A callback function executed when registered key combinations are triggered.
 */
export type KeyCallback = (...args: any[]) => any | Promise<any>;

/**
 * Manages keyboard shortcuts and multi-key combinations.
 * Maps specific key sets to user-defined callbacks.
 */
export class KeyMaster {
  /** Function to fetch data passed as the first argument to callbacks. */
  private _getData: GetDataCallback = null;

  /** Tracks currently active keys to handle multi-key combinations. */
  private readonly _keys = new Set<PressableKey>();

  /** Registry mapping stringified key combinations to arrays of callbacks. */
  private readonly _callbacks: Map<string, KeyCallback[]> = new Map();

  /**
   * @param getDataFunc Optional helper to provide data to callbacks upon execution.
   */
  constructor(getDataFunc: GetDataCallback = null) {
    this._getData = getDataFunc;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  /**
   * Normalizes an array of keys into a sorted string ID.
   * @param keys - The list of keys to normalize.
   * @returns A consistent string identifier for the key combination.
   */
  private makeKey(keys: string[]): string {
    return keys.sort().join("_");
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    this._keys.add(event.key as PressableKey);

    const pressed = Array.from(this._keys.values());
    const key = this.makeKey(pressed);

    const callbacks = this._callbacks.get(key);
    if (callbacks) {
      this.run(callbacks);
    }
  };

  /**
   * Executes a list of callbacks, injecting data from _getData if available.
   * @param callbacks - The list of functions to trigger.
   */
  private async run(callbacks: KeyCallback[]): Promise<void> {
    const data = this._getData ? await this._getData() : null;
    for (const callback of callbacks) {
      await callback(data);
    }
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    this._keys.delete(event.key as PressableKey);
  };

  /**
   * Registers a callback for a specific combination of keys.
   * @param targetKeys - Array of keys that must be pressed simultaneously.
   * @param callback - The function to execute.
   */
  add(targetKeys: PressableKey[], callback: KeyCallback): void {
    const key = this.makeKey(targetKeys);

    if (!this._callbacks.has(key)) {
      this._callbacks.set(key, []);
    }

    this._callbacks.get(key)!.push(callback);
  }

  /**
   * Removes a callback from all registered combinations.
   * @param callback - The callback function to unregister.
   */
  remove(callback: KeyCallback): void {
    for (const [key, callbacks] of this._callbacks.entries()) {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
        if (callbacks.length === 0) {
          this._callbacks.delete(key);
        }
      }
    }
  }

  /**
   * Cleans up event listeners and clears registered callbacks to prevent memory leaks.
   */
  dispose(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    this._callbacks.clear();
    this._keys.clear();
  }
}
