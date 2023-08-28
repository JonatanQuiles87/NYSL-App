import React from 'react';
import {useNavigate} from "react-router-dom";

const BackToGameDetailsButton = ({gameId}) => {
    const navigate = useNavigate();
    return (
        <button type="button" className="btn btn-primary" onClick={() => navigate(`/gamePage/${gameId}`)}
                style={{display: "block"}}>Back to the
            Game Details Page
        </button>
    );
};

export default BackToGameDetailsButton;