# Shoelace School Frontend - Developer's Guide

This project is the Frontend side of the Shoelace Fullstack Developer School Project.

### Branching Strategy used

This proect utilizes a simple Gitflow branching strategy: This repo has three major branches:

- Develop(dev) -- All new features are tested here by the developers. Direct push is also possible here.
- Release(int) - Think of this branch as used by the QA / Testers. Features are added here via PR. Direct push is not possible.
- Master(prod) -- This is the production i.e what the public sees. Direct push is not possible and ideally PRs has to be reviewed by atleast two senior persons.

Note: I was not able to setup the rules and restrictions for `int` and `master` branch because Github currently do not support that for private accounts. Its a paid feature.

## How to setup

In the project directory, you can run:

##### 1.) Take care to have the following installed

- nodejs (version 10 and above)
- On windows: Git for windows or Git bash

##### 2.) Clone this project

- Open your terminal and run `git clone https://github.com/Ezugudor/shoelace-school-frontend.git`
- run `cd shoelace-school-frontend` to change to the project directory.

##### 3.) Start the app (Development)

- run `npm run start` to start the app in development mode.
  Notice that app will automatically open in your default browser at [http://localhost:3000](http://localhost:3000).

##### 4.) Test the app

- run `npm run test`.

## Deploy to Production?

##### 5.) Build the app

- run `npm run build` to build the app for production to the `build` folder.\
  This step correctly bundles this React project in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!
