import { StorageReference } from "firebase/storage";
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
  handleClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const PhotoGallery = ({
  images,
  scrollPosition,
  handleClick,
}: PhotoGalleryProps) => {
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
    </div>
  );
};

export default trackWindowScroll(PhotoGallery);
