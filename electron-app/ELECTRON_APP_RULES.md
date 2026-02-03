# Electron App — Cursor Rules (Unicorn Desktop)

This project is a **desktop Electron app**, NOT a web app.

- **Do NOT add:** `fetch()`, external API calls, CDN scripts, or any network-dependent code.
- **Do NOT assume:** browser-only APIs without Electron equivalents; public deployment to a URL.
- **Assume:** offline-only, local files and IPC only; use Electron main process + preload for any "server" needs.
- **UI:** runs inside Electron BrowserWindow; use `file://` or `loadFile()`, not a web server.
