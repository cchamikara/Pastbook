import {
  START_IMAGE_FETCHING,
  SUCCESS_IMAGE_FETCHING,
  FAILED_IMAGE_FETCHING,
  TOGGLE_IMAGE_SELECT,
  TOGGLE_IMAGE_GRID,
} from "./constants";

const initialState = {
  images: [],
  selectedImages: [],
  isLoading: false,
  isError: false,
  isGrid: false,
};

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case START_IMAGE_FETCHING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SUCCESS_IMAGE_FETCHING:
    case TOGGLE_IMAGE_SELECT:
    case TOGGLE_IMAGE_GRID:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isError: false,
      };
    case FAILED_IMAGE_FETCHING:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
