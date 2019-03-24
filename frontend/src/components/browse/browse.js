import React from 'react';
import SearchContainer from '../search/search_container';
import Loader from './loader';
import ResultsContainer from '../results/results_container';
import CommentsContainer from '../comments/comments_container';
import '../../stylesheets/browse.scss';

class Browse extends React.Component {
   
    render() {
      let content
        if (!this.props.searchTerm) {
        } else if (this.props.searchTerm && this.props.sentiment.probabilities) {
          content = (
          <div>
            <ResultsContainer />
          </div>
          );
        } else {
          content = (
            <div>
              <Loader /> 
            </div>)
        }

        return (
          <div className="browse-container">
            <SearchContainer />
            {content}
            <CommentsContainer />
          </div>
        )
    }
}

export default Browse;