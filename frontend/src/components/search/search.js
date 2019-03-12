import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchTerm: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState( {searchTerm: e.target.value })
    }

    handleClick() {
        this.props.receivesearch(this.state.searchTerm);
        this.props.fetchTweets(this.state.searchTerm);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleClick} value="Search"/>
            </div>
        )
    }
}

export default Search;