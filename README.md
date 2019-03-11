# 2020

2020 is a data visualization application that gives users a glance at public sentiment about an upcoming 2020 political figure.

### Background and Overview

Keeping track of public issues can be difficult  -- part of the problem is too much information. 2020 will simplify that by giving users a quick snap shot of peoples' current attitudes towards a candidate and the discussions about his/her stance on certain issues (i.e., social issues, governance, etc). The goal is for the average user to quickly see why postive/negative conversations are being associated with a candidate and to begin conversations of their own.

### Functionality and MVPs
* User authorization: signup and login
* Fetch data from Twitter and ParallelDots (a sentiment analysis processor) via API calls
* Parse data from API responses and graphically display the sentiment of conversations centered around a particular candidate
* Implement a comments section to provide users with interactive experience

### Bonus Features
* Provide an 'issues' keyword to display sentiment of candidates' stance on certain topics (i.e., the economy, social issues, etc.)
* Display line graph that shows growing/shrinking sentiments over time with major events (e.g., higher frequency of mentions) plotted alongside 

### Technologies and Technical Challenges
2020 is built with the MERN stack (MongoDB, Express, React, and Node). Twitter API will be used to get fetch tweets about a particular Twitter handle, while ParallelDots API will be used to provide a sentiment score of the aggregated fetched tweet bodies. The data will then be visualized using D3/Chartjs library.

**Backend: MongoDB/Express technical challenges**
* Connecting the database to the Twitter and ParallelDots API responses 
* Ensure that API data inputs and outputs are structured properly

**Frontend: React/Node.js technical challenges:**
* Reading/organizing data from the database and parsing them to be used in data visualization

### Accomplished over the Weekend
* Each team member completed MERN stack lectures/walkthrough with proper MongoDB and authentication functionality
* Initialized project database on MongoDB, implemented frontend/backend user authentication functionality (CSS pending)
* Completed several git pull requests and master branch merges
* Wrote proposal readme and planned for remaining work days

### Group Members and Work Breakdown
**Team: Viviene De Guzman, David Park, Aram Sargsyan, Corrie Stoddard**

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
* Investigate ParallelDots API methods and see how to incorporate into application - David
* Begin comments feature - David

**March 12 - March 13**
* Finalize ParallelDots API calls from backend; ensure API response results are compatible (able to send to frontend) - David and Aram
* Finish comments feature - David and Aram
* Finalize remaining React components, graphs, styling - All
