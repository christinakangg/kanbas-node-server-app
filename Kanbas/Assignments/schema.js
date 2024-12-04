import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        number: String,
        title: String, 
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        available_date: String, 
        available_until: String, 
        due_date: String, 
        points: Number, 
        description: String,
    },
    { collection: "assignments"}
);
export default assignmentSchema; 