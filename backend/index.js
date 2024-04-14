import { PORT, mongoDBURL } from "./config.js";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import { Student } from './models/studentModel.js';
import { Semester } from './models/semesterModel.js';
import { Course } from "./models/coursesModel.js";
import { Events } from "./models/eventsModel.js";
import { Exercise } from "./models/exercisesModel.js";
import { News } from './models/newsModel.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/exercises', async (request, response) => {
    try {
        const { exercise_name, exercise_subject, exercise_content } = request.body;
        const newExercise = new Exercise({ exercise_name, exercise_subject, exercise_content });
        const savedExercise = await newExercise.save();
        return response.status(201).json(savedExercise);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

app.get('/', (request, response) => {
    response.send("Welcome to Student Management System");
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
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
