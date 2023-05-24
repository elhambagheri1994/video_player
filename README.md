# Remotion Player

This repository contains an interactive version of the Remotion player example, showcasing a WYSIWYG (What You See Is What You Get) interface for editing and repositioning text fields on a Remotion video player.
this web application allows users to edit and reposition text fields on a Remotion video player. The application has the following features:

- Ability to edit text: Users are able to enter and modify text using a WYSIWYG interface.
- Text repositioning: Users are able to reposition the text fields on the video player.
- Pause and play functionality: When editing the text, the video will be paused, and after editing, the user can play the video again.
- Undo/redo functionality: undo/redo functionality are available to allow users to revert or redo changes made to the text and positions.
- Local storage persistence: The user's progress, including the text and position changes, are saved locally using local storage. So the data is available even after a browser refresh.

## Tech Stack

The project is implemented using the following technologies:

- TypeScript
- React
- Remotion (https://www.remotion.dev/)
- react-draggable
- draft-js

## Available Scripts

In the project directory, you can run:

### `yarn`

to add all of the dependencies you need.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Document

[File Structure](https://github.com/elhambagheri1994/video_player/blob/main/docs/fileStructure.md)

[Typescript](https://github.com/elhambagheri1994/video_player/blob/main/docs/typescript.md)
