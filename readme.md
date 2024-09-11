# React Cookie Hook

Custom react hook for getting and setting cookies.

## How it works

- The `useCookie()` hook allows the user to get and set custom cookies. `const [getCookie, setCookie] = useCookie();` useCookie is controlled through a getter and setter.

## How to use

### Install

Installation: `npm install react-cookie-hook`

### Usage

Import the package into your app:

`import { useCookie } from "react-cookie-hook";`

#### Hook Example:
```   
    const [getCookie, setCookie] = useCookie();

    setCookie({numberOfDays: 1, cookieName: "testing", value: "testing value", path: "/"});

    getCookie('testing');
```
### Hook Configuration:

    -  `setCookie({})`
        This takes an object with the following:
        - numberOfDays (Number)
        - cookieName (String)
        - value (String)
        - path (String)

    -  `getCookie("")`
        This takes a string for the cookie name.