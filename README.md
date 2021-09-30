# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project structure 

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── commonNode
│   │   │   ├── CommonNode.test.tsx
│   │   │   └── CommonNode.tsx
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── Login.test.tsx
│   │   │   ├── Login.tsx
│   │   │   └── login.scss
│   │   ├── menu
│   │   │   ├── Menu.test.tsx
│   │   │   ├── Menu.tsx
│   │   │   └── menu.scss
│   │   └── router
│   │       └── RouterComponent.tsx
│   ├── config
│   │   └── base.ts
│   ├── context
│   │   ├── contextManager.tsx
│   │   └── provider
│   │       ├── Provider.test.tsx
│   │       └── Provider.tsx
│   ├── data
│   │   └── menuLists.json
│   ├── index.scss
│   ├── index.tsx
│   ├── layouts
│   │   ├── container
│   │   │   ├── Container.tsx
│   │   │   ├── container.scss
│   │   │   └── container.test.tsx
│   │   ├── index.ts
│   │   ├── leftPanel
│   │   │   ├── LeftPanel.tsx
│   │   │   └── leftPanel.scss
│   │   └── rightPanel
│   │       ├── RightPanel.tsx
│   │       └── rightPanel.scss
│   ├── logo.svg
│   ├── pages
│   │   ├── commonPage
│   │   │   └── CommonPage.tsx
│   │   ├── index.ts
│   │   └── loginPage
│   │       └── LoginPage.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       ├── MenuTitleUtils.test.ts
│       ├── MenuTitleUtils.ts
│       ├── httpUtils.ts
│       ├── htttpUtils.test.ts
│       ├── urlUtils.test.ts
│       └── urlUtils.ts
├── tree.text
└── tsconfig.json

```

21 directories, 60 files

## After clone the project

In the project directory, please run:

### `npm install`

In order to install all dependencies that the project needs to use


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Project Introduction`
This application is mainly consist of menu part and login part.

#### `menu part`
In the menu, there are some buttons including login button, add node button, button 1 and button 3.

##### `login  button`
When clicking this button, the whole left menu would be hidden and login page will be displayed full screen. The url should go to the login router.

##### `Add node button`
When clicking this button, the new nested menu will be generated and router can not change.

##### `Button 1 and Button 3`
When these two buttons are clicked, the related page will be displayed and the routers should go to the related router url. 

#### `login part`
In the login form, the email and password fields should be included. Also, the submit button and cancel button are required.

##### `email and password fields`

When fields are empty, error message should be displayed as required.

when email format is incorrect, invalid message will show on the error message components.

when typing password too long or too short, error message should be displayed on error message components.

##### `submit button`

when the email and password fields valid, the data should be submitted to a fake end point.

##### `cancel button`

when clicking this button, the page should go back to the home page and url should recover to home url.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `container part`

test the layout switch for menu part and login page.

#### `menu part`

When clicking this button, the whole left menu would be hidden and login page will be displayed full screen. The url should go to the login router.

When clicking this button, the new nested menu will be generated and router can not change.

When these two buttons are clicked, the related page will be displayed and the routers should go to the related router url. 

#### `login part`

When fields are empty, error message should be displayed as required.

when email format is incorrect, invalid message will show on the error message components.

when typing password too long or too short, error message should be displayed on error message components.

when the email and password fields valid, the data should be submitted to a fake end point.

when clicking this button, the page should go back to the home page and url should recover to home url.

#### `http module`

when request success, the data would be responsed from the server.

when request fail, unconfiguration information from the fake serve would be responsed.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
