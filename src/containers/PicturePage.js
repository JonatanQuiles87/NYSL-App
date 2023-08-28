import React, {useState} from 'react';
import UploadPictureForm from "../components/UploadPictureForm";
import BackToGameDetailsButton from "../components/BackToGameDetailsButton";
import Picture from "../components/Picture";
import {uploadImageToFirebase} from "../utilities/firebase";
import {v4} from 'uuid';

const PicturesPage = ({gameId, user}) => {
    const [imagePreview, setImagePreview] = useState(null); // To show the image after choosing but before uploading so just for previewing
    const [imageUrl, setImageUrl] = useState(); // To be able to fetch the image from firebase database after uploaded and to show it in the page.
    const [image, setImage] = useState(); // To be able to upload the image to firebase database


    const onImageChange = event => {
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    console.log(file);
                    setImagePreview(reader.result); // This line is to be able to see the image which is about to be uploaded before it is really uploaded. We are removing this preview after uploading by setting it to null in uploadImage function.
                    setImage(file);
                }
            };
        } else {
            setImage(null);
        }
    };

   const uploadImage = () => {
        if (image) {
            uploadImageToFirebase(`gamePictures/${gameId}/${image.name + v4()}`, image, setImageUrl);
            setImagePreview(null); // To remove the preImage after uploading
        } else {
            alert("Please choose an image first.");
        }
    };
    return (
        <>
            <h2>Pictures of game {gameId}</h2>

            <p>Pictures will be shown here.</p>
            <Picture imageUrl={imageUrl}/>

            <p>Uploading picture form will be here</p>
            <UploadPictureForm user={user} imagePreview={imagePreview} onImageChange={onImageChange} uploadImage={uploadImage}/>

            <BackToGameDetailsButton gameId={gameId}/>
        </>
    );
};

export default PicturesPage;