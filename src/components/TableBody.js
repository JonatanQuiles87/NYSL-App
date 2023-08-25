import React from 'react';
//import { useNavigate } from "react-router-dom";
import {tableData} from "../data/tableData";
import TableRow from "./TableRow";

const TableBody = ({month}) => {
    const gamesOfMonth = tableData.games.filter(game => game.date.match(month));
    console.log("gamesOfMonth", gamesOfMonth);

    return (
        <tbody>
        {
            gamesOfMonth
                .map(game => {
                    return (
                        <TableRow key={game.id} game={game}/>
                    )
                })
        }
        </tbody>
    );
};

export default TableBody;