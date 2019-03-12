import React from 'react';
import SearchContainer from '../search/search_container';
import {Loader} from './loader';

class Browse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.searchTerm) {
            return <SearchContainer />;
        } else if (this.props.searchTerm && !this.props.sentiment) {
            return <Loader />;
        } else {
            return <div>hello world</div>;
        }
    }
}

export default Browse;