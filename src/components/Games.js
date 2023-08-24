import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import details from "../details.json";

const games = details['games'];
const locations = details['locations'];

export const Games = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    return (
        <div>
            <h1>Details For The Game - {id}</h1>
            <table className="table-striped table-hover table-bordered table">
                <tbody>
                    <tr>
                        <th scope="row">Date</th>
                        <td className="date" align="center">{games[id]['date']}</td>
                    </tr>
                    <tr>
                        <th scope="row">Teams</th>
                        <td align="center">{games[id]['teams']}</td>
                    </tr>
                    <tr>
                        <th scope="row">Location</th>
                        <td align="center">{locations[games[id]['location']]['name']}</td>
                    </tr>
                    <tr>
                        <th scope="row">Time</th>
                        <td align="center">{games[id]['time']}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => navigate('/schedule')}>Back to the Schedule Page</button>
        </div>
    );
}