# http-trap

A simple tool for capturing inbound HTTP requests. It is primarily intended for third-party callback testing.

To start locally:
```
npm install
node trap.js
```

By default the server listens on local port 3000. This could be changes via an environment variable:
```
PORT=8080 node trap.js
```

Use [ngrok](https://ngrok.com/) on the appropriate local port to obtain public URL, e.g.:
```
ngrok http 3000
```

The HTTP headers are shown in a raw form as received. Keys and values are in the same list, _not_ a list of tuples.

The request body is _not_ parsed, only converted "as-is" to UTF-8 text.
