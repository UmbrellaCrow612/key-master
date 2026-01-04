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
