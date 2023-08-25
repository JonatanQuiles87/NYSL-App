import React from 'react';

const TableBody = ({children}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

// Below is the old code. The code has been updated to be able to keep the logic in one file which is Schedule.js and the rest of the components will only take care of the UI part.
// const TableBody = ({games}) => {
//     return (
//         <tbody>
//         {
//             games
//                 .map(game => {
//                     return (
//                         <TableRow key={game.id} game={game}/>
//                     )
//                 })
//         }
//         </tbody>
//     );
// };

export default TableBody;