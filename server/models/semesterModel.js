import mongoose from 'mongoose';

const semesterSchema = mongoose.Schema(
    {
        start: {
            type: Date,
        },
        end: {
            type: Date,
        }
    },
    { collection: 'semester' }
);

export const Semester = mongoose.model("Semester", semesterSchema);