import { useState, useEffect, useRef } from "react";
import classNames from "classnames";


import "./lazyLoadingImage.scss";

const LazyLoadingImage = ({src, alt}) => {

     const [isLoadedImage, setIsLoadedImage] = useState(false);
     const imgRef = useRef();

     useEffect(() => {
          if (imgRef.current) {
               imgRef.current.onload = () => setIsLoadedImage(true);
          }
     }, [])
     
     const classOfImage = classNames( "container-image", {
          "image-loaded": isLoadedImage,
          "image-daria": alt === "Дарія"
     })
     return (
          <div className={classOfImage}>
               <img src={src} alt={alt} ref={imgRef}  /> 
          </div>
     );
};

export default LazyLoadingImage ;