import React from 'react';
import SeriesDisplay from './SeriesDisplay';

import { Link } from 'react-router-dom';

const SeriesList = (props) => {
  /* const ListName = props.lists.map(list => {
    return (
      <li className="Series-List" key={list.show.id}> {list.show.name} </li>
    )
  }); */
  const ListName =  props.lists.map(list => {
    const id = list.show.id;
    return (
      <Link to={"/series/" + id } key={list.show.id}>
        <SeriesDisplay name={list.show.name} />
      </Link>
    )
  });
  return (
    <div> 
      {ListName} 
    </div>
  )
}
 
export default SeriesList;