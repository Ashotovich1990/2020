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

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.receiveSearch(this.state.searchTerm);
      this.props.fetchTweets(this.state.searchTerm);
    }
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
    const candidates = !this.props.search?  
    (<div className="candidates">
    <h2>Trending Politicians</h2>
    <ul className="candidates-names-ul">
      {this.props.candidates.map((name,idx) => <li onClick={this.handleCandidate} key={idx} id={name} className="candidates-names"> {name} </li>) }
    </ul>
 </div>)
    : 
    <div></div> ;
    return (
      <div className="search-page">
        <div className="search-bar">
          <input className="search-box" type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder="Enter name..."/>
          {/* <input className="search-button" type="submit" onClick={this.handleClick} value="Search"/> */}
          {candidates}
        </div>
      </div>
    )
  }
}

export default Search;