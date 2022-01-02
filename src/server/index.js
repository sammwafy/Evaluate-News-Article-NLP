// server config using express for routing
const express = require('express')
let path = require('path')
const app = express();
app.use(express.static('dist'));
// include axios
const axios = require('axios').default;

// mock api to test server running
const mockAPIResponse = require('./mockAPI.js')

// bodyParser to get the response body / data
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// config dotenv to store our APIKEY safely in the backend
const dotenv = require('dotenv')
dotenv.config();
const apiKey = process.env.API_KEY;

// allow requests and secure server from HTTP requests
const cors = require('cors');
app.use(cors());



// root path
app.get('/', function(req, res) {
    res.sendFile(path.resolve("dist/index.html"));
})

// sentiment path & using meaningcloud API
// we call the api using axios to meaningcloud and then sending back the results
// to submit handler to print the results

app.post('/sentiment', async(req, res) => {
    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`)

    try {
        res.send(response.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else {
            console.log(`Error : ${err.message}`)
        }
    }

});

// path for testing if server is running
app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

module.exports = app
