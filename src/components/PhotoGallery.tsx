import { StorageReference } from "firebase/storage";
import { useRef, useState } from "react";
import {
  LazyLoadImage,
  ScrollPosition,
  trackWindowScroll,
} from "react-lazy-load-image-component";

interface ImageProp {
  imageRef: StorageReference;
  url: string;
}

interface PhotoGalleryProps {
  images: Array<ImageProp>;
  scrollPosition: ScrollPosition;
}

const PhotoGallery = ({ images, scrollPosition }: PhotoGalleryProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [dialogImage, setDialogImage] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setDialogImage(e.currentTarget.src);
    dialogRef.current?.showModal();
  };

  return (
    <div className="photo-gallery_wrapper">
      {images.map((image, index) => {
        return (
          <LazyLoadImage
            alt=""
            key={image.imageRef.name}
            src={image.url}
            className="photo-gallery_image"
            effect="opacity"
            onClick={handleClick}
            scrollPosition={scrollPosition}
          />
        );
      })}

      <dialog ref={dialogRef} onClick={() => dialogRef.current?.close()}>
        <img alt="" src={dialogImage}></img>
      </dialog>
    </div>
  );
};

export default trackWindowScroll(PhotoGallery);
