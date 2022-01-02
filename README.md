## Evaluate news articles with Natural Language Processing
This app allows user to evaluate an article using natural language processing (NLP) provided by meaning cloud API

### it is built using:
- Node.js and Express.js for the server and routing
- Webpack as our build tool of choice

### quick setup

```
$ npm install
```
---

## How to run the app
first create the ```.env``` file in the root (same package.json path) and add the API key

signup for API KEY → [meaningcloud](https://www.meaningcloud.com/developer/sentiment-analysis)
```
API_KEY= your_API_key
```

### run in development mode
first, run the wepback dev server from here ↓
```
$ npm run build-dev
```
then run the backend server (from another terminal) ↓
```
$ npm run start
```
and access from here
```http://localhost:8080```
### run in production mode
first, build the wepback production to generate dist folder ↓
```
$ npm run build-prod
```
then start the project ↓
```
$ npm run start
```
and access from here
```http://localhost:8081```

---
## Testing
test is done using ```jest```
to run test ↓
```
$ npm run test
```
---
## Table of contents
```
|📦src
 ┣ 📂client
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜checkURL.js
 ┃ ┃ ┗ 📜submitHandler.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┗ 📜Montserrat-Medium.woff
 ┃ ┃ ┗ 📜style.scss
 ┃ ┣ 📂views
 ┃ ┃ ┗ 📜index.html
 ┃ ┗ 📜index.js
 ┣ 📂server
 ┃ ┣ 📜index.js
 ┃ ┣ 📜mockAPI.js
 ┃ ┗ 📜server.js
 ┗ 📂__tests
 ┃ ┣ 📜app.test.js
 ┃ ┣ 📜checkURL.test.js
 ┃ ┗ 📜submitHandler.test.js
|-- .babelrc
|-- .npmrc
|-- .env
|-- package.json
|-- package-lock.json
|-- webpack.dev.js
|-- webpack.prod.js
```

## Author
[Sameh Mwafy](https://github.com/sammwafy)
