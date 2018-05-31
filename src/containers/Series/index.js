import React, { Component } from 'react';
import axios from 'axios';
import SeriesList from '../SeriesLists/index';
import Intro from '../../components/Intro/Intro';
import '../../App.css';
class Series extends Component {
  state = {
    series: [],
    search: '',
    seriesName: ''
  }
  
  seriesFinderHandler = (event) => {
    this.setState({ search: event.target.value});
    console.log(event.target.value);
    let search = this.state.search;
    axios.get('http://api.tvmaze.com/search/shows?q=' + search)
      .then(response => {
        console.log(response);
        this.setState({series: response.data});
      });
  }
  componentDidMount() {
    axios.get('http://api.tvmaze.com/search/shows?q=game')
      .then(response => {
        console.log(response);
        this.setState({series: response.data});
      });
  }
  render() { 
    let p = null;
    if (this.state.series.length === 0 && this.state.search.trim() === '') {
      p = <p>Please enter series name into the input</p>
    }
    if (this.state.series.length === 0 && this.state.search.trim() !== '') {
      p = <p>No TV series have been found with this name</p>
    }
    return ( 
      <div>
        <header className="App-header">
          <h1 className="App-title">TV Series Lists</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        <div>
          <input
            value={this.state.search} 
            type="text"
            onChange={this.seriesFinderHandler} />
        </div>
        { p }
        <SeriesList lists={this.state.series} />  
      </div>
      
    )
  }
}
 
export default Series;