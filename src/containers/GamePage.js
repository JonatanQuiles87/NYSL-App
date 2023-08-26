import React from 'react';
import GameDetails from "../components/GameDetails";
import LocationDetails from "../components/LocationDetails";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {tableData} from "../data/tableData";
import {getHeaderTitles} from "../data/headerTitles";
import TableHeaderCell from "../components/TableHeaderCell";
import TableRowCell from "../components/TableRowCell";

const GamePage = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]; // The first element of the array is null since pathname starts with / and the first element is the part before first / which is empty.
    const getGameWithId = tableData.games.find(game => game['id'] === id); // This line will return a game object which has the same id in the param. It is put in an array since it is passed as prob in Table component which is expecting an array
    const getLocationOfTheGame = tableData.locations.find(location => location['id'] === getGameWithId['location']);
    const locationPropertiesWithoutId = Object.keys(tableData.locations[0]) // We need this one because the property names and the locationTableHeaderTitles are a bit different each other. We will use these property names to be able to fill with the cells of location table
        .filter(propertyName => propertyName !== "id")                      // We didn't need this for game properties since the names of game properties in the tableData is the same with the gameTableHeaderTitles so one array of names is enough.

    const gameTableHeaderTitles = getHeaderTitles(pathName)['gameTableHeaderTitles'];
    const locationTableHeaderTitles = getHeaderTitles(pathName)['locationTableHeaderTitles'];

    const gameTableHeaderCells = gameTableHeaderTitles
        .map(title => <TableHeaderCell key={title} scope='col'>{title}</TableHeaderCell>);
    const locationTableHeaderCells = locationTableHeaderTitles
        .map(title => <TableHeaderCell key={title} scope='col'>{title}</TableHeaderCell>);

    const mapOfLocation =
        <div>
            <iframe src={getLocationOfTheGame['url']} title= "Location map" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>

    const gameTableRowCells = gameTableHeaderTitles
    .map(title => <TableRowCell key={title} align='center'>{title === 'Location' ? getLocationOfTheGame['name'] : getGameWithId[title.toLowerCase()]}</TableRowCell>)
    const locationTableRowCells = locationPropertiesWithoutId
        .map(title => <TableRowCell key={title}>{title === 'url' ? mapOfLocation : getLocationOfTheGame[title]}</TableRowCell>)

    return (
        <div>
            <GameDetails gameTableHeaderCells = {gameTableHeaderCells} gameTableRowCells = {gameTableRowCells} gameId={id}/>
            <LocationDetails locationTableHeaderCells = {locationTableHeaderCells} locationTableRowCells = {locationTableRowCells}/>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/schedule')}>Back to the
                Schedule Page
            </button>
        </div>
    );
};

export default GamePage;