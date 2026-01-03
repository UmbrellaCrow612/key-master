/**
 * Mapped from https://www.w3.org/TR/uievents-key/#key-attr-values (only english set) for all values a keydown / keyup `key` can be mapped into
 * TS types for better intelisense
 */

/**
 * Contains all english alphabet charcters inclduing uppercase
 */
export type Alphabet =
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
  | "Z";

export type ControlCharacter =
  | "Backspace" // U+0008
  | "Tab" // U+0009
  | "Enter" // U+000D
  | "Escape" // U+001B
  | "Delete"; // U+007F

export type GlyphModifierKey = "Shift" | "CapsLock" | "AltGr";

export type SpecialKey = "Unidentified";

export type ModifierKey =
  // Standard modifier keys
  | "Alt" // Alternative key / Apple Option
  | "AltGraph" // ISO Level 3 shift modifier (AltGr / AltGraph)
  | "CapsLock" // Capital lock
  | "Control" // Ctrl key
  | "Fn" // Function switch
  | "FnLock" // Function-Lock
  | "Meta" // Windows / Command key
  | "NumLock" // Number lock key
  | "ScrollLock" // Scroll lock
  | "Shift" // Shift key
  | "Symbol" // Symbol modifier
  | "SymbolLock" // Symbol lock

  // Legacy modifier keys
  | "Hyper" // Legacy
  | "Super"; // Legacy

export type WhitespaceKey =
  | "Enter" // Return / ↵ key
  | "Tab"; // Horizontal Tabulation

export type NavigationKey =
  | "ArrowDown" // Down arrow
  | "ArrowLeft" // Left arrow
  | "ArrowRight" // Right arrow
  | "ArrowUp" // Up arrow
  | "End" // End key
  | "Home" // Home key
  | "GoHome" // Mobile phone Home key
  | "PageDown" // Page Down key
  | "PageUp"; // Page Up key

export type EditingKey =
  | "Backspace" // Backspace key
  | "Clear" // Remove selected input
  | "Copy" // Copy selection
  | "CrSel" // Cursor Select
  | "Cut" // Cut selection
  | "Delete" // Delete key
  | "EraseEof" // Erase to end of field
  | "ExSel" // Extend selection
  | "Insert" // Insert key
  | "Paste" // Paste key
  | "Redo" // Redo last action
  | "Undo"; // Undo last action

export type UIKey =
  | "Accept" // Accept / OK key
  | "Again" // Redo / repeat action
  | "Attn" // Attention key
  | "Cancel" // Cancel key
  | "ContextMenu" // Show application context menu
  | "Escape" // Escape key
  | "Execute" // Execute key
  | "Find" // Open Find dialog
  | "Help" // Open Help
  | "Pause" // Pause current state
  | "Play" // Play / resume current state
  | "Props" // Properties key
  | "Select" // Select key
  | "ZoomIn" // Zoom in
  | "ZoomOut"; // Zoom out

export type DeviceKey =
  | "BrightnessDown" // Decrease display brightness
  | "BrightnessUp" // Increase display brightness
  | "Eject" // Eject / insert removable media
  | "LogOff" // Log off
  | "Power" // Toggle power state
  | "PowerOff" // Power off / Power down
  | "PrintScreen" // Print Screen / Snapshot
  | "Hibernate" // Hibernate / save state to disk
  | "Standby" // Low-power / suspend / sleep
  | "WakeUp"; // Wake up device

export type IMEKey =
  // General IME / composition keys
  | "AllCandidates"
  | "Alphanumeric"
  | "CodeInput"
  | "Compose"
  | "Convert"
  | "Dead"
  | "FinalMode"
  | "GroupFirst"
  | "GroupLast"
  | "GroupNext"
  | "GroupPrevious"
  | "ModeChange"
  | "NextCandidate"
  | "NonConvert"
  | "PreviousCandidate"
  | "Process"
  | "SingleCandidate"

  // Korean-specific keys
  | "HangulMode"
  | "HanjaMode"
  | "JunjaMode"

  // Japanese-specific keys
  | "Eisu"
  | "Hankaku"
  | "Hiragana"
  | "HiraganaKatakana"
  | "KanaMode"
  | "KanjiMode"
  | "Katakana"
  | "Romaji"
  | "Zenkaku"
  | "ZenkakuHankaku";

export type FunctionKey =
  // Standard F keys
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

  // Virtual Soft keys
  | "Soft1"
  | "Soft2"
  | "Soft3"
  | "Soft4";

export type MultimediaKey =
  | "ChannelDown"
  | "ChannelUp"
  | "Close"
  | "MailForward"
  | "MailReply"
  | "MailSend"
  | "MediaClose"
  | "MediaFastForward"
  | "MediaPause"
  | "MediaPlay"
  | "MediaPlayPause"
  | "MediaRecord"
  | "MediaRewind"
  | "MediaStop"
  | "MediaTrackNext"
  | "MediaTrackPrevious"
  | "New"
  | "Open"
  | "Print"
  | "Save"
  | "SpellCheck";

export type MultimediaNumpadKey =
  | "Key11" // 11 key on media numpad
  | "Key12"; // 12 key on media numpad

export type AudioKey =
  | "AudioBalanceLeft"
  | "AudioBalanceRight"
  | "AudioBassBoostDown"
  | "AudioBassBoostToggle"
  | "AudioBassBoostUp"
  | "AudioFaderFront"
  | "AudioFaderRear"
  | "AudioSurroundModeNext"
  | "AudioTrebleDown"
  | "AudioTrebleUp"
  | "AudioVolumeDown"
  | "AudioVolumeUp"
  | "AudioVolumeMute"
  | "MicrophoneToggle"
  | "MicrophoneVolumeDown"
  | "MicrophoneVolumeUp"
  | "MicrophoneVolumeMute";

export type SpeechKey = "SpeechCorrectionList" | "SpeechInputToggle";
