import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import { Student } from './models/studentModel.js';
import { Semester } from './models/semesterModel.js';
import { Course } from "./models/coursesModel.js";
import { Events } from "./models/eventsModel.js";
import { Exercise } from "./models/exercisesModel.js";
import { News } from './models/newsModel.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Read the HTML file
const htmlContent = readFileSync(`${__dirname}/index.html`, 'utf8');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//Landing page
app.get('/', (req, res) => {
    res.send(htmlContent);
});

// Get Exercise by ID Endpoint
app.get('/exercises/:id', async (request, response) => {
    try {
        const exerciseId = request.params.id;
        const exercise = await Exercise.findById(exerciseId);
        if (!exercise) {
            return response.status(404).json({ message: 'Exercise not found' });
        }
        return response.status(200).json(exercise);
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ message: 'Internal server error' });
    }
});

//Update exercises
app.put('/exercises/:id', async (request, response) => {
    try {
        const { exercise_name, exercise_subject, exercise_content, status } = request.body;
        const updatedExercise = await Exercise.findByIdAndUpdate(
            request.params.id,
            { exercise_name, exercise_subject, exercise_content, status },
            { new: true }
        );
        return response.status(200).json(updatedExercise);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Post exercises
app.post('/exercises', async (request, response) => {
    try {
        const { exercise_name, exercise_subject, exercise_content, status } = request.body;
        const newExercise = new Exercise({ exercise_name, exercise_subject, exercise_content, status });
        const savedExercise = await newExercise.save();
        return response.status(201).json(savedExercise);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//News Endpoint
app.get('/exercises', async (request, response) => {
    try {
        const exercises = await Exercise.find({});

        const data = { exercises };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//News Endpoint
app.get('/news', async (request, response) => {
    try {
        const news = await News.find({});

        const data = { news };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Events Endpoint
app.get('/events', async (request, response) => {
    try {
        const events = await Events.find({});

        const data = { events };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Semester Endpoint
app.get('/semester', async (request, response) => {
    try {
        const semester = await Semester.find({});

        const data = { semester };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Courses Endpoint
app.get('/courses', async (request, response) => {
    try {
        const courses = await Course.find({});
        const data = { courses };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Students Endpoint
app.get('/students', async (request, response) => {
    try {
        const students = await Student.find({});

        const data = { students };
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

mongoose
    .connect(process.env.DB_STRING)
    .then(() => {
        console.log("App connected to database");
        app.listen(3000, () => {
            console.log(`App is listening on port: 3000`);
        });
    })
    .catch((error) => {
        console.log(error);
    });