---
title: Keyboard Shortcuts
description: How to configure Lagos's hold-to-record shortcut and other keyboard controls.
---

Lagos uses a **hold-to-record** shortcut: hold the modifier keys while you speak, release when done. The shortcut uses modifier keys only (no letter keys), so it never conflicts with your existing shortcuts.

## Default Shortcut

**⌘ + Control** — hold both keys to record, release to transcribe.

## Available Combinations

You can choose from five modifier key combinations in Lagos Settings:

| Combination | Keys |
|-------------|------|
| Command + Control | ⌘ + ⌃ |
| Command + Shift | ⌘ + ⇧ |
| Command + Option | ⌘ + ⌥ |
| Control + Option | ⌃ + ⌥ |
| Control + Shift | ⌃ + ⇧ |

## Changing the Shortcut

1. Click the Lagos menu bar icon
2. Open **Settings**
3. Under the **Shortcut** section, select your preferred modifier combination
4. The change takes effect immediately — no restart needed

## How the Shortcut Works

Lagos uses an **Accessibility Event Tap** to detect global modifier key presses. This is why Lagos requires Accessibility permission — without it, the shortcut can't work outside of the Lagos window.

The event tap monitors:
- **Key down** (both modifiers held) → starts recording
- **Key up** (either modifier released) → stops recording and triggers transcription

## Tips

- Hold the keys before you start speaking — there's a very brief startup time
- Speak clearly and at a natural pace; don't rush
- Release both keys at the same time (or within ~100ms) for the best experience
- The menu bar icon pulses red while recording so you always know when it's active

## Hiding the Menu Bar Icon

You can hide the menu bar icon entirely if you prefer a minimal setup. Enable this in Settings → Advanced → Hide menu bar icon. The shortcut still works — you just won't see the visual indicator.
