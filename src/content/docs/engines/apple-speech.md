---
title: Apple Speech (Level 1)
description: Lagos's built-in transcription engine using macOS Speech Recognition. Instant, zero setup, fully offline.
---

Apple Speech is Lagos's default transcription engine. It uses macOS's built-in Speech Recognition framework — the same technology powering Siri dictation. No downloads, no API keys, no configuration.

## How It Works

When you hold your shortcut and speak, Lagos captures audio via `AVAudioEngine` and streams it to the macOS Speech Recognition API. Transcription happens on-device, with results returned in near real-time.

## Accuracy

Apple Speech has approximately **8% word error rate (WER)** on average English speech. For natural conversational dictation, this is often acceptable. For technical terms, proper nouns, and non-English languages, accuracy may be lower.

## Privacy

All processing happens on your device. Audio is never sent to Apple servers via Lagos. (Apple's own Speech framework may use on-device or server-side processing depending on your macOS settings and internet connectivity.)

## Language Support

Apple Speech supports the languages available in macOS's Speech Recognition settings. You can select your language in Lagos Settings → Language.

## Limitations

- ~8% word error rate (higher than WhisperKit or cloud engines)
- Accuracy varies with background noise
- Some languages may not be supported

## When to Use Apple Speech

- You want instant dictation with zero setup
- Privacy matters and you want no downloads or API keys
- You need quick notes where exact accuracy isn't critical

For higher accuracy, consider [WhisperKit (Level 2)](/engines/whisperkit).
