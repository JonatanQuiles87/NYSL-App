import React from 'react';

const TableRow = ({children, navigateTo}) => <tr onClick={() => navigateTo?.()}>{children}</tr>

// Below is the old code. The code has been updated to be able to keep the logic in one file which is Schedule.js and the rest of the components will only take care of the UI part.
// const columnTitles = Object.keys(tableData.games[0])   // In this line we create an array only with the property names like [id, date, times, teams, location]
//     .filter(propertyName => propertyName !== "id")     // In this line we filter the property names other than id to be able to use them in table header and to fetch the values from the data object. So now we have [date, teams, times, location]
// .map(columnTitle => columnTitle.charAt(0).toUpperCase() + columnTitle.slice(1));  // Making the first letters of the column titles upper case.
// columnTitles = ['Date', 'Teams', 'Times', 'Location']

// const TableRow = ({game}) => {
//     const navigate = useNavigate();
//     const locationName = tableData.locations.find(location => location.id === game['location'])['name']; // This line returning the full name of the location of the game for each row.
//     return (
//         <tr onClick={() => navigate(`/gameDetails/${game.id}`)}>
//             {
//                 columnTitles.map(title => <TableCell key={title} title={title} game={game} locationName={locationName}/>)
//             }
//         </tr>
//     );
// };


export default TableRow;