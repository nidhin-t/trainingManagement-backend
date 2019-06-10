import { trainingCourseService } from "../service/trainingCourseService"
import { Response, Request } from "express";


export class trainingCourseController {

    public async createCourse(req: Request, res: Response) {
        let response = await trainingCourseService.createCourse(req)
        res.send(response)
    }

    public async getAllCourse(req: Request, res: Response) {
        let response = await trainingCourseService.getAllCourse(req)
        res.send(response)
    }

    public async getByNameCourse(req: Request, res: Response) {
        let response = await trainingCourseService.getByNameCourse(req)
        res.send(response)
    }

    public async updateCourse(req: Request, res: Response) {
        let response = await trainingCourseService.updateCourse(req)
        res.send(response)
    }

    public async deleteCourse(req: Request, res: Response) {
        let response = await trainingCourseService.deleteCourse(req)
        res.send(response)
    }


}