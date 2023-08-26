import React from 'react';
import {database} from "../utilities/firebase";
import Message from "../components/Message";
import {useList} from "react-firebase-hooks/database";
import {ref} from "firebase/database"
import {sortMessagesFromOldToNew} from "../utilities/helpers";

const MessagePage = ({gameId}) => {
    const dbRef = ref(database, `/gameMessages/${gameId}`);
    const [snapshots, loading, error] = useList(dbRef);
    const gameSpecificMessages = snapshots.map(v => {
        const eachMessageObject = {};
        eachMessageObject[v.key] = v.val();
        return eachMessageObject;
    });
    const numberOfMessages = gameSpecificMessages.length;
    const clonedGameSpecificMessages = numberOfMessages ? [...gameSpecificMessages] : null;
    const timeSortedMessages = numberOfMessages > 1 ? sortMessagesFromOldToNew(clonedGameSpecificMessages)
        : numberOfMessages === 1 ? clonedGameSpecificMessages
            : null;

    return (
        <>
            <h2>Messages of game {gameId}</h2>
            <div className="list-group">
                {
                     loading ? <p>Messages: Loading...</p>
                     : error ? <p>Error: {error}</p>
                     : numberOfMessages ? timeSortedMessages.map(message => <Message key={Object.keys(message)[0]}
                                                                               message={Object.values(message)[0]}/>)
                     : <p>There is no message for this game yet.</p>}
            </div>
        </>
    );
};

export default MessagePage;