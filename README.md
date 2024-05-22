## Installation

Use pnpm to set the Node.js LTS version for your environment:

```
pnpm env use --global lts
```

After setting up your environment, install dependencies with:

```
pnpm i
```

## Running the development build

To run the dev build inside tauri:

```
pnpm tauri dev
```

The local dev server will be running on http://localhost:5173, which tauri will use to retrieve the dev build. You can use both tauri or a web browser for development.

Make sure you are not running other web servers on http://localhost:5173.

The first time you run tauri, it will need to compile its rust dependencies. The following runs will be much faster.

If you wish to run the dev build without running tauri, use:

```
pnpm dev
```

## Builds

To create a production build:

```
pnpm tauri build
```

This will create a binary which contains the tauri app + js bundle.

To only create the js bundle:

```
pnpm build
```
