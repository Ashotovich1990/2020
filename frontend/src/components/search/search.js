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
    this.props.receiveSearch(e.target.id);
    this.props.fetchTweets(e.target.id);
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-bar">
          <input className="search-box" type="text" onChange={this.handleChange}/>
          <input className="search-button" type="submit" onClick={this.handleClick} value="Search"/>
          <div className="candidates">
             <ul className="candidates-names-ul">
               {this.props.candidates.map((name) => <li onClick={this.handleCandidate} id={name} className="candidates-names"> {name} </li>) }
             </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;