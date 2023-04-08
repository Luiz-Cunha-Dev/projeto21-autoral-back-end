import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation";
import { deleteEntertainment, getAllEntertainments, getCategories, getEntertainmentByType, getEntertainmentQuantity, postNewEntertainment, putEntertainment } from "../controllers/entertainments.controller";
import { schemaValidation } from "../middlewares/schemaValidation";
import entertainmentSchema from "../schemas/entertainments.schema";

const entertainmentRouter = Router();

entertainmentRouter
.all("/entertainment/*", tokenValidation)
.get("/entertainment/categories", getCategories)
.get("/entertainment/type/:typeName", getEntertainmentByType)
.get("/entertainment/all", getAllEntertainments)
.get("/entertainment/quantity", getEntertainmentQuantity)
.post("/entertainment/create", schemaValidation(entertainmentSchema), postNewEntertainment)
.put("/entertainment/update/:entertainmentsUsersId", schemaValidation(entertainmentSchema), putEntertainment)
.delete("/entertainment/delete/:entertainmentsUsersId", deleteEntertainment)

export default entertainmentRouter;