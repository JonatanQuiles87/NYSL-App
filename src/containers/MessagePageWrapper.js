import React from 'react';
import MessagePage from "./MessagePage";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utilities/firebase";
import {useLocation, useParams} from "react-router-dom";

const MessagePageWrapper = () => {
    const [user] = useAuthState(auth);
    const pathName = useLocation().pathname;
    const gameId = useParams().id;
    const messagesPagePathName = pathName.split('/')[3] || ''; // This line is to be able to see if the last part of the message page
                                                                        // which is 'messages' exists out of the whole messages page path which is '/gamePage/:id/messages'
// If this part of the path does not exist then we are not calling MessagePage component because if 'messages' part of the path is not exist then it means user is not on messages page.
        return (
        <>
            {
                user && messagesPagePathName ?
                <MessagePage gameId={gameId}/> :
                <p>Please sign in to be able to see the chat!</p>
            }
        </>
    );
};

export default MessagePageWrapper;