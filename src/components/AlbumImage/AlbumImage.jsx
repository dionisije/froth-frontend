import React, {useState} from 'react';

const ImageFallback = ({src, ...props}) => {
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState(src);

    const onError = () => {
        if (!error) {
            setImgSrc('/assets/record.svg');
            setError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            onError={onError}
            alt="default album cover"
            {...props}
        />
    );
};

const AlbumImage = ({className, src, Name}) => ( 
    <ImageFallback
        className={className}
        src={src}
        alt={Name}
    />
);

export default AlbumImage;
