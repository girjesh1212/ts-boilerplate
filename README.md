# ABOUT THE BOILER PLATE

This boilerplate is starting point of any node js server in typescript. This file is a guide to setup the boilerplate.

## Steps to setup

Below are the steps to initialise the project and come up to this boilerplate.

## Create empty project

```
npm init -y
```

## Install dependencies and dev-dependencies

1. Install dependencies required in production

```
npm install express dotenv
```


2. Install dev dependencies needed during development, but not in production

```
npm install nodemon typescript ts-node @types/express -D
```

## Create source folder

This is where typescript code will be written. 

directory: `src`

Inside `src`, create these two files:

- index.ts (the entry point of this server)
- server.ts (where server is defined)

npm run always call `index.ts` since we have defined it as entry point

## Create destination folder

This is where typescript build is generated into javascript, and used in production

directory: `dist`

## Typescript config file

This has typescript settings like source to take typescript files, location of files on build, etc and other checks that typescript supports on top of javascript.

Init command:

```
npx tsc --init
```

This creates file named `tsconfig.json` which contains the ts settings


## nodemon config file

This file contains nodemon settings such as starting script to control nodemon behaviour

filename: `nodemon.json`

It has the following config

- watch: the directory to watch for changes
- ignore: ignore files to watch inside the watched directory
- ext: file extensions to watch for
- exec: startup command

## Add startup scripts in package.json

```
"dev": "nodemon",
"build": "tsc",
"start" "node dist/index.js"
```

- `dev` command: Since config is defined in nodemon.json, we only need to do nodemon and not nodemon index.ts or something like that

- `build` command: Since we already have tsconfig, just run tsc and it will read tsconfig to build

- `start` command: This will run the js build, used in production
