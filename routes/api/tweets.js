const express = require("express");
const router = express.Router();
const headers = require('../../config/keys_twitter.js');
const OAuth = require('oauth');
const request = require('request');
const axios = require('axios');



// const config = {headers: headers};

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
    let url;

    oauth.get(
        URL,
        headers["access_token"], 
        headers["secret_token"], 

        function (e, data, response) {
        if (e) console.error(e);        
        
        tweets = JSON.parse(data).statuses.map(status => status.text);
        

        auth = "as7FTR2m6ycuNE38XWXwo4FyAsYW3jnWwZmvUGoR1ps";
        // url = 'https://apis.paralleldots.com/v3/sentiment';


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
        const sentiment = JSON.parse(body);

        request.post({
                    url: 'https://apis.paralleldots.com/v3/emotion',
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
                const emotion = JSON.parse(body);
                
                 
                return res.json({sentiment, tweets, emotion});    
        
                })
       
        // return res.json({sentiment, tweets});   

        }
        )
        // .then(() => (
        //     request.get({
        //         url: 'https://apis.paralleldots.com/v3/emotion',
        //         formData:
        //         {
        //             "Content-type": "application/json",
        //             "text": tweets,
        //             "api_key": auth
                    
        //             }
                    
        //         },
        //     function optionalCallback(error, httpResponse, body) {
        //     if (error) {
        //         return console.error('upload failed:', error);
        //     }
        //     const emotion = JSON.parse(body);
        //     result[emotion] = emotion;
             
        //     return result;   
    
        //     })
        // ))
    });
});




module.exports = router



        // axios({
        //     method: 'post',
        //     url: url,
        //     data: data
        // }).then(data=> console.log(data))
        //     .catch(err=>console.log(err))
        
        // return res.json(sentiment);     
        // });
// request.post({
//     url: 'https://apis.paralleldots.com/v3/sentiment',
//     formData:
//     {
        
//         "TEXT": tweets,
//         "API KEY": auth
        
//         }
        
//     },
//     function optionalCallback(error, httpResponse,body) {
//         if (error) {
//             return console.error('upload failed:', error);
//         }
//         console.log('upload successful', body);

//         });

// let sentiment = () => request({
//     uri: 'https://apis.paralleldots.com/v3/sentiment',
//     method: "post",
//     multipart: {
//         chunked: false,
//         data: [
//             {
//                 'content-type': 'application/json',
//                 body: tweets,
//             },
//             {
//                 'content-type': 'application/json',
//                 body: auth,
//             }
//         ]
//     }
    
// },
// function(error, response, body) {
//     if (error) {
//         return console.error('upload failed:', error);
//     }
//     console.log('upload successful', body);
// }
// );