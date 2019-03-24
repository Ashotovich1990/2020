import React from 'react';
import '../../stylesheets/browse.scss'

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style: "search-spinner", msg: "" };
        this.timeout = null;
    }
   
    componentDidMount() {
       this.timeout = setTimeout(()=> {
          this.setState({ style: "search-fail", msg:"No tweets found, please try another keyword"})
        }, 7000);

    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    
    // we need search-fail css class;

    render() {
        return (
        <div className={this.state.style}>
          <div>{this.state.msg}</div>
        </div>
        );
    }
}

export default Loader;