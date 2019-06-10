import * as mongoose from "mongoose"

const schema = mongoose.Schema

const trainerSchema = new schema(
    {
        Name: { type: String, required: true },
        Email: { type: String, required: true },
        Mobile: { type: Number, required: true },
        Skills: { type: String },
        Experience: { type: String, required: true },
        Availability:
        {
            type: String,
            enum: ["Fulltime", "Weekdays - Morning", "Weekdays - Evening", "Weekends - Morning", "Weekends - Evening"]
        },
        Type: { type: String, enum: ["Inhouse", "Freelancer"] },
        TrainingCourses: [{ type: schema.Types.ObjectId, ref: "TrainingCourse" }]
    }
)

export const trainerModel = mongoose.model("Trainer", trainerSchema)