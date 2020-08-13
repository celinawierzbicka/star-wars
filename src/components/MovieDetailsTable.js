import React from 'react';

import './Components.css'

const Cell = ({ content, header, }) => {
    const cellMarkup = header ? (
      <th className="cell cell-header">
        {content}
      </th>
    ) : (
      <td className="cell">
        {content}
      </td>
    );
  
    return (cellMarkup);
}

const MovieDetailsTable = ({ headings, rows }) => {
    const renderHeadingRow = (_cell, cellIndex) => {
    
        return (
          <Cell
            key={`heading-${cellIndex}`}
            content={headings[cellIndex]}
            header={true}
          />
        )
      };
    
    const renderRow = (_row, rowIndex) => {

        return (
        <tr key={`row-${rowIndex}`}>
            {rows[rowIndex].map((_cell, cellIndex) => {
            return (
                <Cell
                key={`${rowIndex}-${cellIndex}`}
                content={rows[rowIndex][cellIndex]}
                />
            )
            })}
        </tr>
        )
    };
    
    const theadMarkup = (
    <tr key="heading">
        {headings.map(renderHeadingRow)}
    </tr>
    );

    const tbodyMarkup = rows.map(renderRow);

    return (
        <div className="data-table">
            <table className="table">
                <thead className="tableHead">{theadMarkup}</thead>
                <tbody>{tbodyMarkup}</tbody>
            </table>
        </div>
    );
}

export default MovieDetailsTable;