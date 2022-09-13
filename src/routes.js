import Router from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import legendaryValidator from "./middlewares/LegendaryValidator";

import CreateLegendaryController from "./app/controllers/legendary/CreateLegendaryController";
import DeleteLegendaryController from "./app/controllers/legendary/DeleteLegendaryController";
import ListLegendariesController from "./app/controllers/legendary/ListLegendariesController";
import UpdateLegendaryController from "./app/controllers/legendary/UpdateLegendaryController";

import CreateTrainerController from "./app/controllers/trainer/CreateTrainerController";
import ListAllTrainersController from "./app/controllers/trainer/ListAllTrainersController";
import UpdateTrainerController from "./app/controllers/trainer/UpdateTrainerController";

import UpdateFileController from "./app/controllers/upload/UploadFileController";

import SessionController from "./app/controllers/auth/SessionController";

import validateSessionToken from "./middlewares/ValidateSessionToken";

import ListRemotePokemonsController from "./app/controllers/remote-pokemon/ListRemotePokemons";

const uploadFile = multer({ storage: multerConfig });

const routes = new Router();

const createLegendaryController = new CreateLegendaryController();
const listLegendariesController = new ListLegendariesController();
const updateLegendaryController = new UpdateLegendaryController();
const deleteLegendaryController = new DeleteLegendaryController();

routes.post("/session", (req, res) => SessionController.create(req, res));

routes.get("/trainers", (req, res) =>
  listAllTrainersController.listAll(req, res)
);

routes.use(validateSessionToken);

routes.get("/legendaries", (req, res) =>
  listLegendariesController.index(req, res)
);
routes.post("/legendaries", legendaryValidator, (req, res) =>
  createLegendaryController.create(req, res)
);
routes.put("/legendaries/:id", (req, res) =>
  updateLegendaryController.update(req, res)
);
routes.delete("/legendaries/:id", (req, res) =>
  deleteLegendaryController.delete(req, res)
);

const listAllTrainersController = new ListAllTrainersController();
const createTrainerController = new CreateTrainerController();
const updateTrainerController = new UpdateTrainerController();

routes.post("/trainers", (req, res) =>
  createTrainerController.create(req, res)
);
routes.put("/trainers/:id", (req, res) =>
  updateTrainerController.update(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
  UpdateFileController.storeFile(req, res)
);

const listRemotePokemonsController = new ListRemotePokemonsController();

routes.get("/remote-pokemons", (req, res) => {
  listRemotePokemonsController.index(req, res);
});

routes.get("/remote-pokemons/:name", (req, res) => {
  listRemotePokemonsController.show(req, res);
});
export default routes;
