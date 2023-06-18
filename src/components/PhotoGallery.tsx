import {
  LazyLoadImage,
  ScrollPosition,
  trackWindowScroll,
} from "react-lazy-load-image-component";

interface PhotoGalleryProps {
  images: Array<string>;
  scrollPosition: ScrollPosition;
}

const PhotoGallery = ({ images, scrollPosition }: PhotoGalleryProps) => {
  return (
    <div className="photo-gallery_wrapper">
      {images.map((image, index) => {
        return (
          <LazyLoadImage
            style={{ pointerEvents: "none" }}
            draggable={false}
            key={index}
            src={image}
            width={"auto"}
            height={"200px"}
            scrollPosition={scrollPosition}
            effect="blur"
          />
        );
      })}
    </div>
  );
};

export default trackWindowScroll(PhotoGallery);
