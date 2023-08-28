import React from 'react';

//TODO
const Picture = ({imageUrl}) => {
    return imageUrl ?
        (<div>
             <img src={imageUrl} alt="uploadedImage" style={{height: 150}}/>
         </div>) :
        (<p>Loading...</p>)
};

export default Picture;