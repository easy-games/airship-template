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

Now you can press play
We use a tool called ParrelSync to create a clone of the project that runs as the server. You don't make changes to the clone, only the main project. Any changes you make in the main project is auto-synced to the clone. 

1. Select **ParrelSync > Clones Manager**

![Screenshot of ParrelSync menu options](https://1260643417-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FcEFcdlZM6gv3wpelI0y4%2Fuploads%2F7Ru4cjlBQNZtnYfRuLXx%2FScreenshot%202023-06-27%20at%201.46.15%20PM.png?alt=media&token=63de4251-1015-4d31-a657-d47cb40d3d9e)

2. Click **Create New Clone**. This will generate a copy of the project that will act as our server. 
Once complete, Click **Open in New Editor**

![](https://1260643417-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FcEFcdlZM6gv3wpelI0y4%2Fuploads%2FxXLbPbc6h43YWIy1QfSK%2FScreenshot%202023-06-27%20at%201.47.07%20PM.png?alt=media&token=7d07ab15-5562-4198-ad40-ba82895a4f54)
