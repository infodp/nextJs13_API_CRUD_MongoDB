import mongoose from "mongoose";
//Creamos un Schema
const studentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please complete the field."]
        },
        age:{
            type: Number,
            required: [true, "Please complete the field."]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Creamos el modelo a partir del Schema
export const StudentModel = mongoose?.models?.Student || mongoose.model("Student", studentSchema)