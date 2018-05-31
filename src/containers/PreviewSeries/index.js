import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class PreviesSeries extends Component {

    state = { show: '' }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('http://api.tvmaze.com/shows/' + id + '?embed=episodes')
      .then(response => {
        console.log(response);
        this.setState({ show: response.data });
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series Lists</h1>
        </header>
        <p>Premiered: {this.state.show.premiered}</p>
        <p>Runtime: {this.state.show.runtime}</p>
        <p>Genres: {this.state.show.genres}</p>
        <p>Summary: {this.state.show.summary}</p>
      </div>
    );
  }
}
 
export default PreviesSeries;