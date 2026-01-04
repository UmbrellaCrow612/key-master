/**
 * Contains the Keyboard Event key Attribute Values from https://www.w3.org/TR/uievents-key/#key-attr-values mapped into Typescript types
 */

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 2.1. Unicode Values
 * * A key string is a string containing a 0 or 1 non-control characters
 * ("base" characters) followed by 0 or more combining characters.
 * The string MUST be in Normalized Form C (NFC).
 */

/**
 * Standard English (Latin-1) printable character set used as key attribute values.
 */
export type UnicodeKeyEnglish =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "!"
  | '"'
  | "#"
  | "$"
  | "%"
  | "&"
  | "'"
  | "("
  | ")"
  | "*"
  | "+"
  | ","
  | "-"
  | "."
  | "/"
  | ":"
  | ";"
  | "<"
  | "="
  | ">"
  | "?"
  | "@"
  | "["
  | "\\"
  | "]"
  | "^"
  | "_"
  | "`"
  | "{"
  | "|"
  | "}"
  | "~";

/**
 * Non-control whitespace Unicode characters defined in the spec.
 * Note: Tab and Enter are defined as named control keys in § 2.1.1.
 */
export type UnicodeWhitespaceKey =
  /** U+0020 Space */
  | " "
  /** U+00A0 No-Break Space */
  | "\u00A0"
  /** U+2009 Thin Space */
  | "\u2009"
  /** U+3000 Ideographic Space */
  | "\u3000";

/**
 * Union of Section 2.1 compliant English characters and whitespace.
 */
export type UIEventUnicodeKey = UnicodeKeyEnglish | UnicodeWhitespaceKey;

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 2.1.1. Control Characters
 * * A small number of characters in the Unicode "Cc" General Category
 * are supported as named key attribute values.
 */
export type UnicodeControlKey =
  /** U+0008 */
  | "Backspace"
  /** U+0009 */
  | "Tab"
  /** U+000D */
  | "Enter"
  /** U+001B */
  | "Escape"
  /** U+007F */
  | "Delete";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 2.2. Selecting key Attribute Values
 * * A glyph modifier key is any of the following modifier keys:
 * Shift, CapsLock or AltGr.
 */
export type GlyphModifierKey = "Shift" | "CapsLock" | "AltGr";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.1. Special Keys
 * * This key value is used when an implementation is unable to identify
 * another key value, due to either hardware, platform, or software constraints.
 */
export type SpecialKey = "Unidentified";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.2. Modifier Keys
 * * Modifier keys enable alternate functions for interpreting keyboard input.
 */
export type ModifierKey =
  /** The Alt (Alternative) key. Used also for the Apple Option key. */
  | "Alt"
  /** The Alternate Graphics (AltGr or AltGraph) key. */
  | "AltGraph"
  /** The Caps Lock (Capital) key. Toggles capital character lock. */
  | "CapsLock"
  /** The Control or Ctrl key. */
  | "Control"
  /** The Function switch Fn key. Often handled in hardware. */
  | "Fn"
  /** The Function-Lock (FnLock or F-Lock) key. */
  | "FnLock"
  /** The Meta key. Used for the Windows Logo key and Apple Command key. */
  | "Meta"
  /** The NumLock or Number Lock key. */
  | "NumLock"
  /** The Scroll Lock key. */
  | "ScrollLock"
  /** The Shift key. */
  | "Shift"
  /** The Symbol modifier key (virtual keyboards). */
  | "Symbol"
  /** The Symbol Lock key. */
  | "SymbolLock"
  /** Legacy: The Hyper key. */
  | "Hyper"
  /** Legacy: The Super key. */
  | "Super";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.3. Whitespace Keys
 * * This section defines keys that represent whitespace-related actions.
 */
export type WhitespaceKey =
  /** * The Enter or ↵ key. Used for Return (Macintosh) and
   * Android KEYCODE_DPAD_CENTER.
   */
  | "Enter"
  /** The Horizontal Tabulation Tab key. */
  | "Tab";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.4. Navigation Keys
 * * Navigation keys are used for moving the cursor or scrolling the viewport.
 */
export type NavigationKey =
  /** The down arrow key. (KEYCODE_DPAD_DOWN) */
  | "ArrowDown"
  /** The left arrow key. (KEYCODE_DPAD_LEFT) */
  | "ArrowLeft"
  /** The right arrow key. (KEYCODE_DPAD_RIGHT) */
  | "ArrowRight"
  /** The up arrow key. (KEYCODE_DPAD_UP) */
  | "ArrowUp"
  /** The End key. (KEYCODE_MOVE_END) */
  | "End"
  /** The Home key. (KEYCODE_MOVE_HOME) */
  | "Home"
  /** The Page Down key. */
  | "PageDown"
  /** The Page Up key. */
  | "PageUp";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.5. Editing Keys
 * * Editing keys are used for manipulating text or content.
 */
export type EditingKey =
  /** The Backspace key. Also used for the 'Delete' label on MacOS. */
  | "Backspace"
  /** Remove the currently selected input. */
  | "Clear"
  /** Copy the current selection. (APPCOMMAND_COPY) */
  | "Copy"
  /** The Cursor Select (Crsel) key. */
  | "CrSel"
  /** Cut the current selection. (APPCOMMAND_CUT) */
  | "Cut"
  /** The Delete (Del) Key. Also used for MacOS 'Delete' + 'Fn'. */
  | "Delete"
  /** The Erase to End of Field key. */
  | "EraseEof"
  /** The Extend Selection (Exsel) key. */
  | "ExSel"
  /** The Insert (Ins) key. (KEYCODE_INSERT) */
  | "Insert"
  /** The Paste key. (APPCOMMAND_PASTE) */
  | "Paste"
  /** Redo the last action. (APPCOMMAND_REDO) */
  | "Redo"
  /** Undo the last action. (APPCOMMAND_UNDO) */
  | "Undo";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.6. UI Keys
 * * UI keys are used for user interface interactions, such as menus,
 * dialogs, and application-level commands.
 */
export type UIKey =
  /** The Accept (Commit, OK) key. */
  | "Accept"
  /** The Again key, to redo or repeat an action. */
  | "Again"
  /** The Attention (Attn) key. */
  | "Attn"
  /** The Cancel key. */
  | "Cancel"
  /** Show the application’s context menu. */
  | "ContextMenu"
  /** The Esc key, used to exit or "escape" the current context. */
  | "Escape"
  /** The Execute key. */
  | "Execute"
  /** Open the Find dialog. (APPCOMMAND_FIND) */
  | "Find"
  /** Open a help dialog. (APPCOMMAND_HELP, KEYCODE_HELP) */
  | "Help"
  /** Pause the current state. Not for media; use "MediaPause" instead. */
  | "Pause"
  /** Play or resume the current state. Not for media; use "MediaPlay" instead. */
  | "Play"
  /** The properties (Props) key. */
  | "Props"
  /** The Select key. */
  | "Select"
  /** The ZoomIn key. (KEYCODE_ZOOM_IN) */
  | "ZoomIn"
  /** The ZoomOut key. (KEYCODE_ZOOM_OUT) */
  | "ZoomOut";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.7. Device Keys
 * * Device keys represent physical hardware controls, such as screen
 * brightness and power management.
 */
export type DeviceKey =
  /** The Brightness Down key. (KEYCODE_BRIGHTNESS_DOWN) */
  | "BrightnessDown"
  /** The Brightness Up key. (KEYCODE_BRIGHTNESS_UP) */
  | "BrightnessUp"
  /** Toggle removable media to eject or insert. (KEYCODE_MEDIA_EJECT) */
  | "Eject"
  /** The LogOff key. */
  | "LogOff"
  /** Toggle power state. Note: May not be exposed to the OS. (KEYCODE_POWER) */
  | "Power"
  /** The PowerOff key. Sometimes called PowerDown. */
  | "PowerOff"
  /** The Print Screen or SnapShot key. */
  | "PrintScreen"
  /** The Hibernate key. Saves state to disk and shuts down. */
  | "Hibernate"
  /** The Standby key. Low-power mode; sometimes labeled Suspend or Sleep. (KEYCODE_SLEEP) */
  | "Standby"
  /** The WakeUp key. (KEYCODE_WAKEUP) */
  | "WakeUp";

/**
 * @see {@link https://www.w3.org/TR/uievents-key/#keys-unicode}
 * 3.9. General-Purpose Function Keys
 * * General purpose function keys. Additional function key names are
 * implicitly defined by incrementing the base-10 index at the end.
 */
export type FunctionKey =
  /** Explicitly defined function keys F1 through F12 */
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  /** * Implicitly defined F-keys (e.g., "F24").
   * This template literal covers any string starting with F and a number.
   */
  | `F${number}`
  /** Explicitly defined virtual function keys Soft1 through Soft4 */
  | "Soft1"
  | "Soft2"
  | "Soft3"
  | "Soft4"
  /** * Implicitly defined Soft-keys (e.g., "Soft8").
   */
  | `Soft${number}`;
