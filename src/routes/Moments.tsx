import { Link } from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";
import { useEffect, useRef, useState } from "react";
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import app from "../firebaseConfig";

interface ImageProp {
  imageRef: StorageReference;
  url: string;
}

export default function Moments() {
  const storage = getStorage(app);

  const storageRef = ref(storage, "images/small/");

  const [allImages, setAllImages] = useState<Array<ImageProp>>([]);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const [dialogImage, setDialogImage] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bodyRef = document.querySelector("body");
    setDialogImage(e.currentTarget.src);
    dialogRef.current?.showModal();
    if (bodyRef) {
      bodyRef.style.overflow = "hidden";
    }
  };

  const handleDialogClose = () => {
    const bodyRef = document.querySelector("body");
    dialogRef.current?.close();
    if (bodyRef) {
      bodyRef.style.overflow = "auto";
    }

    setDialogImage("");
  };

  // take Firebase storage photos and convert to HTMLImageElement
  useEffect(() => {
    // fetch photos from Firebase storage
    listAll(storageRef)
      .then((result) => {
        result.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setAllImages((allImages) => [...allImages, { imageRef, url }]);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // convert to HTMLImageElement
  }, []);

  return (
    <div className="moments_container">
      <h1 className="moments_title">Welcome</h1>
      <div className="moments_gallery">
        <PhotoGallery images={allImages} handleClick={handleClick} />
      </div>
      <dialog
        className="moments_dialog"
        ref={dialogRef}
        onClick={handleDialogClose}
      >
        <img className="dialog_img" alt="" src={dialogImage}></img>
      </dialog>
    </div>
  );
}
