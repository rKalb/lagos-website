---
title: Transcription History
description: Browse, search, and manage your Lagos transcription history.
---

Lagos automatically saves every transcription to a local SQLite database with full-text search. Your entire dictation history is always available, private, and searchable.

## Accessing History

Click the Lagos menu bar icon and select **History** to open the history panel. You can also use ⌘+H while the Lagos popover is open.

## Searching History

The search box at the top of the History panel uses full-text search (FTS5). Type any word or phrase to instantly find matching transcriptions. Search is case-insensitive.

## History Entries

Each entry shows:
- **Transcription text** — the full text
- **Timestamp** — date and time of the recording
- **Engine** — which transcription engine was used
- **Duration** — how long the recording was

## Storage Location

History is stored locally at:
```
~/Library/Application Support/Lagos/history.db
```

This is a standard SQLite database file. You can open it with any SQLite client (DB Browser for SQLite, TablePlus, etc.) for custom queries or data export.

## Privacy

Your transcription history never leaves your device. It is not synced to any server. The database is accessible only by you and applications with access to your home directory.

## Deleting History

To delete individual entries: swipe left or right-click an entry in the History panel.

To clear all history: Settings → Privacy → Clear transcription history.

## Export

You can copy any transcription entry to your clipboard from the History panel. Full CSV export is planned for a future release.
