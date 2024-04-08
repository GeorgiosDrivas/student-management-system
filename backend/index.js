import { PORT, mongoDBURL } from "./config.js";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import { Student } from './models/studentModel.js';
import { Semester } from './models/semesterModel.js';
import { Course } from "./models/coursesModel.js";
import { Events } from "./models/eventsModel.js";
import { News } from './models/newsModel.js';

const app = express();
app.use(express.json());
app.use(cors());

// Route to add a new course
app.post('/students', async (request, response) => {
    try {
        const { course_name, course_teacher, midterm_grade } = request.body; // Assuming the request body contains these fields
        const newCourse = new Course({ course_name, course_teacher, midterm_grade });
        const savedCourse = await newCourse.save();
        return response.status(201).json(savedCourse);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

app.get('/', (request, response) => {
    response.send("Welcome to Student Management System");
});

app.get('/students', async (request, response) => {
    try {
        const students = await Student.find({});
        const courses = await Course.find({});
        const semester = await Semester.find({});
        const events = await Events.find({});
        const news = await News.find({});

        const data = { students, courses, semester, events, news };
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
