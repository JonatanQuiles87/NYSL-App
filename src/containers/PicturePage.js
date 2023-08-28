import React from 'react';
import UploadPictureForm from "../components/UploadPictureForm";
import BackToGameDetailsButton from "../components/BackToGameDetailsButton";
import Picture from "../components/Picture";

const PicturesPage = ({gameId, user}) => {
    return (
        <>
            <h2>Pictures of game {gameId}</h2>

            <p>Pictures will be shown here.</p>
            <Picture/>

            <p>Uploading picture form will be here</p>
            <UploadPictureForm gameId={gameId} user={user}/>

            <BackToGameDetailsButton gameId={gameId}/>
        </>
    );
};

export default PicturesPage;