import "./Form.css"
import {onSubmitHandler} from "../utilities/helpers";
import {uploadImageToFirebase} from "../utilities/firebase";
import {v4} from "uuid";
import {useState} from "react";

const UploadPictureForm = ({user, gameId}) => {
    const [imagePreview, setImagePreview] = useState(null); // To show the image after choosing but before uploading so just for previewing
    const [image, setImage] = useState(); // To be able to upload the image to firebase database

    const onImageChange = event => {
        const reader = new FileReader();    // FileReader is actually used just to be able to reach the preview in our case by using reader.result because reader can make url out of this file to set it as a source in an image.
                                            // If we hadn't needed the preview then we could have just use const file = event.target.files[0]; and set the image to this file like setImage(file);.
        const file = event.target.files[0];
        if (file) {
            reader.readAsDataURL(file);  // This step makes readyState DONE (2) so we make it sure there is a value in reader.result in onLoad function. Basically it fetches all the data in file and save it in reader object
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
            uploadImageToFirebase(user,`gamePictures/${gameId}/${image.name + v4()}`, image);
            setImagePreview(null); // To remove the preImage after uploading
        } else {
            alert("Please choose an image first.");
        }
    };
    return (
        <form onSubmit={onSubmitHandler} className="w-50 p-1 reposition">
             <hr/>
            <label htmlFor="choosePicture">You can upload your pictures here.</label>
            <div className="selectAndUpload">
                <input type="file" accept="image/x-png,image/jpeg" id="choosePicture" onChange={onImageChange}/>
                <button className="btn btn-primary" onClick={uploadImage}>Upload picture</button>
            </div>
            <small id="uploadPictureHelp" className="form-text text-muted">Click on the Upload button after choosing the
                picture.</small>
            <br/>
            {imagePreview ?   // We are showing the preview image to make it sure for user if they are uploading the correct image. After uploaded we remove this preview since we are setting the imagePreview to null in uploadImage function.
                <div className="preview">
                    <img src={imagePreview} alt="previewImage" style={{height: 120, display: "block"}}/>
                    <strong>Is this the photo that you want to upload? If so, go upload by clicking 'Upload picture' button! If not choose another one!</strong>
                    <img src={imagePreview} className={"img-thumbnail"} alt="previewImage" style={{width: '50%'}}/>
                </div> :
                null}
        </form>
    );
};

export default UploadPictureForm;