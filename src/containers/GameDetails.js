import {Table} from "../components/Table";
import {TableHeader} from "../components/TableHeader";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";

const GameDetails = ({gameTableHeaderCells, gameTableRowCells, gameId}) => {

    return (
        <div>
            <h1>Details For The Game - {gameId}</h1>
            <Table className='table'>
                <TableHeader>
                    <TableRow navigateTo={() => void 0}>
                        {gameTableHeaderCells}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow navigateTo={() => void 0}>
                        {gameTableRowCells}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default GameDetails;