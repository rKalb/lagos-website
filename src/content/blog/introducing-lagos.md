---
title: Introducing Lagos
description: We built a voice dictation tool for Mac that works instantly, keeps your audio private, and gets out of your way.
publishDate: 2026-02-26
author: Lagos Team
tags: [announcement, product]
---

We've been using voice dictation tools for years. Some require subscriptions. Some upload everything to the cloud. Some require you to be in a specific app. Most are just... in the way.

So we built Lagos.

## What is Lagos?

Lagos is a macOS menu bar app that converts your voice to text. Hold a keyboard shortcut, speak, release — your words appear wherever you were typing. That's the entire workflow.

It lives in your menu bar, uses no more RAM than a text editor, and stays out of your way until you need it.

## Why we built it

We wanted a tool that:

1. **Works immediately** — no account, no API key, no setup
2. **Respects privacy** — audio never stored on disk, local options available
3. **Lets you choose your accuracy/privacy trade-off** — not locked into one engine
4. **Works everywhere** — any text field, any app, system-wide

We couldn't find one that did all four. So we built it.

## How it works

Lagos ships multiple transcription engines, all running on your Mac:

- **Apple Speech** — instant, built-in, zero setup
- **WhisperKit** — local AI, ~1% word error rate with the Turbo model, completely private

You start with zero setup and upgrade when you want more. The app doesn't push you anywhere. *(Update, June 2026: Lagos now also ships the optional [Parakeet engine](/engines/parakeet) — even faster and more accurate for English, still 100% on-device.)*

## Who it's for

Lagos works for anyone who types on a Mac and wants to talk instead. That includes:

- People with RSI, carpal tunnel, or mobility challenges who need a better alternative to typing
- Developers dictating prompts to AI coding assistants like Claude or Cursor
- Writers, journalists, and content creators who think faster than they type
- Anyone who just wants to take a note without reaching for the keyboard

## What's next

Lagos 1.3.2 is out today. We're actively working on reliability, accuracy, and the dictation ergonomics that make Lagos feel invisible — see the [changelog](/changelog) for what's shipped since this post.

[Download Lagos for free](/#download) and let us know what you think. We're on [Discord](https://discord.gg/YPJJQsZV) and always open to feedback.
