const express = require("express");
const router = express.Router();
// const request = require('request');
const axios = require('axios');
const headers = require('../../config/keys_twitter.js')

const config = {headers: headers}

router.get("/all", (req, res) => {
    const hashTag = req.params.tag;
    const URL = `https://api.twitter.com/1.1/search/tweets.json?q=${hashTag}`;
    let tweets;
    axios.get(URL, config)
    .then(response => {
        tweets = response.data.statuses
        return res.json(tweets);
    })
    .catch(err => console.log(err));
});



const URL = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa'

// const config = {headers: headers}


module.exports = router
// module.exports = () => axios.get(URL, config).then(res => console.log(res.data.statuses)).catch(err => console.log(err));
// module.exports = router;