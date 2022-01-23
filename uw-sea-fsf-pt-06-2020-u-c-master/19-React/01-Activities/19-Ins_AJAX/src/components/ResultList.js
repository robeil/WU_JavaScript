import React from "react";

const ResultList = ({ results }) => {
  if (!results && results.length) return null;

  return (
    <ul className="list-group">
      {results.map(({ title = '', id = '', images: { original: { url = '' } } }) => (
        <li className="list-group-item" key={id}>
          <img alt={title} className="img-fluid" src={url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
