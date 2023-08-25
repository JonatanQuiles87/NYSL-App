import React from 'react';
import {tableData} from "../data/tableData";

const TableCell = ({title, game}) => {
    const locationName = tableData.locations.filter(location => location.id === game['location'])[0]['name']; // filter methods returns an array with one object because we are looking with id, that's why we get the zeroth element of the array and afterwards name property is fetched.
    return (
        <td key={title}>{title === 'location' ? locationName : game[title]}</td>
    );
};

export default TableCell;