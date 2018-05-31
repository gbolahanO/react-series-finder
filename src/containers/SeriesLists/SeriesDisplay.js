import React from 'react';
// import './SeriesList.css';
const SeriesDisplay = (props) => {
  return (
    <div>
      <ul>
        <li >{props.name}</li>
      </ul>
    </div>
  )
}
 
export default SeriesDisplay;