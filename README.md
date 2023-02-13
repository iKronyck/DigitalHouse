<h1 align="center">DigitalHouse</h1>

React Native Challenge

### Stack

1) React (V18.2)
2) React-Native (V0.71.2)
3) Jest/React Native testing library/Testing library hooks
4) React Navigation (V6)
5) TypeScript (V4.8.4)
6) ESLint (V8.19)
7) Prettier (V2.8)
8) Husky (v4)
9) Lint-Staged (V13.1)
10) Axios (V1.3.2)
11) Yarn
12) Git-commit-msg-linter

### File Structure

```
.
└───src
│  │
│  └───adapters
│  │  index.ts
│  │  quantity.adapter.ts
│  │
│  └───assets
│  │  └───fonts
│  │  │   │  AvenirLTStd.otf
│  │  │
│  │  └───icons
│  │  │   │  arrow.png
│  │  │ 
│  │  colors.ts
│  └───components
│  │  └───Button
│  │  │   │  Button.styles.ts
│  │  │   │  Button.types.ts
│  │  │   │  Button.tsx
│  │  │
│  │  └───Typography
│  │  │   │  Typography.styles.ts
│  │  │   │  Typography.types.ts
│  │  │   │  Typography.tsx
│  │  │
│  │  index.ts
│  └───models
│  │  │   product.model.ts
│  └───routes
│  │  └───models
│  │  Router.tsx
│  │  index.ts
│  └───screen
│  │  └───Home
│  │  │  └───adapters
│  │  │  │  index.ts
│  │  │  │  points.adapter.ts
│  │  │  └───components
│  │  │  │  └───AllButton
│  │  │  │  └───ErrorBoundary
│  │  │  │  └───Header
│  │  │  │  └───PointsCard
│  │  │  │  └───ProductItem
│  │  │  │  └───ProductContainer
│  │  │  │  index.ts
│  │  │  └───hooks
│  │  │  │  useProducts.test.ts
│  │  │  │  useProducts.ts
│  │  │  │  index.ts
│  │  │  HomeScreen.tsx
│  │  │  HomeScreen.test.tsx
│  │  │  HomeScreen.types.tsx
│  │  │  HomeScreen.styles.tsx
│  │  │  index.ts
│  │  └───ProductDetail
│  │  │  └───components
│  │  │  │  └───Header
│  │  │  │  index.ts
│  │  │  ProductDetail.tsx
│  │  │  ProductDetail.test.tsx
│  │  │  ProductDetail.types.tsx
│  │  │  ProductDetail.styles.tsx
│  │  │  index.ts
│  └───services
│  │  │  instance.service.ts
│  │  │  public.services.ts
│  │  │  index.ts
│  └───utilities
│  │  │  data.util.ts
│  │  │  index.ts
│  │  App.tsx
└───node_modules
└───android
└───ios
│   .eslintrc.js
│   .gitignore
│   .huskyrc.json
│   .lintstagedrc.json
│   .node-version.json
│   .prettierrc.js
│   .ruby-version
│   .watchmanconfig
│   app.json
│   babel.config.js
│   index.js
│   metro.config.js
│   package.json
│   react-native.config.js
│   README.md
│   tsconfig.json
│   types.d.ts
│   yarn.lock   
```

### Screenshoots

| Android  | iOS |
| ------------- | ------------- |
| ![Screenshot 2023-02-10 at 19 52 03](https://user-images.githubusercontent.com/12678606/218233125-76d58a7c-41ac-4b19-9b6e-b8fe982af4a9.png) | ![Screenshot 2023-02-10 at 19 49 35](https://user-images.githubusercontent.com/12678606/218233068-267eb17d-1ee8-4dec-bef4-1539ad0aa881.png)  |
| ![Screenshot 2023-02-10 at 19 52 11](https://user-images.githubusercontent.com/12678606/218233309-6b8a2693-ce5e-4769-bfb3-fe8632313c78.png) | ![Screenshot 2023-02-10 at 19 50 14](https://user-images.githubusercontent.com/12678606/218233305-a3a4780f-c108-4a4e-b014-816d16f44135.png)  |
| ![Screenshot 2023-02-10 at 19 52 18](https://user-images.githubusercontent.com/12678606/218233395-82c9912a-66c8-4cc7-86b6-5f0d75933e08.png) | ![Screenshot 2023-02-10 at 19 50 21](https://user-images.githubusercontent.com/12678606/218233393-947dc0a4-c9ba-402f-b4ba-6b509e1dda8b.png) |
| ![Screenshot 2023-02-11 at 01 38 45](https://user-images.githubusercontent.com/12678606/218246795-fa3e5ee3-2a0e-4d44-98d9-36c1d3987afd.png) | ![Screenshot 2023-02-11 at 01 38 36](https://user-images.githubusercontent.com/12678606/218246791-8aa255be-b2d4-4293-806b-449ce12c06de.png)  |


### Pre-requisties
  - Make sure you have [Node 18 LTS](https://nodejs.org/en/download/) or greater installed.
  - Make sure you have [Ruby  2.7.6](https://www.ruby-lang.org/en/news/2022/04/12/ruby-2-7-6-released/) installed.
  - You can see the steps for install RN CLI in their [documentation](https://reactnative.dev/docs/environment-setup).

### Instalation

- Download or clone this repo.
```bash
git clone git@github.com:iKronyck/DigitalHouse.git
```
- Go to project root folder `cd digitalHouse`.
- Run `yarn install`.

### Running

- Run the app in a iOS device or emulator with the command below.
```bash
npx pod-install
```
- Run the app in a Android device or emulator with the command below.
```bash
npx react-native run-android
```
- Run the app in a iOS device or emulator with the command below.
```bash
npx react-native run-ios
```
- Run the tests with the command below.
```bash
npm run test
```

![Screen-Recording-2023-02-12-at-2 (1)](https://user-images.githubusercontent.com/12678606/218382668-efdc04f4-7af2-4f36-bc92-8df21c31f0ad.gif)