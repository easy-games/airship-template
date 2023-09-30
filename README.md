# Airship Template Game
Use this repo as a starting point for your future Airship game! 

## Installing Unity
1. Install [Unity Hub](https://unity.com/download)
2. Install Unity Editor version `2021.3.12f1` from the [Download Archive Page](https://unity.com/releases/editor/archive)

Install the following modules when prompted:
- Android Build Support
- iOS Build Support
- Linux Build Support (IL2CPP)
- Linux Dedicated Server Build Support
- Mac Build Support

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

## Using ParrelSync for the Server
We use a tool called ParrelSync to create a clone of the project that runs as the server. You don't make changes to the clone, only the main project. Any changes you make in the main project is auto-synced to the clone. 

1. Select **ParrelSync > Clones Manager**

![Screenshot of ParrelSync menu options](https://1260643417-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FcEFcdlZM6gv3wpelI0y4%2Fuploads%2F7Ru4cjlBQNZtnYfRuLXx%2FScreenshot%202023-06-27%20at%201.46.15%20PM.png?alt=media&token=63de4251-1015-4d31-a657-d47cb40d3d9e)

2. Click **Create New Clone**. This will generate a copy of the project that will act as our server. 
Once complete, set the arguments to "server"

![](https://1260643417-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FcEFcdlZM6gv3wpelI0y4%2Fuploads%2FxXLbPbc6h43YWIy1QfSK%2FScreenshot%202023-06-27%20at%201.47.07%20PM.png?alt=media&token=7d07ab15-5562-4198-ad40-ba82895a4f54)

3. Click **Open in New Editor**
