import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchImages } from "../../redux/actions";
import { PhotoGallery, PhotoGrid } from "../";

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const { isLoading, isGrid } = useSelector((state) => state);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>{isGrid ? <PhotoGrid /> : <PhotoGallery />}</>
      )}
    </div>
  );
};

export default Content;
