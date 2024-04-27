import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        surname: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        }
    }
);

export const Student = mongoose.model("Student", studentSchema);