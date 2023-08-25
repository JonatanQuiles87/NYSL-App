import React from 'react';
import {tableData} from "../data/tableData";
import {useNavigate} from "react-router-dom";
import TableCell from "./TableCell";

const columnTitles = Object.keys(tableData.games[0])   // In this line we create an array only with the property names like [id, date, times, teams, location]
    .filter(propertyName => propertyName !== "id")     // In this line we filter the property names other than id to be able to use them in table header and to fetch the values from the data object. So now we have [date, teams, times, location]
// .map(columnTitle => columnTitle.charAt(0).toUpperCase() + columnTitle.slice(1));  // Making the first letters of the column titles upper case.
// columnTitles = ['Date', 'Teams', 'Times', 'Location']

const TableRow = ({game}) => {
    const navigate = useNavigate();
    return (
        <tr key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
            {
                columnTitles.map(title => {
                    return <TableCell key={title} title={title} game={game}/>
                })
            }
        </tr>
    );
};

export default TableRow;