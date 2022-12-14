## A\* Visualizer

This App was built as part of a bachelor thesis in 2022, 2023.  
Author: Silas Irmisch

Based on electron framework and node.js.  
Tested for Windows 10 and MacOS.

### Executables

Navigate to directory `/out/AStarVisualizer-` to find executable builds for your system.  
If they are either not working or missing, you will need to follow Steps 1-3 of "Dev Environment Setup".  
Then you can run `npm run make` in the terminal and the executables should get built.
In the directory `/out/make/zip/` you can find zip-files containing the same executable builds.

#### Notes on MacOS Builds

To run this app on macOS, you might have to give permissions.
If your system warns you about an unverified developer, navigate to the "security" section of your system preferences, and give the permission to run the app.
The app should relaunch automatically, with a final warning popup that you can dismiss. If it doesn't relaunch, you can try running it again manually.

### Dev Environment Setup

(should work both on Windows and MacOS)

1. install nodejs and npm. see [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. open terminal in this project's root directory
3. `npm install`
4. if everything worked out, you can start!:
    - `npm start` for standard execution
    - `npm run dev` for dev-mode. This includes resizable window, reload and dev tools
