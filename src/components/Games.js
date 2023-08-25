import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import details from "../details.json";

const games = details['games'];
const locations = details['locations'];

export const Games = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const locationName = locations[games[id]['location']]['name'];
    const locationAddress = locations[games[id]['location']]['address'];
    const locationUrl = locations[games[id]['location']]['url'];
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
                    <td align="center">{locationName}</td>
                </tr>
                <tr>
                    <th scope="row">Time</th>
                    <td align="center">{games[id]['time']}</td>
                </tr>
                </tbody>
            </table>
            <h2>Game Location:</h2>
            <table className="table">
                <thead>
                <tr>
                <th scope="col">Location Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Map</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{locationName}</td>
                        <td>{locationAddress}</td>
                        <td>
                            <div>
                                <iframe src={locationUrl} title= "Location map" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type="button" className="btn btn-secondary" onClick={() => navigate('/schedule')}>Back to the Schedule Page</button>
        </div>
    );
}