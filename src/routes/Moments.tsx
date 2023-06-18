import { Link } from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import app from "../firebaseConfig";

export default function Moments() {
  const storage = getStorage(app);

  const storageRef = ref(storage, "images/");

  const [allImages, setAllImages] = useState<Array<string>>([]);

  // take Firebase storage photos and convert to HTMLImageElement
  useEffect(() => {
    // fetch photos from Firebase storage
    listAll(storageRef)
      .then((result) => {
        result.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setAllImages((allImages) => [...allImages, url]);
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
        <PhotoGallery images={allImages} />
      </div>
    </div>
  );
}
