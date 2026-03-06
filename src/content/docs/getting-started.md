---
title: Getting Started with Lagos
description: Install Lagos, set up permissions, and make your first dictation in minutes.
---

Lagos is a macOS menu bar app that converts your voice to text. Hold a keyboard shortcut, speak, release — your words appear wherever you were typing.

## System Requirements

- macOS 13 Ventura or later
- Apple Silicon (M1+) or Intel Mac
- Microphone access

## Installation

1. [Download Lagos](/features#download) — free, no account required
2. Open the `.dmg` file and drag Lagos to your **Applications** folder
3. Launch Lagos from Applications or Spotlight

## First Launch

When you first open Lagos, an onboarding wizard will guide you through:

1. **Microphone permission** — Lagos needs mic access to record your voice
2. **Accessibility permission** — required for Lagos to paste text into other apps
3. **Test dictation** — try your first recording to confirm everything works

Once permissions are granted, Lagos lives in your menu bar and is always ready.

## Recording Your First Dictation

1. Click anywhere you want to type (a text field, document, terminal, etc.)
2. Hold **⌘ + Control** (the default shortcut)
3. Speak naturally
4. Release the keys — Lagos transcribes and pastes your text

That's it.

## Choosing a Transcription Engine

Lagos supports four transcription levels:

| Level | Engine | Accuracy | Privacy | Setup |
|-------|--------|----------|---------|-------|
| 1 | Apple Speech | ~8% WER | On-device | None |
| 2 | WhisperKit | ~1% WER | On-device | Download model |
| 3 | Lagos Pro Cloud | <1% WER | Cloud | Subscription (coming soon) |
| 4 | BYOK | Varies | Depends | API key |

We recommend starting with **Level 1 (Apple Speech)** — zero setup. When you want better accuracy, switch to **Level 2 (WhisperKit)** with one click.

See [Transcription Engines](/engines/apple-speech) for full details on each option.

## Customizing the Shortcut

To change the shortcut modifier keys:

1. Click the Lagos menu bar icon
2. Open **Settings**
3. Under **Shortcut**, choose your preferred modifier combination

Available combinations: ⌘+⌃, ⌘+⇧, ⌘+⌥, ⌃+⌥, ⌃+⇧

## Next Steps

- [Explore transcription engines](/engines/apple-speech)
- [Set up keyboard shortcuts](/shortcuts)
- [Browse your transcription history](/history)
- [Read the FAQ](/faq)
