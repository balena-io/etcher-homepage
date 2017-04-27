import React from 'react';
import { Table } from 'reactstrap';

const DownloadTable = ({ items }, { tracker }) => {
  return(
    <Table>
      <thead>
        <tr>
          {
            Object.keys(items[0]).map(key => (
              <th key={key}>{key.toUpperCase()}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, n) => (
            <tr key={n}>
              {
                Object.keys(item).map((key, i) => {
                  // TODO this is brittle
                  // assume link if is object and has .href prop
                  if (typeof item[key] === 'object' && item[key].href) {
                    return(
                      <td key={`${n}.${i}`}>
                        <a
                          href={item[key].href}
                          onClick={() => {
                            tracker.create('download', item[key] );
                          }}
                        >
                          {item[key].text}
                          </a>
                      </td>)
                  }
                  return(
                    <td key={`${n}.${i}`}>{item[key]}</td>
                  )
                })
              }
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default DownloadTable;

DownloadTable.contextTypes = {
  tracker: React.PropTypes.object
};
