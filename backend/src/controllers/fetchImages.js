import axios from "axios";
import config from "../config";

const fetchImages = async (req, res, next) => {
  const {
    endpoint: { url },
  } = config;

  const {
    data: { entries = [] },
  } = await axios.get(url);


  res.locals.response = entries;

  return next();
};

export default fetchImages;
