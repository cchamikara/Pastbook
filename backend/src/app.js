import express from "express";
import cors from "cors";

import config from "./config";

import fetchImages from "./controllers/fetchImages";
import calculateAspectRatio from "./controllers/calculateAspectRatio";

const app = express();
app.use(cors());
const api = new express.Router();

/**
 * End point for image fetching
 */
api.get("/images", fetchImages, calculateAspectRatio, (req, res) => {
  res.status(200).json(res.locals.response);
});

/**
 * Returns data from API
 */
app.use("/api", api);
app.use((req, res) => {
  return res.status(404).send({ message: `Route ${req.url} Not found.` });
});
app.use(errorHandler);

function errorHandler(err, req, res) {
  res.status(500);
  res.render("error", { error: err });
}

app.listen(config.app.port, () =>
  console.log(`App listening on port ${config.app.port}`)
);
