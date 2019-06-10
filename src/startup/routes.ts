import * as Express from "express"
import { trainingCourseRoute } from '../routes/trainingCourseRoute'
import { trainerRoute } from "../routes/trainerRoute";


export class Routes {

    public static registerRoutes(app: Express.Application) {
        app.get('/', (req: Request, res: any) => {
            res.send("It Works!!")
        });
        app.use('/training-course', trainingCourseRoute)
        app.use('/trainers', trainerRoute)
    }
}
