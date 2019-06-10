import { Request, Response } from "express"
import { TrainerService } from "../service/trainerService";


export class TrainerController {

    public async CreateTrainer(req: Request, res: Response) {
        let response = await TrainerService.CreateTrainer(req)
        res.send(response)
    }


}