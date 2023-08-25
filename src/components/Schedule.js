import {useNavigate} from 'react-router-dom'

import details from "../details.json";
import './Schedule.css';

const games = details['games'];
const locations = details['locations'];

const Schedule = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Fall Schedule</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">SEPTEMBER</th>
                        <th scope="col">Teams</th>
                        <th scope="col">Location</th>
                        <th scope="col">Times</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => navigate('/games/2021_09_01_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_09_01_1']['date']}</td>
                        <td>{games['2021_09_01_1']['teams']}</td>
                        <td>{locations['Katzenmaier']['name']}</td>
                        <td>{games['2021_09_01_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_01_2')}>
                        <td>{games['2021_09_01_2']['teams']}</td>
                        <td>{locations['Greenbay']['name']}</td>
                        <td>{games['2021_09_01_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_08_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_09_08_1']['date']}</td>
                        <td>{games['2021_09_08_1']['teams']}</td>
                        <td>{locations['Howard']['name']}</td>
                        <td>{games['2021_09_08_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_08_2')}>
                        <td>{games['2021_09_08_2']['teams']}</td>
                        <td>{locations['Marjorie']['name']}</td>
                        <td>{games['2021_09_08_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_15_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_09_15_1']['date']}</td>
                        <td>{games['2021_09_15_1']['teams']}</td>
                        <td>{locations['North']['name']}</td>
                        <td>{games['2021_09_15_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_15_2')}>
                        <td>{games['2021_09_15_2']['teams']}</td>
                        <td>{locations['Katzenmaier']['name']}</td>
                        <td>{games['2021_09_15_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_22_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_09_22_1']['date']}</td>
                        <td>{games['2021_09_22_1']['teams']}</td>
                        <td>{locations['South']['name']}</td>
                        <td>{games['2021_09_22_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_22_2')}>
                        <td>{games['2021_09_22_2']['teams']}</td>
                        <td>{locations['Howard']['name']}</td>
                        <td>{games['2021_09_22_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_09_29_1')}>
                        <td className="date" align="center">{games['2021_09_29_1']['date']}</td>
                        <td>{games['2021_09_29_1']['teams']}</td>
                        <td>{locations['Greenbay']['name']}</td>
                        <td>{games['2021_09_29_1']['time']}</td>
                    </tr>
                </tbody>
            </table>

            <table className="table-striped table-hover table-bordered table">
                <thead>
                    <tr>
                        <th scope="col">OCTOBER</th>
                        <th scope="col">Teams</th>
                        <th scope="col">Location</th>
                        <th scope="col">Times</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => navigate('/games/2021_10_06_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_10_06_1']['date']}</td>
                        <td>{games['2021_10_06_1']['teams']}</td>
                        <td>{locations['Marjorie']['name']}</td>
                        <td>{games['2021_10_06_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_06_2')}>
                        <td>{games['2021_10_06_2']['teams']}</td>
                        <td>{locations['South']['name']}</td>
                        <td>{games['2021_10_06_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_13_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_10_13_1']['date']}</td>
                        <td>{games['2021_10_13_1']['teams']}</td>
                        <td>{locations['Howard']['name']}</td>
                        <td>{games['2021_10_13_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_13_2')}>
                        <td>{games['2021_10_13_2']['teams']}</td>
                        <td>{locations['Greenbay']['name']}</td>
                        <td>{games['2021_10_13_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_20_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_10_20_1']['date']}</td>
                        <td>{games['2021_10_20_1']['teams']}</td>
                        <td>{locations['North']['name']}</td>
                        <td>{games['2021_10_20_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_20_2')}>
                        <td>{games['2021_10_20_2']['teams']}</td>
                        <td>{locations['Marjorie']['name']}</td>
                        <td>{games['2021_10_20_2']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_27_1')}>
                        <td rowSpan="2" className="date" align="center">{games['2021_10_27_1']['date']}</td>
                        <td>{games['2021_10_27_1']['teams']}</td>
                        <td>{locations['Katzenmaier']['name']}</td>
                        <td>{games['2021_10_27_1']['time']}</td>
                    </tr>
                    <tr onClick={() => navigate('/games/2021_10_27_2')}>
                        <td>{games['2021_10_27_2']['teams']}</td>
                        <td>{locations['Howard']['name']}</td>
                        <td>{games['2021_10_27_2']['time']}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Schedule;