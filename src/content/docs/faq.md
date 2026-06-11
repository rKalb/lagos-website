---
title: Frequently Asked Questions
description: Common questions about Lagos, permissions, accuracy, and privacy.
---

## Getting Started

### What does Lagos need to run?

macOS 14 Sonoma or later. Apple Silicon Macs (M1 and later) get all three engines; Intel Macs run the Apple Speech engine (WhisperKit and Parakeet require Apple Silicon).

### Why does Lagos need Accessibility permission?

Lagos uses an Accessibility Event Tap to detect global modifier key presses (your hold-to-record shortcut) and to paste the result (a simulated ⌘V). Without it, the shortcut only works when Lagos itself is in focus — which defeats the purpose of a system-wide dictation tool.

Accessibility permission lets Lagos read keyboard events and post the paste keystroke. Lagos cannot read the contents of other windows. Depending on your macOS version, you may also be asked for **Input Monitoring** — it serves the same global-hotkey purpose.

### Why does Lagos need Microphone permission?

Lagos needs microphone access to record your voice when you hold your shortcut. This is required by macOS for any application that captures audio.

### Is the download safe? Will Gatekeeper complain?

Official releases are Developer ID-signed, notarized by Apple, and stapled. macOS opens them with a normal double-click — no right-click workarounds needed.

### Can I use Lagos without granting Accessibility permission?

Not for the hold-to-record shortcut. You'd need to manually trigger recordings from the Lagos menu bar popover, which is less convenient.

---

## Transcription

### Which engine should I start with?

Start with **Apple Speech** — zero setup, works immediately. If you want higher accuracy, switch to **WhisperKit Standard** after a ~150 MB one-time download, or **WhisperKit Turbo** (~1.5 GB) for the best Whisper accuracy. The optional **Parakeet (Beta)** engine (~2.4 GB) beats Whisper Turbo on English accuracy and speed — all on-device.

### Why is my transcription inaccurate?

Common causes:
- **Background noise** — try a quiet environment or a better microphone
- **Speaking too fast** — slow down slightly
- **Engine choice** — Apple Speech is ~8% WER; WhisperKit Turbo achieves ~1% WER; Parakeet (Beta) is stronger still for English
- **Language mismatch** — ensure the selected language matches what you're speaking

### Does Lagos work with non-English languages?

Yes. WhisperKit supports 100+ languages. Apple Speech supports the languages in your macOS Language settings. Parakeet (Beta) is strongest in English. Configure your language in Lagos Settings → Language or use Auto-detect.

### Does dictation start instantly? I'm used to losing my first word.

Yes. By default the mic is on only while you record — capture starts in ~50 ms and the start cue plays once recording is already rolling, so speaking on the cue never clips. If you chain dictations rapidly, enable "Keep microphone ready" in Settings: restarts become sub-millisecond and a ~0.45 s pre-roll buffer recovers speech from slightly *before* the keypress.

### What is "hallucination filtering"?

Whisper models sometimes generate text when there is silence or background noise. Lagos includes hallucination filtering to discard likely false transcriptions (common phrases Whisper generates for silence, like "Thank you for watching").

---

## Privacy

### Does Lagos store my audio?

No. Audio is captured in memory only and never written to disk. It is processed by the transcription engine and immediately discarded.

### Which engines keep audio on-device?

All of them. Apple Speech, WhisperKit, and Parakeet (Beta) all process audio on your Mac. No engine Lagos ships today sends audio to any server.

### Does Lagos send any data at all?

Lagos sends anonymous usage analytics and crash reports (Firebase) by default — feature usage events and crash traces, identified only by a random UUID. **Never your audio, never your transcribed text.** This is disclosed during onboarding and there's one switch to turn it all off: **Settings → Privacy → "Send anonymous usage data"**. Full details in the [Privacy Policy](/privacy).

### Is my transcription history private?

Yes. History is stored locally in `~/Library/Application Support/Lagos/history.db` and is never synced to any server.

### Is Lagos open source?

Not currently. The app's source is closed; releases, release notes, and the update feed are public at [github.com/rKalb/lagos-releases](https://github.com/rKalb/lagos-releases). We may revisit this.

### How does a free app pay for itself?

Right now it doesn't — it's a solo developer's labor of love. Core dictation is free forever. Advanced AI writing features may become a one-time Pro purchase someday — never a subscription, and never your audio.

---

## Setup & Configuration

### Can Lagos launch automatically at login?

Yes. Enable in Settings → General → Launch at login. Lagos uses `SMAppService` for a clean, system-integrated auto-launch.

### What happens to my music when I dictate?

By default it ducks — output volume drops while you speak and restores the moment you stop. You can switch to pausing media instead, or turn media handling off entirely (Settings → Audio).

### Will dictating ruin my AirPods audio quality?

No. Lagos records from your Mac's built-in microphone by default, so your AirPods stay on the high-quality A2DP codec instead of dropping into HFP "phone-call mode". You can change the input policy in Settings → Audio.

### How do I update Lagos?

Lagos uses Sparkle for automatic updates. You'll see an in-app notification when a new version is available. You can also check via the Lagos menu bar icon, or follow the [release notes feed](https://github.com/rKalb/lagos-releases/releases.atom).

### How do I uninstall Lagos?

1. Quit Lagos from the menu bar icon
2. Drag Lagos from your Applications folder to the Trash
3. Optionally, remove leftover files:
   - `~/Library/Application Support/Lagos/` (history, models)
   - `~/Library/Preferences/com.lagos.dictation.plist` (settings)

---

## Known Limitations

We'd rather you hear these from us:

- **No AI writing modes, personal dictionary, or app-context awareness yet.** Several competitors have these today; they're next on our roadmap.
- **Intel Macs are Apple Speech only.** WhisperKit and Parakeet require Apple Silicon.
- **Parakeet is beta** — a ~2.4 GB optional download, strongest in English.
- **macOS only**, 14 Sonoma and later. No iOS or Windows version.
- **Analytics are on by default** (anonymous, opt-out in Settings → Privacy — and never your audio or text).

---

## Contact

Still have questions? [Contact support](/support), report a bug on [GitHub](https://github.com/rKalb/lagos-releases/issues), or join our [Discord community](https://discord.gg/YPJJQsZV).
