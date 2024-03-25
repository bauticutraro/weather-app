# Weather App

This is a solution to the Weather App challenge using AI Weather by Meteosource API from [Rapid Api](https://rapidapi.com/hub)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Get your API key](#get-your-api-key)
  - [Running the project](#running-the-project)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for a city and see the weather information
- See the current weather and the forecast for the next 5 days on details page
- Add and remove cities from the favorites list

### Links

- Live Site URL: [Weather App Live Site](https://weather-app-bcutraro.vercel.app/)

## My process

### Built with

- [Next.js 14](https://nextjs.org/docs)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)

### Get your API key 
Get your API key from [Rapid Api](https://rapidapi.com/hub) to use the AI Weather by Meteosource API

- Create an account on [Rapid Api Sign Up](https://rapidapi.com/auth/sign-up)
  - You will have to verify your email
  - You will have to complete your profile
- Go to [AI Weather by Meteosource API Rapid Api](https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource/)
  - Click on `Pricing` and choose the free plan (only 100 requests per month)
  - Go back to [endpoints](https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource/)
  - After select an endpoint, you will see the `X-RapidAPI-Key` key on Header Parameters
&nbsp;
![Rapid Api Headers](/public/static/images/rapid-api-headers.png)
&nbsp;
  - Copy the key and save it for the next step

### Running the project

The first step is install Node.js. It should be version 18.17 or higher. If you don't have it, you can download it from the official website

- [Click here to download Node.js](https://nodejs.org)
<br/>

##### Installation

Install npm packages running

```bash
$ npm install
```
<br/>


##### Running the application

- Create `.env.local` file with these variables

```js
NEXT_PUBLIC_BASE_URL=http://localhost:3000
WEATHER_API=https://ai-weather-by-meteosource.p.rapidapi.com
WEATHER_API_KEY=YOUR_API_KEY
```

- Run the proyect

```bash
$ npm run dev
```
<br/>

##### Check prettier and eslint
- Check prettier format
```bash
$ npm run prettier
```
<br/>

- Fix prettier format
```bash
$ npm run prettier:format
```
<br/>

- Fix eslint format

```bash
$ npm run eslint
```

## Author

- Frontend Mentor - [@bauticutraro](https://github.com/bauticutraro)
