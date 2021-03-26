import axios from "axios";

import {
  START_IMAGE_FETCHING,
  SUCCESS_IMAGE_FETCHING,
  FAILED_IMAGE_FETCHING,
  TOGGLE_IMAGE_SELECT,
  TOGGLE_IMAGE_GRID,
} from "./constants";
import config from "../config";

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch({ type: START_IMAGE_FETCHING });

    // const { data } = await axios.get(`${config.backendUrl}/images`);

    dispatch({
      type: SUCCESS_IMAGE_FETCHING,
      payload: {
        images: [
          {
            id: 204900001,
            src: "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN",
            width: 4000,
            height: 6000,
          },
          {
            id: 204900002,
            src: "https://www.filepicker.io/api/file/oTUic0PTS4KiBJFbahbl",
            width: 3749,
            height: 5537,
          },
          {
            id: 204900003,
            src: "https://www.filepicker.io/api/file/OqPljPIRimcdPI5DWxlv",
            width: 7360,
            height: 4912,
          },
          {
            id: 204900004,
            src: "https://www.filepicker.io/api/file/OkleqwBQLCvFBAbByUxY",
            width: 2473,
            height: 3003,
          },
          {
            id: 204900005,
            src: "https://www.filepicker.io/api/file/AbFrknBZRLGmJuUTWYr2",
            width: 7952,
            height: 5304,
          },
          {
            id: 204900006,
            src: "https://www.filepicker.io/api/file/d7x3POy5SZi3tSOt91PP",
            width: 3073,
            height: 5463,
          },
          {
            id: 204900007,
            src: "https://www.filepicker.io/api/file/APOJhuSF2hQB370cIc8A",
            width: 7952,
            height: 5304,
          },
          {
            id: 204900008,
            src: "https://www.filepicker.io/api/file/vecb8mtvR4SNwfVlWdZo",
            width: 4032,
            height: 3024,
          },
          {
            id: 204900009,
            src: "https://www.filepicker.io/api/file/Gztd1zETrmjk4vYcuiQ2",
            width: 4000,
            height: 6000,
          },
          {
            id: 204900010,
            src: "https://www.filepicker.io/api/file/YDFPdySyivzEgopu58Lw",
            width: 5621,
            height: 3747,
          },
          {
            id: 204900011,
            src: "https://www.filepicker.io/api/file/VpKlBFJRotNVbF8EEFtA",
            width: 2775,
            height: 1850,
          },
          {
            id: 204900012,
            src: "https://www.filepicker.io/api/file/C355ixgkQVCYGNkGSG50",
            width: 3793,
            height: 4741,
          },
          {
            id: 204900013,
            src: "https://www.filepicker.io/api/file/lFkDrVuPRIG4ubhSMrsE",
            width: 2000,
            height: 3000,
          },
          {
            id: 204900014,
            src: "https://www.filepicker.io/api/file/3LtOaKHyQemw8j2HUDE9",
            width: 6422,
            height: 4282,
          },
          {
            id: 204900015,
            src: "https://www.filepicker.io/api/file/CTpPD6vkQF58qaiPglhQ",
            width: 3413,
            height: 4551,
          },
          {
            id: 204900016,
            src: "https://www.filepicker.io/api/file/4BzYSsWOSOCbtG302olA",
            width: 3937,
            height: 4921,
          },
          {
            id: 204900017,
            src: "https://www.filepicker.io/api/file/2ldBY3MJTtyndYbR00z2",
            width: 3456,
            height: 5184,
          },
          {
            id: 204900018,
            src: "https://www.filepicker.io/api/file/QtGhHaWCRtKnIilzxrR2",
            width: 5304,
            height: 7952,
          },
          {
            id: 204900019,
            src: "https://www.filepicker.io/api/file/5UFD4b5fS3eKH6MsQa2q",
            width: 3151,
            height: 2922,
          },
          {
            id: 204900020,
            src: "https://www.filepicker.io/api/file/H4JckkwNRbaTVMR3jh6B",
            width: 3500,
            height: 2333,
          },
          {
            id: 204900021,
            src: "https://www.filepicker.io/api/file/lCYG8m99QxGhAR0OObJw",
            width: 3736,
            height: 3736,
          },
          {
            id: 204900022,
            src: "https://www.filepicker.io/api/file/yGSkL96QGmv6M4acLgNs",
            width: 4000,
            height: 5000,
          },
          {
            id: 204900023,
            src: "https://www.filepicker.io/api/file/fLdzTB6zS5iuPGb3c2R4",
            width: 3910,
            height: 5065,
          },
          {
            id: 204900024,
            src: "https://www.filepicker.io/api/file/vvzp9Sk2TkaI1x6ip9Mc",
            width: 3578,
            height: 4472,
          },
          {
            id: 204900025,
            src: "https://www.filepicker.io/api/file/rPrcNH0aRW89ifdqlEuf",
            width: 7258,
            height: 4841,
          },
          {
            id: 204900026,
            src: "https://www.filepicker.io/api/file/4cmn2DpmT7y0Ops40aG7",
            width: 9314,
            height: 6209,
          },
          {
            id: 204900027,
            src: "https://www.filepicker.io/api/file/MFjpQCVrTsW8nr1ou3zT",
            width: 4000,
            height: 6000,
          },
          {
            id: 204900028,
            src: "https://www.filepicker.io/api/file/uQM3FeS2TvSjYYtGgWLx",
            width: 5993,
            height: 3995,
          },
          {
            id: 204900029,
            src: "https://www.filepicker.io/api/file/y4KVb6igRb6x7AUSjX2U",
            width: 5866,
            height: 3903,
          },
          {
            id: 204900030,
            src: "https://www.filepicker.io/api/file/5ZoS74eLQTGPJOBc7lfn",
            width: 5786,
            height: 3850,
          },
          {
            id: 204900031,
            src: "https://www.filepicker.io/api/file/o5JNq1jSIW7J15A5cjuM",
            width: 6000,
            height: 3845,
          },
          {
            id: 204900032,
            src: "https://www.filepicker.io/api/file/0KHHtW5pQeunZJiyJb8V",
            width: 3840,
            height: 5760,
          },
          {
            id: 204900033,
            src: "https://www.filepicker.io/api/file/BFYcwcixRSGlV7MOwI85",
            width: 5464,
            height: 3640,
          },
          {
            id: 204900034,
            src: "https://www.filepicker.io/api/file/EFOpZXR9TsWTWhF4F4SX",
            width: 4160,
            height: 6240,
          },
          {
            id: 204900035,
            src: "https://www.filepicker.io/api/file/z36zDtrRuUJ3HAOw4uEg",
            width: 4654,
            height: 6973,
          },
          {
            id: 204900036,
            src: "https://www.filepicker.io/api/file/wR1dtVwSLqMW5ueGUUug",
            width: 3369,
            height: 5053,
          },
          {
            id: 204900037,
            src: "https://www.filepicker.io/api/file/EH84oM3DTRSvP9dUPKCm",
            width: 8256,
            height: 5504,
          },
        ],
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: FAILED_IMAGE_FETCHING });
  }
};

export const toggleSelectedImages = (selectedImages) => (dispatch) => {
  dispatch({
    type: TOGGLE_IMAGE_SELECT,
    payload: {
      selectedImages,
    },
  });
};

export const toggleGrid = (isGrid) => (dispatch) => {
  dispatch({
    type: TOGGLE_IMAGE_GRID,
    payload: {
      isGrid,
    },
  });
};
