import React from 'react';
import { Table } from 'reactstrap';


const DownloadTable = ({ items }, { tracker }) => {
  return(
    <Table>
      <thead>
        <tr>
          <th>RELEASE</th>
          <th>OS</th>
          <th>ARCH</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, n) => (
            <tr key={n}>
              <td key={`${n}-release`}>
                <a
                  href={item.href}
                  onClick={() => {
                    tracker.create('download', item[key] );
                  }}
                >
                  {item.text}
                  </a>
              </td>
              <td>
                {item.os}
              </td>
              <td>
                {item.arch}
              </td>
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
