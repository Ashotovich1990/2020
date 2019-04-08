# 2020

[Live Demo](https://fast-savannah-76615.herokuapp.com/#/)

2020 is an application that lets users listen to the latest Twitter conversations about the TOPIC or PERSON that matters most to them – and more importantly, it lets them listen to the hearts and emotions of these conversations in a visual, palatable experience using the latest AI sentiment and emotion text-analysis technologies.

### Background and Overview

Keeping track of public issues, figures, and elections can be difficult  -- part of the problem is simply too much information. 2020 will simplify that by giving users a quick snap shot of peoples' current attitudes towards a candidate and the discussions about his/her stance on certain issues (i.e., social issues, governance, etc). Search the topics that matter to you OR search one of the pre-populated 2020 candidates to see what Twitter conversations are being had. The goal is for the average user to quickly see why postive/negative conversations are being associated with a candidate and to begin conversations of their own. 

## Technologies and Challenges

### Technologies Used
2020 is built with the MERN stack (MongoDB, Express, React, and Node). Twitter API is used to get fetch tweets about a particular search topic/person, while ParallelDots API is used to provide a sentiment and emotion scores of the aggregated fetched tweet bodies. The data is then visualized using the Chart.js library.

### UI/UX 
2020 consists of a single page upon logging in with with a splash page, navigation bar on top, and main browser page that alternates between the  search bar and graph components depending on the user search input. Additionally, the comments component persists on the main browser page so that the conversations can be read before and after a query has been made. A loading effect has been implemented to let users know that the backend API calls are being called upon before the graph displays are shown.

### Challenges
In development of 2020, the main functionality and largest challenge was building the Twitter API calls into the Express backend to avoid any CORS errors. Unlike the ParallelDots Sentiment/Emotion Text-Analysis API which used an HTTP request method, the Twitter authentication model relies on Oauth2 and a bearer token. As a final step to the backend implementation, the output of the Twitter API call needed to be parsed and input into an array for the resulting ParellelDots API call to be executed.

```
// Twitter API call
router.get("/all", (req, res) => {
    const hashTag = req.query.tag;
    const URL = `https://api.twitter.com/1.1/search/tweets.json?lang=en&count=100&result_type=recent&exclude_replies=true&q=${hashTag}%20-filter%3Aretweets&tweet_mode=extended` 

// BREAK //

oauth.get(
        URL,
        headers["access_token"], 
        headers["secret_token"], 

        function (e, data, response) {
          if (e) console.error(e);        
          tweets = JSON.parse(data).statuses.map(status => status.full_text);
          
          // ParallelDots API call
          request.post({
                      url: 'https://apis.paralleldots.com/v3/sentiment',
                      formData:
                      {
                          "Content-type": "application/json",
                          "text": tweets,
                          "api_key": auth
                          }
                      },

```
Additionally, in order to get the desired tweet results based on the user search query, a search function and state needed to be implemented with certain query parameters adjusted (i.e., full-length tweets, retweet filter, most recent tweets, etc). 
```
//  Search container
handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.receiveSearch(this.state.searchTerm);
      this.props.fetchTweets(this.state.searchTerm);
    }
  }
  
//  BREAK  //

<div className="search-bar">
    <input className="search-box" type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder="Enter name..."/>
    <button className="search-button" type="submit" onClick={this.handleClick}> <i class="fas fa-search"></i> </button>
    {candidates}
</div>
```

The last challenge arose as the resulting sentiments and emotions text-analyses data needed to be brought to the frontend for data visualization. The analysis data needs to be structured in such a way that that Chart.js is able to interpret the final results.

![2020readme3(final)](https://user-images.githubusercontent.com/36525199/55745295-c4799600-59eb-11e9-9a89-78e2b706361d.jpg)



### Group Members
**Team: Viviene De Guzman, David Park, Aram Sargsyan, Corrie Stoddard**

### Bonus Features for the Future
* Provide an 'issues' keyword to display sentiment of candidates' stance on certain topics (i.e., the economy, social issues, etc.)
* Display line graph that shows growing/shrinking sentiments over time with major events (e.g., higher frequency of mentions) plotted over data
* Incorporate D3.js charts that incorporate complex and interactive data visualizations of tweet inputs
