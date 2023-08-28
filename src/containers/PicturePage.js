import React from 'react';
import UploadPictureForm from "../components/UploadPictureForm";
import BackToGameDetailsButton from "../components/BackToGameDetailsButton";
import Picture from "../components/Picture";
import {useData} from "../utilities/firebase";
import {getTime, sortDataFromOldToNew} from "../utilities/helpers";

const PicturesPage = ({gameId, user}) => {
    // const [imageUrlList, setImageUrlList] = useState([]); // To be able to fetch the existing images from firebase database at the beginning and also to show the images after uploaded immediately.
    // This is also no needed anymore since we do not use imageListRef. We used to keep the list up to date all the time inside useEffect hook below but no needed now since we have urlListOfSpecificGame list now which also keeps updating thanks to useList hook.

    // const imageListRef = ref_storage(storage, `gamePictures/${gameId}`);  // This is to be able to fetch the list of the pictures for a specific game to show in the page at the beginning.
    // We could have also used this ref_store to fetch all the picture specific urls but to have the consistence we will fetch the urls from database under gamePictures

    const [snapshots, loading, error] = useData(`/gamePictures/${gameId}`);
    const InfoOfGameSpecificPictures = snapshots.map(v => {
        const eachPictureObject = {};
        eachPictureObject[v.key] = v.val();
        return eachPictureObject;
    });
    const numberOfPictures = InfoOfGameSpecificPictures.length || 0;
    const timeSortedInfoOfPictures = numberOfPictures > 1 ? sortDataFromOldToNew(InfoOfGameSpecificPictures)
        : numberOfPictures === 1 ? InfoOfGameSpecificPictures
            : null;

    const imageGallery = loading ? <p>Images: Loading...</p>
        : error ? <p>Error: {error}</p>
            : timeSortedInfoOfPictures ? timeSortedInfoOfPictures.map(imageDataObject => {
                    const imageInfo = Object.values(imageDataObject)[0];
                    const url = imageInfo['url'];
                    return <div key={url} className="col-md-4">
                        <div className="thumbnail">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img src={url} alt="uploadedImage" style={{width: '100%', marginTop: '10%'}}/>
                            </a>
                            <div className="caption">
                                <p style={{margin: 0}}>{`${imageInfo['author']}(${imageInfo['email']})`}</p>
                                <small>{getTime(imageInfo['timestamp'])}</small>
                            </div>
                        </div>
                    </div>
                }
            ) : null;


    // useEffect(() => {        // As also explained above next to imageListRef. We don't use ref_storage to fetch the urls. If we had used it, useList would have been used to be able to get all the url under a path as a list. For future studies this is kept here. And also to be able to sort the pictures according to the upload dates.
    //     listAll(imageListRef).then((response) => {       // useList hook inside useData method has its own useEffect hook so we don't need to use useEffect, we will always fetch the urls from database thanks to useList hook.
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrlList((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);


    return (
        <>
            <h2>Pictures of game {gameId}</h2>

            <Picture>{imageGallery}</Picture>

            <UploadPictureForm user={user} gameId={gameId}/>

            <BackToGameDetailsButton gameId={gameId}/>
        </>
    );
};

export default PicturesPage;