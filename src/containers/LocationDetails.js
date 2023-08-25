import React from 'react';
import {Table} from "../components/Table";
import {TableHeader} from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableBody from "../components/TableBody";

const LocationDetails = ({locationTableHeaderCells, locationTableRowCells}) => {
    return (
        <div>
            <h2>Game Location:</h2>
            <Table className='table'>
                <TableHeader>
                    <TableRow navigateTo={() => void 0}>
                        {locationTableHeaderCells}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow navigateTo={() => void 0}>
                        {locationTableRowCells}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default LocationDetails;