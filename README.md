# 2020

2020 is a data visualization app that gives users a glance at public sentiment about an upcoming 2020 political figure.

## Background and Overview

Public figures and policy are hardly the most talked about issues in everyday conversation -- part of the problem is the overwhelming amount of information that is thrown at us on a daily basis. 2020 will simplify that intake by giving you a quick snap shot of peoples' attitudes towards a candidate and the popularity of his/her stance on certain issues (i.e., the economy, social issues, etc). The goal is for the average user to quickly see why people are pleased/displeased with a candidate and to begin conversation so that voters become more informed.

## Functionality & MVP
* User authorization: signup and login
* Execute API calls and fetch data from Twitter and PreCeive (a sentiment analysis processor)
* Parse data from API responses and graphically display public sentiment about a particular candidate
* Implement a comments section to provide users with interactive experience

### Bonus Features
* Provide an 'issues' keyword to display popularity of candidates' stance on certain topics (i.e., the economy, social issues, etc.)
* With enough data points, provide a line graph that shows growing/shrinking sentiments over time with major events plotted alongside the sentiment data

## Technologies and Technical Challenges
2020 is built with the MERN stack (MongoDB, Express, React, and Node). Twitter API will be used to get fetch tweets about a particular Twitter handle, while PreCeive API will be used to provide a sentiment score of the aggregated fetched tweet bodies. The data will then be visualized using the D3/Chartjs library.

**Backend: MongoDB/Express technical challenges**
* Connecting the database to the Twitter and PreCeive API responses 
* Ensure that API data inputs and outputs are structured in a way that enables frontend execution

**Frontend: React/Node.js technical challenges:**
* Reading/organizing data from the database and parsing them to be used in data visualization

## Accomplished over the Weekend
* Each team member completed MERN stack lectures/walkthrough with proper MongoDB and authentication functionality
* Initialized project database on MongoDB, implemented frontend/backend user authentication functionality (CSS pending)
* Completed several git pull requests and master branch merges as a team
* Wrote proposal readme and planned for remaining work days

## Group Members and Work Breakdown
**Viviene De Guzman, David Park, Aram Sargsyan, Corrie Stoddard**

**March 8 - March 10**
* Build skeleton MongoDB, create user model and backend authorization - Aram and David
* Build skeleton React session and splash pages - Viviene
* Research D3/Chartjs visualization setup, implementation, and input/output of data - Corrie
* Investigate Twitter API methods and see how to incorporate into application - Aram

**March 11**
* Finalize an agreed upon database structure, columns, potential joins tables - All
* Finalize React session and splash pages - Viviene
* Plan for remaining React components and begin brainstorming ways in which to implement graphs; begin styling - Corrie/Viviene
* Finalize Twitter API calls from backend - Aram
* Investigate preCeive API methods and see how to incorporate into application - David

**March 12**
* Finalize preCeive API calls from backend; ensure API response results are compatible (able to send to frontend) - David and Aram
* Finalize remaining React components, graphs, styling - Corrie/Viviene
