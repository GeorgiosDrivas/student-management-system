import mongoose from 'mongoose';

const exercisesSchema = mongoose.Schema(
    {
        exercise_name: {
            type: String,
        },
        exercise_subject: {
            type: String,
        },
        exercise_content: {
            type: String,
        },
    }
);

export const Exercise = mongoose.model("Exercise", exercisesSchema);