# React Native Type Script Template

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

Welcome to the README for our React Native project, built using the React Native CLI and integrated with Redux Toolkit Query (RTK Query). This document provides detailed information about our project, how to set it up, and how to contribute effectively.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [rtk-query](https://github.com/reduxjs/redux-toolkit) for handling REST APIS.

## Usage

### Copy the structure to your project

You can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `store`: Folder to put all redux middlewares,actions,store and reduxtoolkit services.
     - `services`: This folder contains the RTK Query mutations and queries
     - `auth`:This folder contain the action and reducer
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
     - `common`: This folder contains all the reuseable components like TextInput,Text,DropDown and much more.
     - `constants`:This folder contain all the dummy data that is used for sole purpose of frontend designing,
     - `layout`: This folder contains all the layout HOC that will be used all over the application.This includes ScreenBoiler,Auth Boiler,ScrollContainer,FormScrollContainer and much more
     - `utils`: This folder contains all the utility modules and reuseable functions that can be used throughout the application
       - `CustomHooks`:This folder contains the custom hooks.
       - `Form Validation`: This folder contains the form validators.
       - `Color`: This file contains the colors declared for the purpose of styling.
       - `Styles`: This file contains all the global reuseable styles that will be used throughout the application.
       - `Unit`: This file contains the resposnive units that you call throughout the entire applications for the purpose of making the fonts,height,width responsive.
       - `Image`: This file contains all the images imported and declared.
       - `Svg`:This file contains all the SVGS imported and declared.
       - `R`: The Global accessor with which you can access all the above mentioned Colors,Unit,Image,Styles.
     - `view`: This folder is further divided into two more parts.
       - `Cards`: You have the flexibility to create reusable card within this folder.
       - `Modal`: You have the flexibility to create modals within this folder.
  - `containers`: This folder contains the screens and is further categorized into two more folders
     - `authContainer`:This folder contains all the authentications screens that will be showed before logging in.
     - `appContainer`: This folder contains all the screens that will be shown when authentications will be completed.
  - `navigation`: Folder to store the navigators.
    - `appStack` : File containing the application stack navigation.
    - `authStack`: File containing the auth stack navigation.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Styleguide

In our React Native project, we harness the power of Stylesheet styling to ensure a well-organized and efficient approach to defining and managing styles.

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### We manage three main files for that inside common folder:

- Image: In this file, i am keeping image declarations organized within a dedicated file, ensuring a systematic and efficient approach to handling images throughout the entire user experience.

- Colors: In this file, i am keeping a consistent and visually appealing user interface by using a well-defined set of colors that remain uniform throughout the application. All the colors are declared here.

- Unit: In this file, i am embracing responsive unit sizes, allowing our application to adapt and provide a consistent user experience across various device screen sizes and orientations

- Style: In this file, all the global and reuseable styles are written to ensure lesser code and more code resuability and more styling to be completed in lesser time.



## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux toolkit is implemented with the action-store structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.
Moreover Redux Tool Kit Query (RTK Query) is implemented for REST API calling. RTK Query is a powerful and efficient data fetching and state management library for Redux.


### Services folder and RTK Query handling


To keep the networking layer simple, the template uses RTK Query. 

What is RTK Query? 
Here's a short description

# RTK Query Introduction
Redux Toolkit Query (RTK Query) is a library designed to simplify data fetching and state management in Redux-based applications. It allows you to define and manage API endpoints, query data from them, and mutate data with minimal boilerplate code. RTK Query eliminates the need for writing and maintaining complex data fetching logic, making your project more efficient and maintainable.

### Key Features
- Automatic API Slices: RTK Query generates API slice reducers, actions, and selectors from your API endpoints, reducing boilerplate code.
- Data Normalization: Data fetched by RTK Query is automatically normalized, enabling efficient updates and avoiding duplication.
- Caching: RTK Query features intelligent caching, allowing you to control cache behavior and reduce unnecessary network requests.
- Authentication and Interceptors: Easily integrate authentication and interceptors for custom logic.
- Optimistic Updates: Implement optimistic updates for a smoother user experience.


When you need communication with a screen you have to create a query/mutation function in /store/services/ file according to principles mentioned In Redux Tool kit query doucmention.
For more instruction you can follow (https://redux-toolkit.js.org/rtk-query/overview)


## Container

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

