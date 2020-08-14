import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import './Components.css'

const MovieDetailsTableNew = ({ headings, rows }) => { 

  const [sortedResults, setSortedResults] = useState(rows.map(row => row.map((r, index) => <div className={`rowItem row${index}`} key={`r${index}`}>{r}</div>)))

  //Convert climates array to a string sepatated by ", "
  // rows.map(r => r[4] = r[4].join(', '));

  const renderData = row => {
    const heads = headings.map((heading, index) => {
      return (
        <div className={`headingItem heading${index}`} key={`h${index}`}>
            {heading}
        </div>)}
      );
    const rows = row.map((r, index) => <div className={`rowItem row${index}`} key={`r${index}`}>{r}</div>);
    const results = heads.concat(rows);

    return results
  }
  const sortRowsUp = index => {
    const results = bodyMarkup.sort(function(a, b){
      return (a[index].props.children === b[index].props.children ? 0 : (a[index].props.children < b[index].props.children ? -1 : 1))
    })
    setSortedResults(results)
  }

  const sortRowsDown = index => {
    const results = bodyMarkup.sort(function(a, b){
      return (a[index].props.children === b[index].props.children ? 0 : (a[index].props.children < b[index].props.children ? 1 : -1))
    })
    setSortedResults(results)
  }

  const bodyMarkup = rows.map(row => row.map((r, index) => <div className={`rowItem row${index}`} key={`r${index}`}>{r}</div>));
  const headMarkup = headings.map((heading, index) => {
    return (
      <div className={`headingItem heading${index}`} key={`h${index}`}>
          {heading}
          <div className="chevrons">
            <ChevronUp className="chevron" size={12} key={`up${index}`} onClick={() => sortRowsDown(index)}/>
            <ChevronDown className="chevron" size={12} key={`down${index}`} onClick={() => sortRowsUp(index)}/>
          </div>
      </div>)}
    )
  const mobileMarkup = rows.map((row, index) => <div className="grid-wrapper-mobile" key={`r${index}`}>{renderData(row)}</div>);

  return (
    <>
      <div className="grid-wrapper">
          {headMarkup}
          {sortedResults}
      </div>
      {mobileMarkup}
    </>
  );
}

export default MovieDetailsTableNew;