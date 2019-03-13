import React from 'react';
import '../../stylesheets/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCandidate = this.handleCandidate.bind(this);
  }

  handleChange(e) {
    this.setState( {searchTerm: e.target.value })
  }

    handleClick() {
        this.props.receiveSearch(this.state.searchTerm);
        this.props.fetchTweets(this.state.searchTerm);
    }

    handleCandidate(e) {
      this.setState( {searchTerm: e.target.getAttribute('value') });
      // this.props.fetchTweets(this.state.searchTerm);
    }

  render() {
    return (
      <div>
        <div className="search-page">
          <div className="search-bar">
            <input className="search-box" type="text" onChange={this.handleChange}/>
            <input className="search-button" type="submit" onClick={this.handleClick} value="Search"/>
          </div>
        </div>
        <div className="candidate-search" onClick={()=>this.handleCandidate} value="Donald Trump">
          Donald Trump
        </div>
      </div>
    )
  }
}

export default Search;