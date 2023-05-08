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
![node cammand image](./img/node-command.png)

+ The version of `npm` has not yet been determined. I will update the document as development progresses.
+ if you need to update your version of `npm`, you can use the command:
    + `npm install npm -g` to upgrade to newest version
    + `npm install npm@9.5.1 -g` to update to the specified version
  
+ **update**:
  + I have updated my npm to newest version of **9.6.6**
![update npm](./img/update%20npm.png)
##Step 3: Dependency 

## React



## Appendix
- You can find what have been changed on React 18: https://react.dev/blog/2022/03/08/react-18-upgrade-guide#other-breaking-changes