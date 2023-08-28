import "./Form.css"
import {onSubmitHandler} from "../utilities/helpers";

const UploadPictureForm = ({user, imagePreview, onImageChange, uploadImage}) => {

    return (
        <form onSubmit={onSubmitHandler} className="w-50 p-1 reposition">
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
                    <strong>Is this the photo that you want to upload? If so, go upload it! If not choose another
                        one!</strong>
                </div> :
                null}
        </form>
    );
};

export default UploadPictureForm;