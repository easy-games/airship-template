# Airship Template Game
Use this repo as a starting point for your future Airship game!  

**Once opened in Unity, open scene "DefaultScene"**

## Setting up the TypeScript Project
Note: you must open the project in Unity before building the Typescript.

Use Git Bash on PC, or Terminal on Mac:
First, `cd` into the TypeScript project directory.
```
cd Assets/Typescript~
```

Next, install node dependencies.
```
npm i
```

Now start the compiler in watch mode.
```
npm run watch
```

## Using Multiplayer Play Mode
We use the Multiplayer Play Mode (MPPM) package to run the client and server together. This is required to play.
1. Press menu item **Window > Multiplayer Play Mode**
2. Make sure Player 2 has the "Server" tag added. Add if it does not.
3. Activate Player 2

Now you can press play and both the client and server will startup together.
