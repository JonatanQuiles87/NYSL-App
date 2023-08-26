import React, {useRef} from 'react';
import "./PostMessageForm.css"
import {setData} from "../utilities/firebase";

const PostMessageForm = ({gameId, user}) => {
    const inputRef = useRef(null);

    const fetchAndSubmitMessage = async () => {
        const messageText = inputRef.current.value;
        await setData(`/gameMessages/${gameId}`, user, messageText);
        inputRef.current.value = '';
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className="w-50 p-1 reposition">
            <label htmlFor="message">You can leave your comment about this game</label>
            <div className="form-group">
                <input ref={inputRef} type="text" className="form-control" id="message" placeholder="Enter your message here"/>
                <button type="submit" className="btn btn-primary" onClick={fetchAndSubmitMessage}>Post</button>
            </div>
            <small id="emailHelp" className="form-text text-muted">Click on the Post button or press enter to submit your
                message</small>
        </form>
    );
};

export default PostMessageForm;

// ********  Before we have onSubmitHandler we needed this function to be able to make enter key submit the message but this was also triggering the page to refresh.
//  And this function was called with the "onKeyPress={handleEnterPress}" attribute inside input field.
//  We put event.preventDefault() in this function to prevent the refreshing, but it also prevented typing inside text input, so it is not usable.
//  Instead, we added onSubmit attribute which is calling onSubmitHandler function which has this event.preventDefault() to the form element to be able to prevent the refreshing in the form.
//  So thanks to this onSubmitHandler we blocked all triggered refreshing including enter and clicking on Post button.
//  Post button refreshing had already been cancelled by switching the type attribute of button element from "submit" to "button", however
//  after adding onSubmitHandler function to the form element, the page is not refreshed even though the type of the button element is "submit".
//  After adding this onSubmitHandler function it was realised by coincidence that we do not need to handle the issue of submitting in case of pressing enter because
//  somehow pressing enter is triggering the submitting the message. Probably it is because we cancelled all default events in the form.
// const handleEnterPress = (event) => {
//     if(event.key === 'Enter'){
//         fetchAndSubmitMessage();
//     }
// }

// ******* We could have used useState hook here as well. In that case the code would have been like below.
//  When we use useRef it is not triggering re-rendering in case we update the value of inputRef.current.value
//  since we are basically updating one property value of a javascript object inputRef.current. On the other hand,
//  when we use useState hook the component is re-rendered after each action in input text field because
//  the method in onChange event is called after every change like after typing every char into the text field.
// const [message, setMessage] = useState('');
//
// const handleChange = event => {
//     event.preventDefault();
//     setMessage(event.target.value);
// };
// const sendMessage = () => {
//     console.log('Message is:', message);
//     setMessage('');
// }
// return (
//     <div>
//         <input
//             type="text"
//             id="message"
//             name="message"
//             onChange={handleChange}
//             value={message}
//         />
//         <input type="button" onClick={sendMessage} value="Post"/>
//     </div>
// );