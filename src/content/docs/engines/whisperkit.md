---
title: WhisperKit — Local AI (Level 2)
description: OpenAI Whisper running on-device via Core ML. Cloud-grade accuracy with complete privacy.
---

WhisperKit is Lagos's recommended transcription engine for users who want the best accuracy without sending audio to a server. It runs OpenAI's Whisper model locally on your Mac using Apple's Core ML framework.

## How It Works

WhisperKit runs the Whisper neural network entirely on your device's Neural Engine and GPU. It achieves accuracy comparable to cloud services — while keeping your audio completely private.

## Models Available

Lagos supports two WhisperKit models:

| Model | Size | WER | Speed |
|-------|------|-----|-------|
| Standard (base) | ~150 MB | ~5% | Fast |
| Turbo (large-v3-turbo) | ~1.5 GB | ~1% | Medium |

Start with **Standard** for a quick download. Upgrade to **Turbo** for the highest accuracy.

## Setting Up WhisperKit

1. In Lagos Settings, select **WhisperKit** as your engine
2. Click **Download Model** next to your preferred model
3. Wait for the download to complete (~150 MB for Standard, ~1.5 GB for Turbo)
4. WhisperKit is ready — no further configuration needed

Models are downloaded once and stored at `~/Library/Application Support/Lagos/models/`.

## Accuracy

- **Standard model**: ~5% WER on average English speech
- **Turbo model**: ~1% WER — competitive with commercial cloud services

WhisperKit is particularly strong at technical terminology, proper nouns, and non-standard vocabulary. It also handles accents better than Apple Speech.

## Privacy

Audio is **never sent to any server**. All transcription happens on-device using your Mac's Neural Engine. Nothing leaves your machine.

## Language Support

WhisperKit supports **100+ languages** via the Whisper model's multilingual capabilities. Set your language in Lagos Settings → Language, or use Auto-detect.

## Hardware Requirements

WhisperKit works on Apple Silicon (M1 and later). It also runs on Intel Macs but is significantly faster on Apple Silicon.

## When to Use WhisperKit

- You want the best accuracy without a cloud subscription
- Privacy is important — no audio should leave your device
- You're on a reliable internet connection for the one-time model download
- You want full language support
