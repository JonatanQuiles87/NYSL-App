import React from 'react';

const TableHeaderCell = ({children, scope = ''}) => {
    return (
        <th scope={scope}>
            {children}
        </th>
        // Below is the old code. The code has been updated to be able to keep the logic in one file which is Schedule.js and the rest of the components will only take care of the UI part.
        // <thead>
        // <tr>
         //   {/*{*/}
          //  {/*    titles.map(title => <th key={title} scope="col">{title}</th>)*/}
          //  {/*}*/}
      //  {/*</tr>*/}
      //  {/*</thead>*/}
    );
};

export default TableHeaderCell;