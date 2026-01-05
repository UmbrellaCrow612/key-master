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
 * Additional options for the KeyMaster instance.
 */
export type KeyMasterOptions = {
  /**
   * If true, key comparisons will ignore casing (e.g., 'A' and 'a' are treated as the same key).
   * @default false
   */
  caseInsensitive?: boolean;
};

/**
 * A function used to retrieve custom data passed to callbacks when conditions are met.
 */
export type GetDataCallback = (() => any | Promise<any>) | null;

/**
 * Union type of valid key values mapped from the W3C UI Events / DOM specification.
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
export type KeyCallback = (data: any) => any | Promise<any>;

/**
 * Manages keyboard shortcuts and multi-key combinations.
 * Supports case-insensitive matching and contextual data injection.
 */
export class KeyMaster {
  private _getData: GetDataCallback = null;
  private readonly _keys = new Set<string>();
  private readonly _callbacks: Map<string, KeyCallback[]> = new Map();
  private _options: Required<KeyMasterOptions>;

  /**
   * @param getDataFunc - Optional helper to provide data to callbacks.
   * @param options - Configuration options for key handling.
   */
  constructor(
    getDataFunc: GetDataCallback = null,
    options: KeyMasterOptions = {}
  ) {
    this._getData = getDataFunc;
    this._options = {
      caseInsensitive: false,
      ...options,
    };

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    window.addEventListener("blur", this.handleBlur);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  /**
   * Normalizes an array of keys into a sorted string ID.
   * Handles case normalization if caseInsensitive is enabled.
   */
  private makeKey(keys: string[]): string {
    const normalizedKeys = this._options.caseInsensitive
      ? keys.map((k) => k.toLowerCase())
      : keys;

    return normalizedKeys.sort().join("_");
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    const keyToStore = this._options.caseInsensitive
      ? event.key.toLowerCase()
      : event.key;

    this._keys.add(keyToStore);

    const pressed = Array.from(this._keys.values());
    const comboId = this.makeKey(pressed);

    const callbacks = this._callbacks.get(comboId);
    if (callbacks) {
      this.run(callbacks);
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    const keyToRemove = this._options.caseInsensitive
      ? event.key.toLowerCase()
      : event.key;

    this._keys.delete(keyToRemove);
  };

  /**
   * Clears all pressed keys when window loses focus.
   * This prevents keys from getting "stuck" when DevTools or other windows are opened.
   */
  private handleBlur = () => {
    this._keys.clear();
  };

  /**
   * Clears all pressed keys when document becomes hidden.
   * This handles cases where the page loses visibility.
   */
  private handleVisibilityChange = () => {
    if (document.hidden) {
      this._keys.clear();
    }
  };

  /**
   * Executes a list of callbacks with injected data.
   */
  private async run(callbacks: KeyCallback[]): Promise<void> {
    const data = this._getData ? await this._getData() : null;
    for (const callback of callbacks) {
      await callback(data);
    }
  }

  /**
   * Registers a callback for a specific combination of keys.
   * @param targetKeys - Array of keys (e.g., ["Control", "S"]).
   * @param callback - Function to trigger.
   */
  add(targetKeys: PressableKey[], callback: KeyCallback): void {
    const comboId = this.makeKey(targetKeys as string[]);

    if (!this._callbacks.has(comboId)) {
      this._callbacks.set(comboId, []);
    }

    this._callbacks.get(comboId)!.push(callback);
  }

  /**
   * Removes a callback from all registered combinations.
   */
  remove(callback: KeyCallback): void {
    for (const [comboId, callbacks] of this._callbacks.entries()) {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
        if (callbacks.length === 0) {
          this._callbacks.delete(comboId);
        }
      }
    }
  }

  /**
   * Cleans up event listeners and internal state.
   */
  dispose(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    window.removeEventListener("blur", this.handleBlur);
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
    this._callbacks.clear();
    this._keys.clear();
  }
}
