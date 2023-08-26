import React from 'react';
import messages from '../data/gameMessages.json'
import Message from "../components/Message";
import {sortMessagesFromOldToNew} from "../utilities/helpers";

const MessagePage = ({gameId}) => {
    const gameSpecificMessages = messages["gameMessages"]?.[gameId] || null;
    const messagesData = gameSpecificMessages ? Object.entries(gameSpecificMessages) : null;  // I was going to use Object.values to be able to get only the data of the messages,
                                                                                              // but I needed the id's of the messages to be able to pass to the Message component as unique key like "message[0]".
                                                                                              // And I pass the message data as a prob like "message[1]" in Message component.
    const numberOfMessages = messagesData ? messagesData.length : 0;
    const timeSortedMessages = numberOfMessages ? sortMessagesFromOldToNew(messagesData) : null;
    return (
        <>
            <h2>Messages of game {gameId}</h2>
            <div className="list-group">
                {
                    timeSortedMessages ?
                        timeSortedMessages.map(message => <Message key={message[0]} message={message[1]}/>) :
                        <p>There is no message for this game yet.</p>}
            </div>
        </>
    );
};

export default MessagePage;