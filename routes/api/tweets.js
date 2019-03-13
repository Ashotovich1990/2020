const express = require("express");
const router = express.Router();
const headers = require('../../config/keys_twitter.js');
const OAuth = require('oauth');
const request = require('request');
const axios = require('axios');



const config = {headers: headers};

// const sentiment = require("../../config/keys_sentiment.js");



router.get("/all", (req, res) => {
    const hashTag = req.query.tag;
    const URL = `https://api.twitter.com/1.1/search/tweets.json?lang=en&count=100&result_type=recent&exclude_replies=true&q=${hashTag}%20-filter%3Aretweets` 

    const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        headers["consumer_key"],
        headers["secret_key"],
        '1.0A',
        null,
        'HMAC-SHA1'
    )
    let tweets;
    let auth;
    let result;
    let emotions;

    oauth.get(
        URL,
        headers["access_token"], 
        headers["secret_token"], 

        function (e, data, response) {
        if (e) console.error(e);        

        tweets = JSON.parse(data)
        .statuses.map(status => status.text);

        auth = "as7FTR2m6ycuNE38XWXwo4FyAsYW3jnWwZmvUGoR1ps";
        url = 'https://apis.paralleldots.com/v3/sentiment';


        request.post({
            url: 'https://apis.paralleldots.com/v3/sentiment',
            formData:
            {
                "Content-type": "application/json",
                "text": tweets,
                "api_key": auth
                }  
            },
        function optionalCallback(error, httpResponse, body) {
        if (error) {
            return console.error('upload failed:', error);
        }
        result = JSON.parse(body);
        // return res.json({sentiment: result, tweets});   
        }),

        request.post({
            url: 'https://apis.paralleldots.com/v3/emotion',
            formData:
            {
                "Content-type": "application/json",
                "text": tweets,
                "api_key": auth
                }  
            },
        function optionalCallback(error, httpResponse, body2) {
        if (error) {
            return console.error('upload failed:', error);
        }
        emotions = JSON.parse(body2);


        return res.json({sentiment: result, tweets, emotions: emotions});   

            
        });
    });
});




module.exports = router;