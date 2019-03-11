const express = require("express");
const router = express.Router();
const headers = require('../../config/keys_twitter.js');
const OAuth = require('OAuth');

const config = {headers: headers}

router.get("/all", (req, res) => {
    const hashTag = req.query.tag;
    const URL = `https://api.twitter.com/1.1/search/tweets.json?q=${hashTag}` 

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

    oauth.get(
        URL,
        headers["access_token"], 
        headers["secret_token"], 

        function (e, data, response) {
        if (e) console.error(e);        
        tweets = JSON.parse(data)
        return res.json(tweets);     
        }
        )
});




module.exports = router
