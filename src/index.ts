import {
  Alphabet,
  AudioKey,
  ControlCharacter,
  DeviceKey,
  EditingKey,
  FunctionKey,
  GlyphModifierKey,
  IMEKey,
  ModifierKey,
  MultimediaKey,
  MultimediaNumpadKey,
  NavigationKey,
  SpecialKey,
  SpeechKey,
  UIKey,
  WhitespaceKey,
} from "./w3";

/**
 * Helper used to get custom data to pass to your callback when its conditions are met
 */
export type GetDataCallback = (() => any | Promise<any>) | null;

/**
 * The key value of a keydown can be mapped from W3C UI Events / DOM spec
 *
 * these are what a keydown / keyup `key` value can be and is what you can pass to listen to specific combinations to trigger logic
 */
export type PressableKey =
  | Alphabet
  | ControlCharacter
  | GlyphModifierKey
  | SpecialKey
  | ModifierKey
  | WhitespaceKey
  | NavigationKey
  | EditingKey
  | UIKey
  | DeviceKey
  | IMEKey
  | FunctionKey
  | MultimediaKey
  | MultimediaNumpadKey
  | AudioKey
  | SpeechKey;

/**
 * Custom callback to run when the specific keys registered are met
 */
export type KeyCallback = (...args: any[]) => any | Promise<any>;

/**
 * Represents a key combination manager that holds callbacks to run for specific key combinations
 */
export class KeyMaster {
  private _getData: GetDataCallback = null;

  /**
   * Holds a list of current keys being pressed down
   */
  private readonly _keys = new Set<PressableKey>();

  /**
   * Contains all the callbacks to run
   */
  private readonly _callbacks: Map<string, KeyCallback[]> = new Map();

  constructor(getDataFunc: GetDataCallback = null) {
    this._getData = getDataFunc;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  /**
   * Creates a key for list of pressable keys
   * @param keys The list of keys to make an ID for specific callbacks
   * @returns Key
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

  private async run(callbacks: KeyCallback[]): Promise<void> {
    const data = this._getData ? await this._getData() : null;
    for (const callback of callbacks) {
      await callback(data);
    }
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    this._keys.delete(event.key as PressableKey);
  };

  add(targetKeys: PressableKey[], callback: KeyCallback): void {
    const key = this.makeKey(targetKeys);

    if (!this._callbacks.has(key)) {
      this._callbacks.set(key, []);
    }

    this._callbacks.get(key)!.push(callback);
  }

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
   * Call before destroying to clean up event listeners
   */
  dispose(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    this._callbacks.clear();
    this._keys.clear();
  }
}
