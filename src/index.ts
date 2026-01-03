/**
 * Helper used to get custom data to pass to your callback when it's conditions are met
 */
type getDataCallback = (() => any | Promise<any>) | null;

/**
 * The key value of a keydown can be mapped from W3C UI Events / DOM spec
 */
type PressableKey = "";

/**
 * Custom callback to run when the specific keys registred are met
 */
type keyCallback = () => any | Promise<any>;

/**
 * Represents a key combination master that holds are callbacks to run for specific key combinations are met
 */
export class KeyMaster {
  private _getData: getDataCallback = null;

  /**
   * Holds a list of current keys being pressed down
   */
  private readonly _keys = new Set<string>();

  /**
   * Contains all the callbacks to run
   */
  private readonly _callbacks: Map<string, keyCallback[]> = new Map();

  /**
   * Creates a key for list of pressable keys
   * @param keys The list of keys to make a ID and then run specific callbacks for it
   * @returns Key
   */
  private makeKey(keys: string[]) {
    return keys.join("_");
  }

  constructor(getDataFunc: getDataCallback = null) {
    this._getData = getDataFunc;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  private handleKeyDown(event: KeyboardEvent) {
    this._keys.add(event.key);

    let pressed = Array.from(this._keys.values());
    let key = this.makeKey(pressed);

    let callbacks = this._callbacks.get(key);
    if (callbacks) {
      this.run(callbacks);
    }
  }

  private async run(callbacks: keyCallback[]) {
    for (let c of callbacks) {
      await c();
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    this._keys.delete(event.key);
  }

  add(targetKeys: PressableKey[], callback: keyCallback) {
    let key = this.makeKey(targetKeys)

    this._callbacks.get(key)?.push(callback)
  }

  remove(callback: keyCallback) {
    let callbacks = this._callbacks.values();

    for (let cb of callbacks) {
      // remove in place
    }
  }

  /**
   * Call at the end beofre destryoing it to clean
   */
  dispose() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
}
