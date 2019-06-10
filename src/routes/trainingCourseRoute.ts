import {Router} from "express"
import {trainingCourseController} from "../controller/trainingCourseController"

const trainingCourseObj = new trainingCourseController()
export const trainingCourseRoute: Router = Router()
trainingCourseRoute.post("/create",trainingCourseObj.createCourse)
trainingCourseRoute.get("/getall",trainingCourseObj.getAllCourse)
trainingCourseRoute.get("/:id",trainingCourseObj.getByNameCourse)
trainingCourseRoute.put("/update/:id",trainingCourseObj.updateCourse)
trainingCourseRoute.delete("/delete/:id",trainingCourseObj.deleteCourse)