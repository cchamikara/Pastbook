import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { toggleGrid } from "../../redux/actions";
import { Button, DragableImage } from "..";

import "./PhotoGrid.scss";

const PhotoGrid = () => {
  const dispatch = useDispatch();
  const { selectedImages, isGrid } = useSelector((state) => state);
  const [items, setItems] = useState(selectedImages);

  const SortablePhoto = SortableElement((item) => <DragableImage {...item} />);
  const SortableGallery = SortableContainer(({ items }) => (
    <Gallery
      photos={items}
      renderImage={(props) => <SortablePhoto {...props} />}
    />
  ));
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
//   console.log('selectedImages', selectedImages);
//   console.log('items', items);

  return (
    <div className="PhotoGrid">
      <div className="PhotoGallery-header">
        <div className="PhotoGallery-notification">
          Order your photo grid by dragging and dropping images
        </div>
        <div>
          <Button
            enabled={true}
            onClick={() => dispatch(toggleGrid(!isGrid))}
            style={{ marginRight: "10px", background: "lightgray" }}
          >
            Back
          </Button>
          <Button enabled={true} onClick={() => {}}>
            Save
          </Button>
        </div>
      </div>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
};

export default PhotoGrid;
