# Instruction for setting up the development environment.
|version  |Date       |Editor       |operation  |
|---------|-----------|-------------|-----------|
|1.0      |08/05/2023 |William Wang |editing    |
## Step 1: Dev IDE
- I would suggest use **VScode** as your IDE, but is fine if you want to use others. 
- Use this link to find newest version of VSCode: https://code.visualstudio.com/

## Step 2: Install Node.js @ 18.16.0 LTS

+ Check version if you have already installed Node.js
+ open CMD/Terminal on your computer and type command: `node -v `
+ if you need new install or upgrade your Node.js
  + Use this Link: https://nodejs.org/en to download and install Node.js
  + or you can use command: 
    + `node cache clean -f` to clean the cache
    + `node install -g n` the `n` module is for node version control
    + `n lts` to install the LTS version
    + `n 18.16.0` to install the specified version 
+ you should able to use `npm` command now!
  + in your CMD/Terminal you can teyp `npm -v` to check the `npm` version
![node cammand image](../img/node-command.png)

+ The version of `npm` has not yet been determined. I will update the document as development progresses.
+ if you need to update your version of `npm`, you can use the command:
    + `npm install npm -g` to upgrade to newest version
    + `npm install npm@9.5.1 -g` to update to the specified version
  
+ **update**:
  + I have updated my npm to newest version of **9.6.6**
![update npm](../img/update%20npm.png)

##  Step 3:  React

## Dependency



## Appendix
- You can find what have been changed on React 18: https://react.dev/blog/2022/03/08/react-18-upgrade-guide#other-breaking-changes

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
