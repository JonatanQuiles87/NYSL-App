import React from 'react';
import {getTime} from "../utilities/helpers";

const Message = ({message}) => {
    return (
        <div className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <div className="d-flex">
                    <h5 className="mb-1">{message["author"]}</h5>
                    <small className="text-muted">({message["email"]})</small>
                </div>
                <small>{getTime(message["timestamp"])}</small>
            </div>
            <p className="mb-1">{message["text"]}</p>
        </div>
    );
};

export default Message;