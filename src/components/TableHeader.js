import React from 'react';
import {months} from "../data/months";

const TableHeader = ({month}) => {
    return (
        <thead>
        <tr>
            <th scope="col">{months[month]}</th>
            <th scope="col">Teams</th>
            <th scope="col">Location</th>
            <th scope="col">Times</th>
        </tr>
        </thead>
    );
};

export default TableHeader;