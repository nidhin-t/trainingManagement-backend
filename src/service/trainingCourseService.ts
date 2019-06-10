import { trainingCourseModel } from "../models/training-course"
import { ResponseService } from "../helper/ResponseService"
import { Request, Response } from "express"


export class trainingCourseService {
    public static async createCourse(req: Request) {
        try {
            let newCourse = new trainingCourseModel(req.body)
            await newCourse.save()
            return ResponseService.getValidResponse(newCourse)
        }
        catch (error) {
            ResponseService.getInvalidResponse(error)
        }
    }

    public static async getAllCourse(req: Request) {
        try {
            let allCourse = await trainingCourseModel.find().exec();
            return ResponseService.getValidResponse(allCourse)

        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }

    public static async getByNameCourse(req: Request) {
        try {
            let course = await trainingCourseModel.findById(req.params.id).exec();
            return ResponseService.getValidResponse(course)
        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }

    public static async updateCourse(req: Request) {
        try {
            let updateCourse = await trainingCourseModel.findByIdAndUpdate(req.params.id, { trainers: req.body.trainers }).exec()
            return ResponseService.getValidResponse(updateCourse)
        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }

    public static async deleteCourse(req: Request) {
        try {
            let removeCourseName = await trainingCourseModel.findByIdAndDelete(req.params.id).exec()
            return ResponseService.getValidResponse(removeCourseName)
        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }

}