import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    {
        course_name: {
            type: String,
        },
        course_desc: {
            type: String,
        },
        midterm_grade: {
            type: Number,
        }
    }
);

export const Course = mongoose.model("Course", courseSchema);