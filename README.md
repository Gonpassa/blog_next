# NextJS Blog

Fullstack Blog

**Link to project:** (under construction)

<!-- ![Harmonee](https://github.com/Gonpassa/harmonee/blob/main/Screenshot.jpg?raw=true) -->

## How It's Made:

**Tech used:** React, NextJS, Mongo, Tailwind

**Packages/Dependencies used**
connect-mongo, mongodb, mongoose, next, next-themes, post-css, react, react-dom, react-icons, react-dropzone

Fullstack blogging template. Using mongodb as the database the blogger can submit new blogs with completely customizable structure through the /create route. Dynamic form built with React for creating blogs with unique structures that look good on all devices.

## Installation

`npm install`
`npm run dev`

---

### Things to add

-   Create a `.env.local` file and add the following as `key = value`
    -   DB_STRING = `your database URI`
    -   PASS = `your password` (only for development)
    -   NEXT_PUBLIC_CLOUDINARY_URL=`your cloudinary url`

## Lessons Learned:

This project sharpened my skills with Tailwind and React. As well as taught me many different things about Nextjs 13 and the App router. Using server side rendering for better SEO and pre-rendering by NextJs makes the application feel smoother.

Using the useContext hook to handle authentication context made it a breeze to implement different UI's for the blog owner and the blog readers.

React dropzone makes it easy to create file inputs that are able to be dragged and dropped on to the page. Using cloudinary to store images and storing the respective URL's in mongoDB to reduce strain on my database.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Harmonee:** https://github.com/Gonpassa/harmonee

**Goals** https://github.com/Gonpassa/goals-project
