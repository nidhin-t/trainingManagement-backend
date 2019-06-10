import { Router } from "express"
import { TrainerController } from "../controller/trainerController";

const trainerObj = new TrainerController()

export const trainerRoute: Router = Router();

trainerRoute.post("/create", trainerObj.CreateTrainer)