import React from "react";

function Results(props) {
  return (
    <div>
      <p>Movie Title : {props.title}</p>
      <p>Movie rating : {props.rating}</p>
      <p>Movie release : {props.release_year}</p>
    </div>
  );
}

export default Results;
