import React from 'react';
import {signInWithGoogle} from "../utilities/firebase";

const SignInButton = () => {
    return (
        <button className="btn btn-secondary btn-sm m-1" onClick={() => signInWithGoogle()}>
            Sign in
        </button>
    );
};

export default SignInButton;