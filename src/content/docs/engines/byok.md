---
title: Bring Your Own Key (Level 4)
description: Use your own API keys from OpenAI, Deepgram, AssemblyAI, Google Cloud, or Wispr Flow with Lagos.
---

BYOK (Bring Your Own Key) lets you connect Lagos to your own account with one of five supported transcription providers. Full control — you pay your provider directly and choose the exact model and endpoint you want.

## Supported Providers

| Provider | Recommended For |
|----------|----------------|
| **OpenAI Whisper** | High accuracy, broad language support |
| **Deepgram** | Low latency, streaming use cases |
| **AssemblyAI** | Accuracy + speaker diarization |
| **Google Cloud Speech** | Google ecosystem integration |
| **Wispr Flow** | Context-aware smart dictation |

## Setting Up BYOK

1. Obtain an API key from your chosen provider
2. In Lagos Settings → Engines, select your provider
3. Paste your API key into the field and press Save
4. Your key is immediately stored in the macOS Keychain — it's never stored in plain text

## Security

API keys are stored exclusively in the **macOS Keychain**, encrypted by the operating system. Lagos never transmits your API key to any Lagos server. Keys are used only to make requests directly to your chosen provider.

## Cost

You are billed directly by your provider. Lagos does not add any markup. Typical costs:
- OpenAI Whisper API: ~$0.006/minute
- Deepgram: varies by plan
- Google Cloud STT: ~$0.004–0.016/minute

## AI Cleanup with BYOK

If you're using OpenAI as your BYOK provider, you can also enable AI cleanup (filler word removal, grammar polish) using GPT-4o-mini on your key. Enable this in Settings → AI Cleanup.

## When to Use BYOK

- You already have API credits with a provider
- You want a specific provider's accuracy characteristics
- You want to control costs at scale
- You're a developer who prefers managing your own API access
