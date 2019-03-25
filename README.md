# 2020

[Live Demo](https://fast-savannah-76615.herokuapp.com/#/)

2020 is an application that lets users listen to the latest Twitter conversations about the TOPIC or PERSON that matters most to them – and more importantly, it lets them listen to the hearts and emotions of these conversations in a visual, palatable experience using the latest AI sentiment and emotion text-analysis technologies.

### Background and Overview

Keeping track of public issues, figures, and elections can be difficult  -- part of the problem is simply too much information. 2020 will simplify that by giving users a quick snap shot of peoples' current attitudes towards a candidate and the discussions about his/her stance on certain issues (i.e., social issues, governance, etc). The goal is for the average user to quickly see why postive/negative conversations are being associated with a candidate and to begin conversations of their own.

## Functionality and MVPs
* User authorization: signup and login.
* Fetch data from Twitter and ParallelDots (a sentiment and emotions analysis processor) via API calls.
* Parse data from API responses and graphically display the sentiment/emotions of conversations centered around a particular candidate. Includes underlying numerical details and scores, and provide user with the exact tweets analyzed.
* Implement a comments section to provide users with interactive experience.

## Technologies and Challenges

### Technologies Used
2020 is built with the MERN stack (MongoDB, Express, React, and Node). Twitter API was used to get fetch tweets about a particular search topic/person, while ParallelDots API will be used to provide a sentiment score and emotion score of the aggregated fetched tweet bodies. The data is then visualized using the Chart.js library.

### UI/UX 
2020 consists of a single page upon logging in with with a navigation bar on top and main browser page that alternates between the  search bar and graph components depending on the user search input. Additionally, the commentscomponent persists on the main browser page so that the conversations can be read before and after a query has been made. A loading effect has been implemented to let users know that the backend API calls are being called upon before the graph displays are shown.

The bottom of the page screen will feature an unobtrusive fixed bar for links to the Github repository as well as links to each contributing developer's information.

### Challenges
In development of 2020, the main functionality and largest challenge was building the Twitter API calls into the Express backend to avoid any CORS issues. Unlike the ParallelDots Sentiment/Emotion Text-Analysis API which used a HTTP request method, the Twitter authentication model relies on Oauth2 and a bearer token. Additionally, in order to get adequate tweet results based on the query, certain parameters needed to be adjusted accord to the user input. As a final step to the backend implementation, the output of the Twitter API call needed to be parsed and input into an array for the resulting ParellelDots API call to be execute.

Further challenges challenges arose as the resulting sentiments and emotions text-analyses data needed to be brought to the frontend for data visualization. The analysis data needs to be structured in such a way that that Chart.js is able to interpret the results.

```
Sample code here // which parts to show off
```

```
Images of graph and browse page with comments
```

### Group Members
**Team: Viviene De Guzman, David Park, Aram Sargsyan, Corrie Stoddard**

### Bonus Features for the Future
* Provide an 'issues' keyword to display sentiment of candidates' stance on certain topics (i.e., the economy, social issues, etc.)
* Display line graph that shows growing/shrinking sentiments over time with major events (e.g., higher frequency of mentions) plotted over data
* Incorporate D3.js charts that incorporate complex and interesting data visualizations of tweet inputs
