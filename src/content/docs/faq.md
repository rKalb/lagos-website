---
title: Frequently Asked Questions
description: Common questions about Lagos, permissions, accuracy, and privacy.
---

## Getting Started

### Why does Lagos need Accessibility permission?

Lagos uses an Accessibility Event Tap to detect global modifier key presses (your hold-to-record shortcut). Without Accessibility permission, the shortcut only works when Lagos itself is in focus — which defeats the purpose of a system-wide dictation tool.

Your Accessibility permission only allows Lagos to read keyboard events. Lagos cannot control other applications or read the contents of other windows.

### Why does Lagos need Microphone permission?

Lagos needs microphone access to record your voice when you hold your shortcut. This is required by macOS for any application that captures audio.

### Can I use Lagos without granting Accessibility permission?

Not for the hold-to-record shortcut. You'd need to manually trigger recordings from the Lagos menu bar popover, which is less convenient.

---

## Transcription

### Which engine should I start with?

Start with **Apple Speech (Level 1)** — zero setup, works immediately. If you want higher accuracy, switch to **WhisperKit Standard (Level 2)** after a ~150 MB one-time download.

### Why is my transcription inaccurate?

Common causes:
- **Background noise** — try a quiet environment or a better microphone
- **Speaking too fast** — slow down slightly
- **Engine choice** — Apple Speech is ~8% WER; WhisperKit Turbo achieves ~1% WER
- **Language mismatch** — ensure the selected language matches what you're speaking

### Does Lagos work with non-English languages?

Yes. WhisperKit supports 100+ languages. Apple Speech supports the languages in your macOS Language settings. Configure your language in Lagos Settings → Language or use Auto-detect.

### What is "hallucination filtering"?

Whisper models sometimes generate text when there is silence or background noise. Lagos includes hallucination filtering to discard likely false transcriptions (common phrases Whisper generates for silence, like "Thank you for watching").

---

## Privacy

### Does Lagos store my audio?

No. Audio is captured in memory only and never written to disk. It is processed by the transcription engine and immediately discarded.

### Which engines keep audio on-device?

- **Apple Speech (Level 1)**: On-device (via macOS)
- **WhisperKit (Level 2)**: 100% on-device
- **BYOK (Level 4)**: Sent to your chosen third-party provider

### Is my transcription history private?

Yes. History is stored locally in `~/Library/Application Support/Lagos/history.db` and is never synced to any server.

---

## Setup & Configuration

### Can Lagos launch automatically at login?

Yes. Enable in Settings → General → Launch at login. Lagos uses `SMAppService` for a clean, system-integrated auto-launch.

### Can I hide the menu bar icon?

Yes. Settings → Advanced → Hide menu bar icon. The shortcut still works; you just won't see the status indicator.

### How do I update Lagos?

Lagos uses Sparkle for automatic updates. You'll see an in-app notification when a new version is available. You can also check for updates via the Lagos menu bar icon.

### How do I uninstall Lagos?

1. Quit Lagos from the menu bar icon
2. Drag Lagos from your Applications folder to the Trash
3. Optionally, remove leftover files:
   - `~/Library/Application Support/Lagos/` (history, models)
   - `~/Library/Preferences/com.lagos.dictation.plist` (settings)
   - Keychain entries (search for "Lagos" in Keychain Access)

---

## Contact

Still have questions? [Contact support](/support) or join our [Discord community](https://discord.gg/YPJJQsZV).
