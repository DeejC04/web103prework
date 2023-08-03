
# Creatorverse // CodePath WEB103 Prework

TESTING BRANCH

Web-app enabling basic CRUD operations on a list of "creators".

## Tech Stack

HTML, CSS, JavaScript, Vite, React, React Router, PicoCSS, and Supabase

<a href="https://github.com/rackt/react-router" title="React Router"><img src="https://github.com/get-icon/geticon/raw/master/icons/react-router.svg" alt="React Router" width="21px" height="21px"></a>
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="21px" height="21px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS3"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="21px" height="21px"></a>
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="21px" height="21px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="21px" height="21px"></a>
<a href="https://vitejs.dev/" title="Vite"><img src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg" alt="Vite" width="21px" height="21px"></a>
<a href="https://picocss.com/docs/" title="PicoCSS"><img src="https://www.vectorlogo.zone/logos/picocss/picocss-icon.svg" alt="PicoCSS" width="21px" height="21px"></a>
<a href="https://supabase.com/" title="Supabase"><img src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="Supabase" width="21px" height="21px"></a>

## Run Locally

Clone the project

```bash
  git clone https://github.com/DeejC04/web103prework
```

Go to the project directory

```bash
  cd web103prework
```

Install dependencies

```bash
  npm install
```

Befire starting the server, we need to configure Supabase.

## Configuring Supabase 

To run this project, you will need to first create a Supabase account and project. Do this and then continue.

Create a new table in Supabase. Name it whatever you'd like. Disable RLS and enable Realtime. Also, add columns specified below.

**Creating a table**
![Table Creation](./readmeFiles/gifs/tablecreation.gif)

**Column Settings**
![Column Settings](./readmeFiles/images/tableColumns.png)

Next, create a storage bucket called `images` and enable it as a public bucket.

![Bucket Creation](./readmeFiles/gifs/bucketCreation.gif)

To allow users to add to and view contents, add a custom policy as follows, with the only text in the box being `true`. Enable all methods for all users.

![Bucket Policies](./readmeFiles/gifs/bucketPolicy.gif)

## Finalizing Supabase Setup & Environment Variables

Finally, within your local project files, we'll set up our environment variables.

Once done, locate your project API URL and the Anon key. Add the following environment variables to your .env file (excluding greater than/less than signs) 

`VITE_SUPABASE_URL=<Your Supabase URL>` `VITE_SUPABASE_API_KEY=<Your Anon Key>`
`VITE_SUPABASE_TABLE_NAME=<Your Supabase Table Name>`

# Running the Project

Finally, to actually run the web-app, input `npm run dev` into your terminal.

### License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

