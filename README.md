# Bug Report: Dev server hangs without logging errors

## Description

On running the server through `next dev`, the process hangs and it seems like it takes forever to load the page. When I try to quit the dev process by <kbd>ctrl</kbd> + <kbd>C</kbd> on the terminal, it doesn't quit the process correctly, as seen here:

![image](/terminal.png)

Tailwind doesn't log any errors in the terminal for this. It took me a long time to figure out where I was going wrong. After hours of debugging, I finally noticed this mistake I made in `styles/tailwind.css`:

```
  .btn.link {
    @apply btn underline;
  }
```

Even though I realise what I've done is clearly wrong, Tailwind should've at least logged some errors in the console so it would save some time debugging. It definitely should not hang the dev server.

## Steps to reproduce the bug

```
  npm install
  npm run dev
```
