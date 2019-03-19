import React from 'react';
import SearchContainer from '../search/search_container';
import {Loader} from './loader';
import ResultsContainer from '../results/results_container';
import CommentsContainer from '../comments/comments_container';
import '../../stylesheets/browse.scss';

class Browse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      let content
        if (!this.props.searchTerm) {
           content =  <SearchContainer />;
        } else if (this.props.searchTerm && this.props.sentiment.probabilities) {
          content = (
          <div>
            <SearchContainer />;
            <ResultsContainer />
          </div>
          );
        } else {
          content = <Loader />
        }

        return (
          <div className="browse-container">
            {content}
            <CommentsContainer />
          </div>
        )
    }
}

export default Browse;