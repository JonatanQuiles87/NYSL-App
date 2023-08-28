import React from 'react';
import PicturesPage from "./PicturePage";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utilities/firebase";
import {useLocation, useParams} from "react-router-dom";

// This component is just copy-paste of MessagesPageWrapper
const PicturesPageWrapper = () => {
    const [user] = useAuthState(auth);
    const pathName = useLocation().pathname;
    const gameId = useParams().id;
    const picturesPagePathName = pathName.split('/')[3] || '';
    return (
        <div>
            <>
                {
                    user && picturesPagePathName ?
                        <PicturesPage gameId={gameId} user={user}/> :
                        <h4 className="alert-warning">Please sign in to be able to see the pictures and upload new ones!</h4>
                }
            </>
        </div>
    );
};

export default PicturesPageWrapper;