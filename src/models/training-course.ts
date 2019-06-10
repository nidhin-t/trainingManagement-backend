import * as mongoose from "mongoose"

const schema = mongoose.Schema

const trainingCourseSchema = new schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: String, required: true },
        price: { type: Number, required: true },
        trainers: [{ type: schema.Types.ObjectId, ref: "Trainer" }],
        active: { type: Boolean, required: true },
        createdDate: { type: Date, required: true },
        updatedDate: { type: Date }
    }
)

export const trainingCourseModel = mongoose.model("TrainingCourse", trainingCourseSchema)