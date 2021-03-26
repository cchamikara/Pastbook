import { useSelector, useDispatch } from "react-redux";
import Gallery from "react-photo-gallery";

import config from "../../config";
import { toggleSelectedImages, toggleGrid } from "../../redux/actions";
import { SelectedImage, Button } from "..";

import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { images, selectedImages, isGrid } = useSelector((state) => state);

  const isGridReady = selectedImages.length === config.imagesPerGrid;

  console.log(isGrid);

  const handleImageToggle = ({ isSelected, photo }) => {
    if (isSelected) {
      const newSelectedImages = selectedImages.filter(
        ({ id }) => id !== photo.id
      );
      dispatch(toggleSelectedImages(newSelectedImages));
    } else {
      if (selectedImages.length < config.imagesPerGrid) {
        const newSelectedImages = [...selectedImages, photo];
        dispatch(toggleSelectedImages(newSelectedImages));
      } else {
        console.log("you can select only 9 images");
      }
    }
  };

  const imageRenderer = ({ index, left, top, key, photo }) => {
    return (
      <SelectedImage
        selected={false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
        handleImageToggle={handleImageToggle}
      />
    );
  };

  return (
    <div className="PhotoGallery">
      <div className="PhotoGallery-header">
        <div className="PhotoGallery-notification">
          {!isGridReady
            ? `You need to select ${selectedImages.length}/${config.imagesPerGrid} more images`
            : "Great proceed to next step"}
        </div>
        <Button
          enabled={isGridReady}
          onClick={() => {
            console.log("test", !isGrid);
            dispatch(toggleGrid(!isGrid));
          }}
        >
          Next
        </Button>
      </div>

      <Gallery photos={images} renderImage={imageRenderer} />
    </div>
  );
};

export default PhotoGallery;
