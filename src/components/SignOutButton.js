import React from 'react';
import {signOutFirebase} from "../utilities/firebase";

const SignOutButton = ({displayName}) => {
    return (
        <button className="btn btn-secondary btn-sm m-1" onClick={() => signOutFirebase()}>
            Sign out {displayName}
        </button>
    );
};

export default SignOutButton;