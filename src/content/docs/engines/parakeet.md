---
title: Parakeet (Beta)
description: NVIDIA's Parakeet TDT v3 running fully on-device. Faster and more accurate than Whisper large-v3-turbo for English — still 100% private.
---

Parakeet is Lagos's newest local engine, added in v1.4.0 as an opt-in beta. It runs NVIDIA's **Parakeet TDT v3** speech model fully on-device via the FluidAudio framework — no server, no account, no audio leaving your Mac.

## Why Parakeet?

For English, Parakeet is **faster and more accurate than Whisper large-v3-turbo** — the previous best local option — while remaining 100% on-device. Transcription latency is in the tens of milliseconds class, which makes the hold → speak → release loop feel instant even for long dictations.

## Requirements

- **Apple Silicon** (M1 and later) — Parakeet does not run on Intel Macs
- **macOS 14 Sonoma or later**
- A one-time **~2.4 GB** model download

## Setting Up Parakeet

1. In Lagos Settings → Engine, choose the **Parakeet (Beta)** local model
2. Confirm the ~2.4 GB one-time download
3. Once downloaded, Parakeet transcribes everything locally — no further configuration

## Beta Status

Parakeet is labeled beta while we gather real-world feedback. The default engine remains WhisperKit; Parakeet is entirely opt-in. If you hit issues, switch back to WhisperKit in one click and [tell us what happened](/support).

## Language Support

Parakeet TDT v3 is strongest in **English**. For heavy non-English dictation, WhisperKit's multilingual models are the better choice today.

## Privacy

Identical to every Lagos engine: audio is processed in memory on your Mac and never sent anywhere. See the [Privacy Policy](/privacy).

## Attribution

The Parakeet TDT v3 model is created by NVIDIA and used under the CC-BY-4.0 license (attribution also shown in Lagos → About).
