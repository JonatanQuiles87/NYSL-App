import React from 'react';

const TableRowCell = ({children, align='left'}) => {
    return (
        <td align={align}>
            {children}
        </td>
    );
};

// Below is the old code. The code has been updated to be able to keep the logic in one file which is Schedule.js and the rest of the components will only take care of the UI part.
// const TableCell = ({title, game, locationName}) => {
//     return (
//         <td key={title}>{title === 'location' ? locationName : game[title]}</td>
//     );
// };


export default TableRowCell;