import React from 'react';
import SearchContainer from '../search/search_container';
import {Loader} from './loader';
import ResultsContainer from '../results/results_container';

class Browse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.searchTerm) {
            return <SearchContainer />;
        } else if (this.props.searchTerm && this.props.sentiment.length===0) {
            return <Loader />;
        } else if (this.props.searchTerm && this.props.sentiment.length !==0 ) {
            return <ResultsContainer />;
        }
    }
}

export default Browse;