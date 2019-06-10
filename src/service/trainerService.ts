import { Request, Response } from "express"
import { trainerModel } from "../models/trainer";
import { ResponseService } from "../helper/ResponseService";


export class TrainerService {

    public static async CreateTrainer(req: Request) {
        try {
            let newtrainer = new trainerModel(req.body)
            await newtrainer.save()
            return ResponseService.getValidResponse(newtrainer)
        }
        catch (error) {
            ResponseService.getInvalidResponse(error)
        }
    }


}